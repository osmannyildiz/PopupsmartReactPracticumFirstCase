import classNames from "classnames";
import { useBackendContext } from "../../contexts/BackendContext";
import Todo from "../../models/Todo";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

interface Props {
	className?: string;
}

export default function TodoList({ className }: Props) {
	const backendCtx = useBackendContext();

	const getSortedTodos = (): Todo[] => {
		if (!backendCtx.todos) {
			return [];
		}

		const reversedTodos = [...backendCtx.todos].reverse();

		const notCompletedTodos: Todo[] = [];
		const completedTodos: Todo[] = [];
		reversedTodos.forEach((todo) => {
			if (todo.isCompleted) {
				completedTodos.push(todo);
			} else {
				notCompletedTodos.push(todo);
			}
		});

		const sortedTodos = [...notCompletedTodos, ...completedTodos];
		return sortedTodos;
	};

	return (
		<div className={classNames("todo-list", className)}>
			{backendCtx.todos === null ? (
				<div className="todo-list__info">Please wait...</div>
			) : backendCtx.todos.length ? (
				<>
					<ul className="todo-list__ul">
						{getSortedTodos().map((todo) => (
							<TodoListItem
								key={todo.id}
								className="todo-list__item"
								todo={todo}
							/>
						))}
					</ul>
				</>
			) : (
				<div className="todo-list__info">No todos. Add one?</div>
			)}
		</div>
	);
}
