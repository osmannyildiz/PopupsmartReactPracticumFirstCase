import { useEffect, useState } from "react";
import buildContext from "../utils/buildContext";

interface IAuthContext {
	isLoggedIn: boolean;
	username: string | null;
	login: (username: string) => void;
	loginAndRemember: (username: string) => void;
	logout: () => void;
	tryAutoLogin: () => boolean;
}

export const [AuthContext, useAuthContext] = buildContext<IAuthContext>();

export function buildAuthContextValue(): IAuthContext {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [username, setUsername] = useState<string | null>(null);

	const login = (username: string) => {
		setUsername(username);
	};

	const loginAndRemember = (username: string) => {
		login(username);
		localStorage.setItem("username", username);
	};

	const logout = () => {
		setUsername(null);
		localStorage.removeItem("username");
	};

	const tryAutoLogin = () => {
		const savedUsername = localStorage.getItem("username");
		if (savedUsername) {
			login(savedUsername);
			return true;
		}
		return false;
	};

	useEffect(() => {
		if (username !== null) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [username]);

	return {
		isLoggedIn,
		username,
		login,
		loginAndRemember,
		logout,
		tryAutoLogin,
	};
}
