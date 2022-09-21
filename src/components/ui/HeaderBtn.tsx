import classNames from "classnames";
import { MouseEventHandler } from "react";
import { Children } from "../../utils/propTypes";
import "./Card.css";

interface Props {
	children: Children;
	className?: string;
	title?: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function HeaderBtn({
	children,
	className,
	title,
	onClick,
}: Props) {
	return (
		<button
			type="button"
			className={classNames("header-btn btn btn--white", className)}
			title={title}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
