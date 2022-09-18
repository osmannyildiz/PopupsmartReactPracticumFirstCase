import Icon from "@mdi/react";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useBackendContext } from "../../contexts/BackendContext";
import { useUiContext } from "../../contexts/UiContext";
import Todo from "../../models/Todo";
import {
	completedIconProps,
	completeIconProps,
	deleteIconProps,
	editIconProps,
	loadingIconProps,
	notCompletedIconProps,
} from "../../utils/iconProps";
import Card from "../ui/Card";
import "./TodoListItem.css";
import TodoListItemActionBtn from "./TodoListItemActionBtn";

interface Props {
	className?: string;
	todo: Todo;
}

export default function TodoListItem({ className, todo }: Props) {
	const backendCtx = useBackendContext();
	const uiCtx = useUiContext();
	const [isEditMode, setIsEditMode] = useState(false);
	const [completeBtnIconProps, setCompleteBtnIconProps] =
		useState(loadingIconProps);
	const [editBtnIconProps, setEditBtnIconProps] = useState(editIconProps);
	const [editCompleteBtnIconProps, setEditCompleteBtnIconProps] =
		useState(completeIconProps);
	const [deleteBtnIconProps, setDeleteBtnIconProps] = useState(deleteIconProps);
	const [isEditCompleteBtnDisabled, setIsEditCompleteBtnDisabled] =
		useState(false);
	const contentInputElRef = useRef<HTMLInputElement | null>(null);

	const onCompleteBtnClick = async () => {
		setCompleteBtnIconProps(loadingIconProps);
		const newIsCompleted = !todo.isCompleted;
		const updatedTodo = { ...todo, isCompleted: newIsCompleted };
		await backendCtx.updateTodo(updatedTodo);

		uiCtx.setIsSpinnerVisible(true);
		await backendCtx.fetchTodos();
		uiCtx.setIsSpinnerVisible(false);

		if (newIsCompleted) {
			setCompleteBtnIconProps(completedIconProps);
		} else {
			setCompleteBtnIconProps(notCompletedIconProps);
		}
	};

	const onEditBtnClick = () => {
		setIsEditMode(true);
	};

	const onEditCompleteBtnClick = async () => {
		setEditCompleteBtnIconProps(loadingIconProps);
		const newContent = contentInputElRef.current?.value;
		if (newContent) {
			const updatedTodo = { ...todo, content: newContent };
			await backendCtx.updateTodo(updatedTodo);

			uiCtx.setIsSpinnerVisible(true);
			await backendCtx.fetchTodos();
			uiCtx.setIsSpinnerVisible(false);

			setEditCompleteBtnIconProps(completeIconProps);
			setIsEditMode(false);
		} else {
			throw new Error("Todo content cannot be empty.");
		}
	};

	const onDeleteBtnClick = async () => {
		setDeleteBtnIconProps(loadingIconProps);
		await backendCtx.deleteTodo(todo);

		uiCtx.setIsSpinnerVisible(true);
		await backendCtx.fetchTodos();
		uiCtx.setIsSpinnerVisible(false);
	};

	const onContentInputChange = () => {
		const content = contentInputElRef.current?.value;
		if (content && content.length >= 3) {
			setIsEditCompleteBtnDisabled(false);
		} else {
			setIsEditCompleteBtnDisabled(true);
		}
	};

	useEffect(() => {
		if (todo.isCompleted) {
			setCompleteBtnIconProps(completedIconProps);
		} else {
			setCompleteBtnIconProps(notCompletedIconProps);
		}
	}, []);

	return (
		<Card className={classNames("todo-list-item", className)}>
			<div className="todo-list-item__left-side">
				<button
					type="button"
					className="todo-list-item__complete-btn btn btn--plain center"
					onClick={onCompleteBtnClick}
				>
					<Icon
						className="todo-list-item__complete-btn-icon"
						size="1.25rem"
						{...completeBtnIconProps}
					/>
				</button>
				{!isEditMode ? (
					<div className="todo-list-item__content">{todo.content}</div>
				) : (
					<input
						ref={contentInputElRef}
						type="text"
						className="todo-list-item__content-input input"
						defaultValue={todo.content}
						onChange={onContentInputChange}
					/>
				)}
			</div>
			<div className="todo-list-item__right-side">
				{!isEditMode ? (
					<>
						<TodoListItemActionBtn
							className="todo-list-item__action-btn"
							iconProps={editBtnIconProps}
							label="Edit"
							onClick={onEditBtnClick}
						/>
						<TodoListItemActionBtn
							className="todo-list-item__action-btn"
							iconProps={deleteBtnIconProps}
							label="Delete"
							onClick={onDeleteBtnClick}
						/>
					</>
				) : (
					<TodoListItemActionBtn
						className="todo-list-item__action-btn"
						iconProps={editCompleteBtnIconProps}
						label="Save"
						onClick={onEditCompleteBtnClick}
						disabled={isEditCompleteBtnDisabled}
					/>
				)}
			</div>
		</Card>
	);
}
