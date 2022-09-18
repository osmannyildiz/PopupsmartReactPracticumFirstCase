import Icon from "@mdi/react";
import classNames from "classnames";
import { FormEvent, useRef, useState } from "react";
import { useBackendContext } from "../../contexts/BackendContext";
import { useUiContext } from "../../contexts/UiContext";
import { addIconProps, loadingIconProps } from "../../utils/iconProps";
import "./AddTodoForm.css";

interface Props {
	className?: string;
}

export default function AddTodoForm({ className }: Props) {
	const backendCtx = useBackendContext();
	const uiCtx = useUiContext();
	const [submitBtnIconProps, setSubmitBtnIconProps] = useState(addIconProps);
	const formElRef = useRef<HTMLFormElement | null>(null);
	const contentInputElRef = useRef<HTMLInputElement | null>(null);

	const onSubmitAddTodoForm = async (event: FormEvent) => {
		event.preventDefault();

		// const isValid = formElRef.current?.checkValidity();
		// if (!isValid) {
		// 	formElRef.current?.reportValidity();
		// 	return false;
		// }

		const content = contentInputElRef.current?.value;
		if (content) {
			setSubmitBtnIconProps(loadingIconProps);
			await backendCtx.addTodo(content);
			uiCtx.setIsSpinnerVisible(true);
			await backendCtx.fetchTodos();
			uiCtx.setIsSpinnerVisible(false);
			contentInputElRef.current!.value = "";
			setSubmitBtnIconProps(addIconProps);
		}
	};

	return (
		<form
			ref={formElRef}
			className={classNames("add-todo-form", className)}
			onSubmit={onSubmitAddTodoForm}
		>
			<input
				ref={contentInputElRef}
				type="text"
				className="add-todo-form__form-input add-todo-form__content-input input"
				name="content"
				placeholder="Add todo..."
				required
				minLength={3}
			/>
			<button
				type="submit"
				className="add-todo-form__submit-btn btn btn--primary"
			>
				<Icon size="1.25rem" {...submitBtnIconProps} />
			</button>
		</form>
	);
}
