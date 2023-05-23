import React, { PropsWithChildren, PropsWithRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from '@emotion/styled';

export type IntersectionObserverProps = PropsWithChildren<{
  triggerVariables: unknown[];
  inViewCallback?: (...args: any) => void;
}>;
// eslint-disable-next-line react/display-name
export const IntersectionObserver = React.forwardRef<HTMLDivElement, IntersectionObserverProps>(
  ({ triggerVariables, inViewCallback, children }, ref) => {
    useEffect(() => {
      console.log('옵저버 이펙트 실행');
      if (triggerVariables) {
        console.log(triggerVariables);
        const canTrigger = triggerVariables
          .map((val) => {
            return !!val;
          })
          .every((val) => val === true);

        if (canTrigger) {
          console.log(canTrigger);
          console.log(inViewCallback);
          inViewCallback?.();
        }
      }
    }, [inViewCallback, ...triggerVariables]);

    return <div ref={ref}>{children}</div>;
  }
);

export const InjectedRefIntersectionObserver = ({
  triggerVariables,
  inViewCallback,
  children,
}: IntersectionObserverProps) => {
  const { ref, inView } = useInView();

  return (
    <ObserverWrapper>
      <IntersectionObserver
        ref={ref}
        triggerVariables={[inView, ...triggerVariables]}
        inViewCallback={inViewCallback}>
        {children}
      </IntersectionObserver>
    </ObserverWrapper>
  );
};

export const ObserverWrapper = styled.div`
  width: 100%;
  min-height: 1rem;
`;
export default IntersectionObserver;
