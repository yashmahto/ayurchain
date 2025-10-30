import * as React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    // console.error(error, info);
  }

  reset() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-xl w-full">
            <div className="rounded-lg border border-border p-6 bg-muted">
              <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
              <p className="text-sm text-muted-foreground mb-4">
                An unexpected error occurred. You can retry or report this issue if it persists.
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded" onClick={this.reset}>
                  Retry
                </button>
                <a href="/" className="px-4 py-2 border rounded">Go Home</a>
              </div>
              <details className="mt-4 text-xs text-muted-foreground">
                <summary>Debug info</summary>
                <pre className="whitespace-pre-wrap">{String(this.state.error)}</pre>
              </details>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
