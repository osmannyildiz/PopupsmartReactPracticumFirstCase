import { Children } from "../../utils/propTypes";
import Header from "../ui/Header";

interface Props {
	children: Children;
}

export default function MainLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main>
				<div className="main__content container">{children}</div>
			</main>
		</>
	);
}
