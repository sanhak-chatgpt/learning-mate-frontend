import React from 'react';
import { BaseError } from '@/util/models/Error';

export type FallBackProps = {
  error: BaseError | undefined;
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

export declare function FallbackRender(
  props: FallBackProps
): React.ReactElement<unknown, string | React.FunctionComponent | typeof React.Component> | null;

export type ErrorBoundaryState = {
  error: BaseError | undefined;
  didCatch: boolean;
};

export type DefaultErrorBoundaryProps = {
  onError?: (error: Error, info: { componentStack: string }) => void;
  onReset?: (...args: Array<unknown>) => void;
};

export type ErrorBoundaryPropsWithComponent = {
  FallbackComponent: React.ComponentType<FallBackProps>;
  FallbackRenderer?: never;
} & DefaultErrorBoundaryProps;

export type ErrorBoundaryPropsWithRenderer = {
  FallbackComponent?: never;
  FallbackRenderer: typeof FallbackRender;
} & DefaultErrorBoundaryProps;

export type ErrorBoundaryProps = ErrorBoundaryPropsWithComponent | ErrorBoundaryPropsWithRenderer;
