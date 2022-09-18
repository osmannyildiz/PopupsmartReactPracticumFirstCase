import { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import AddTodoForm from "../components/todos/AddTodoForm";
import TodoList from "../components/todos/TodoList";
import Spinner from "../components/ui/Spinner";
import { useBackendContext } from "../contexts/BackendContext";
import { useUiContext } from "../contexts/UiContext";
import "./HomeView.css";

export default function HomeView() {
	const backendCtx = useBackendContext();
	const uiCtx = useUiContext();

	const fetchTodos = async () => {
		uiCtx.setIsSpinnerVisible(true);
		await backendCtx.fetchTodos();
		uiCtx.setIsSpinnerVisible(false);
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<MainLayout>
			<div className="home-view">
				<Spinner
					className={"home-view__spinner"}
					isVisible={uiCtx.isSpinnerVisible}
					color="var(--color-accent)"
				/>
				<AddTodoForm className="home-view__add-todo-form" />
				<TodoList className="home-view__todo-list" />
			</div>
		</MainLayout>
	);
}
