import { createContext, useContext } from "react";

export default function buildContext<TContext>(): [
	React.Context<TContext | null>,
	() => TContext
] {
	const builtContext = createContext<TContext | null>(null);

	const builtUseContext = () => {
		const contextInstance = useContext(builtContext);
		if (contextInstance === null) {
			throw new Error(
				"You can use this hook only inside the context's provider."
			);
		}
		return contextInstance;
	};

	return [builtContext, builtUseContext];
}
