import Header from "../ui/Header";

type Props = {
	children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
