import { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { useBackendContext } from "../contexts/BackendContext";

export default function HomeView() {
	const backendContext = useBackendContext();

	useEffect(() => {
		backendContext.fetchTodos();
	}, []);

	return (
		<MainLayout>
			{backendContext.isFetchingTodos && <h1>fetching...</h1>}
			{backendContext.todos === null ? (
				<h1>welcome. plz wait for the initial fetch</h1>
			) : backendContext.todos ? (
				<>
					<ul>
						{(backendContext.todos || []).map((todo) => (
							<li key={todo.id}>{todo.content}</li>
						))}
					</ul>
					<button type="button" onClick={() => backendContext.fetchTodos()}>
						fetch todos
					</button>
				</>
			) : (
				<h1>no todos.</h1>
			)}
		</MainLayout>
	);
}
