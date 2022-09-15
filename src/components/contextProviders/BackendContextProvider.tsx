import { useState } from "react";
import { BackendContext, IBackendContext } from "../../contexts/BackendContext";
import Todo from "../../models/Todo";
import TodoService from "../../services/TodoService";

type Props = {
	children: React.ReactNode;
};

export default function BackendContextProvider({ children }: Props) {
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

	const contextValue: IBackendContext = {
		todos,
		isFetchingTodos,
		fetchTodos,
	};

	return (
		<BackendContext.Provider value={contextValue}>
			{children}
		</BackendContext.Provider>
	);
}
