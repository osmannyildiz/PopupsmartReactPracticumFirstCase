import buildContext from "../utils/buildContext";

export interface IAuthContext {
	isLoggedIn: boolean;
	username: string | null;
	login: (username: string) => void;
	logout: () => void;
}

export const [AuthContext, useAuthContext] = buildContext<IAuthContext>();
