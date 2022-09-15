import Todo from "../models/Todo";
import buildContext from "../utils/buildContext";

export interface IBackendContext {
	todos: Todo[] | null;
	isFetchingTodos: boolean;
	fetchTodos: () => void;
}

export const [BackendContext, useBackendContext] = buildContext<IBackendContext>();
