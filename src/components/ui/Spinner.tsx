import classNames from "classnames";
import "./Spinner.css";

interface Props {
	className?: string;
	isVisible: boolean;
	color?: string;
}

export default function Spinner({ className, isVisible, color }: Props) {
	return (
		<div
			className={classNames("spinner center", className, {
				"spinner--hidden": !isVisible,
			})}
		>
			<div
				className="spinner__visual"
				style={{
					color: color || "var(--color-fg)",
				}}
			></div>
		</div>
	);
}
