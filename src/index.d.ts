type Callback<P> = ((props: P) => void) | undefined;
type Options = {
	onMount: string | undefined,
	onUnmount: string | undefined,
};
export type composeWithOnMount =
	<P extends {}>(onMount: Callback<P>, onUnmount?: Callback<P>, options?: Options) =>
		React.ComponentType<P>;
