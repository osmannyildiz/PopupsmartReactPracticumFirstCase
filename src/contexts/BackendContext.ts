import { useState } from "react";
import Todo from "../models/Todo";
import TodoService from "../services/TodoService";
import buildContext from "../utils/buildContext";

interface IBackendContext {
	todos: Todo[] | null;
	isFetchingTodos: boolean;
	fetchTodos: () => void;
}

export const [BackendContext, useBackendContext] =
	buildContext<IBackendContext>();

export function buildBackendContextValue(): IBackendContext {
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const [isFetchingTodos, setIsFetchingTodos] = useState(false);

	const fetchTodos = async () => {
		console.log("hey start");
		await new Promise((resolve, reject) => {
			setTimeout(resolve, 3000);
		});

		console.log("hey setisfetch");
		setIsFetchingTodos(true);
		await new Promise((resolve, reject) => {
			setTimeout(resolve, 3000);
		});

		console.log("hey fetch start");
		const resp = await TodoService.getAll();

		console.log("hey fetch end");
		await new Promise((resolve, reject) => {
			setTimeout(resolve, 3000);
		});

		console.log("hey set todos");
		setTodos(resp);
		await new Promise((resolve, reject) => {
			setTimeout(resolve, 3000);
		});

		console.log("hey setisfetch");
		setIsFetchingTodos(false);

		console.log("hey end");
	};

	return {
		todos,
		isFetchingTodos,
		fetchTodos,
	};
}
