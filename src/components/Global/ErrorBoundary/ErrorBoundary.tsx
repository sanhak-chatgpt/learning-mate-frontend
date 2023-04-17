import { BaseError } from '@/util';
import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './index';

export const INITIAL_ERROR_BOUNDARY_STATE = {
  error: undefined,
  didCatch: false,
};

export class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = INITIAL_ERROR_BOUNDARY_STATE;

  reset() {
    this.setState(INITIAL_ERROR_BOUNDARY_STATE);
  }

  resetErrorBoundary = (...args: Array<unknown>) => {
    const { error } = this.state;
    if (error !== undefined) {
      this.props.onReset?.(...args);
      this.reset();
    }
  };

  static getDerivedStateFromError(error: BaseError) {
    return { error, didCatch: true };
  }

  componentDidCatch(error: BaseError, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
  }

  render() {
    const { children, FallbackRenderer, FallbackComponent } = this.props;
    const { didCatch, error } = this.state;

    if (didCatch) {
      const fallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (typeof FallbackRenderer === 'function')
        return FallbackRenderer(fallbackProps);
      else if (FallbackComponent)
        return <FallbackComponent {...fallbackProps}></FallbackComponent>;
      else
        throw new BaseError(
          'requires either a fallback, fallbackRender, or FallbackComponent prop'
        );
    }

    return children;
  }
}

export const createErrorBoundedComponent = <P extends JSX.IntrinsicElements>(
  Component: React.ComponentType<P>,
  fallbackProps: ErrorBoundaryProps
): React.ComponentType<P> => {
  const Wrapper: React.ComponentType<P> = (props) => {
    return (
      <ErrorBoundary {...fallbackProps}>
        <Component {...props}></Component>
      </ErrorBoundary>
    );
  };

  return Wrapper;
};
