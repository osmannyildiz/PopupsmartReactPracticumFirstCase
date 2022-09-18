import { FormEvent, useEffect, useRef } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/ui/Card";
import { useAuthContext } from "../contexts/AuthContext";
import "./LoginView.css";

export default function LoginView() {
	const authCtx = useAuthContext();
	const usernameInputElRef = useRef<HTMLInputElement | null>(null);

	const onSubmitLoginForm = (event: FormEvent) => {
		event.preventDefault();
		const username = usernameInputElRef.current?.value;
		if (username) {
			authCtx.loginAndRemember(username);
		}
	};

	useEffect(() => {
		usernameInputElRef.current?.focus();
		authCtx.tryAutoLogin();
	}, []);

	return (
		<MainLayout>
			<Card className="login-panel">
				<form className="login-panel-form" onSubmit={onSubmitLoginForm}>
					<h1 className="login-panel-form__heading">
						Welcome to {import.meta.env.FRONTEND_APP_BRAND}!
					</h1>
					<p className="login-panel-form__subheading">
						Login with your username to get started.
					</p>
					<input
						ref={usernameInputElRef}
						type="text"
						className="login-panel-form__input input"
						name="username"
						placeholder="Username"
						autoComplete="off"
					/>
					<button
						type="submit"
						className="login-panel-form__btn btn btn--primary mx-auto"
					>
						Login
					</button>
				</form>
			</Card>
		</MainLayout>
	);
}
