import { useState } from "react";
import Todo from "../models/Todo";
import TodoService from "../services/TodoService";
import buildContext from "../utils/buildContext";

interface IBackendContext {
	todos: Todo[] | null;
	fetchTodos: () => Promise<void>;
	addTodo: (content: string) => Promise<void>;
	updateTodo: (todo: Todo) => Promise<void>;
	deleteTodo: (todo: Todo) => Promise<void>;
}

export const [BackendContext, useBackendContext] =
	buildContext<IBackendContext>();

export function buildBackendContextValue(): IBackendContext {
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const fetchTodos = async () => {
		const resp = await TodoService.getAll();
		setTodos(resp);
	};

	const addTodo = async (content: string) => {
		const todo: Todo = {
			id: undefined,
			content: content,
			isCompleted: false,
		};
		const resp = await TodoService.create(todo);
	};

	const updateTodo = async (todo: Todo) => {
		const resp = await TodoService.update(todo);
	};

	const deleteTodo = async (todo: Todo) => {
		const resp = await TodoService.delete(todo);
	};

	return {
		todos,
		fetchTodos,
		addTodo,
		updateTodo,
		deleteTodo,
	};
}
