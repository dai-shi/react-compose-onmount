type Callback<P> = ((props: P) => void) | undefined;
type Options = {
	onMount: string | undefined,
	onUnmount: string | undefined,
};
export type ComposeWithOnMount =
	<P extends {}>(onMount: Callback<P>, onUnmount?: Callback<P>, options?: Options) =>
    React.ComponentType<P> => React.ComponentType<P>;
export const composeWithOnMount: ComposeWithOnMount;
