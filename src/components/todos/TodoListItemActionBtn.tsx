import Icon from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";
import classNames from "classnames";
import { MouseEventHandler } from "react";
import "./TodoListItemActionBtn.css";

interface Props {
	className?: string;
	iconProps: IconProps;
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

export default function TodoListItemActionBtn({
	className,
	iconProps,
	label,
	onClick,
	disabled,
}: Props) {
	return (
		<button
			type="button"
			className={classNames(
				"todo-list-item-action-btn btn btn--primary",
				className
			)}
			onClick={onClick}
			disabled={disabled}
		>
			<Icon size="1rem" {...iconProps} />
			<span>{label}</span>
		</button>
	);
}
