import classNames from "classnames";
import { Children } from "../../utils/propTypes";
import "./Card.css";

interface Props {
	children: Children;
	className?: string;
	[key: string]: any;
}

export default function Card({ children, className, ...props }: Props) {
	return (
		<div className={classNames("card", className)} {...props}>
			{children}
		</div>
	);
}
