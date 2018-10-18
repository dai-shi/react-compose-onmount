type Callback<P> = ((props: P) => void) | void;
type Options = {
  onMount: string | undefined,
  onUnmount: string | undefined,
};
export type ComposeWithOnMount =
  <P extends {}>(onMount: Callback<P>, onUnmount?: Callback<P>, options?: Options) =>
    (base: React.ComponentType<P>) => React.ComponentType<P>;
export const composeWithOnMount: ComposeWithOnMount;
