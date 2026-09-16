import { execSync } from 'node:child_process'

const port = Number(process.argv[2] || 5173)

if (!Number.isInteger(port) || port <= 0) {
  process.exit(0)
}

function listeningPids(targetPort) {
  if (process.platform === 'win32') {
    try {
      const output = execSync('netstat -ano', { encoding: 'utf8' })
      const pids = new Set()

      for (const line of output.split(/\r?\n/)) {
        if (!line.includes('LISTENING')) continue

        const parts = line.trim().split(/\s+/)
        const localAddress = parts[1] ?? ''
        const pid = Number(parts.at(-1))

        if (
          pid > 0 &&
          (localAddress.endsWith(`:${targetPort}`) ||
            localAddress.endsWith(`]:${targetPort}`))
        ) {
          pids.add(pid)
        }
      }

      return [...pids]
    } catch {
      return []
    }
  }

  try {
    const output = execSync(`lsof -tiTCP:${targetPort} -sTCP:LISTEN`, {
      encoding: 'utf8',
    })
    return output
      .split(/\s+/)
      .map(Number)
      .filter((pid) => pid > 0)
  } catch {
    return []
  }
}

for (const pid of listeningPids(port)) {
  try {
    if (process.platform === 'win32') {
      execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' })
    } else {
      process.kill(pid, 'SIGTERM')
    }
  } catch {
    // Process may already be gone.
  }
}
