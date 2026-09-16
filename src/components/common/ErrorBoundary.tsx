import { Component, type ErrorInfo, type ReactNode } from 'react'

import { Page, PageHeader } from '@/components/common/Page'
import { Button } from '@/components/ui/button'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

const ERROR_COPY = {
  en: {
    title: 'Something went wrong',
    description: 'An unexpected error occurred while rendering this page.',
    tryAgain: 'Try again',
  },
  fa: {
    title: 'مشکلی پیش آمد',
    description: 'هنگام نمایش این صفحه خطای غیرمنتظره‌ای رخ داد.',
    tryAgain: 'تلاش مجدد',
  },
} as const

function getErrorCopy() {
  return document.documentElement.lang === 'fa' ? ERROR_COPY.fa : ERROR_COPY.en
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  override state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Unhandled UI error:', error, errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false })
  }

  override render() {
    if (this.state.hasError) {
      const copy = getErrorCopy()

      return (
        <Page>
          <PageHeader title={copy.title} description={copy.description} />
          <Button type="button" onClick={this.handleReset}>
            {copy.tryAgain}
          </Button>
        </Page>
      )
    }

    return this.props.children
  }
}
