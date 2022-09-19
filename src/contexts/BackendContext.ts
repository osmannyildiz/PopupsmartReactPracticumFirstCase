import { useState } from "react";
import Todo from "../models/Todo";
import TodoService from "../services/TodoService";
import buildContext from "../utils/buildContext";

interface IBackendContext {
	todos: Todo[] | null;
	fetchTodos: () => Promise<void>;
	addTodo: (content: string) => Promise<void>;
	updateTodoContent: (todo: Todo, newContent: string) => Promise<void>;
	updateTodoIsCompleted: (todo: Todo, newIsCompleted: boolean) => Promise<void>;
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

	const updateTodoContent = async (todo: Todo, newContent: string) => {
		const updatedTodo = { ...todo, content: newContent };
		const resp = await TodoService.update(updatedTodo);
	};

	const updateTodoIsCompleted = async (todo: Todo, newIsCompleted: boolean) => {
		const updatedTodo = { ...todo, isCompleted: newIsCompleted };
		const resp = await TodoService.update(updatedTodo);
	};

	const deleteTodo = async (todo: Todo) => {
		const resp = await TodoService.delete(todo);
	};

	return {
		todos,
		fetchTodos,
		addTodo,
		updateTodoContent,
		updateTodoIsCompleted,
		deleteTodo,
	};
}
