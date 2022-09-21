import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useUiContext } from "../../contexts/UiContext";
import {
	darkThemeIconProps,
	lightThemeIconProps,
	logoutIconProps,
} from "../../utils/iconProps";
import "./Header.css";
import HeaderBtn from "./HeaderBtn";

export default function Header() {
	const authCtx = useAuthContext();
	const uiCtx = useUiContext();
	const [themeBtnIconProps, setThemeBtnIconProps] =
		useState(lightThemeIconProps);

	useEffect(() => {
		setThemeBtnIconProps(darkThemeIconProps);
	});

	return (
		<header className="header">
			<div className="header__content container">
				<div className="header__brand">
					{import.meta.env.FRONTEND_APP_BRAND}
				</div>
				<div className="header__right-side">
					{authCtx.isLoggedIn ? (
						<>
							<span className="header__account">Hello, {authCtx.username}</span>
							<HeaderBtn
								className="header__btn"
								title="Switch theme"
								onClick={() => uiCtx.toggleTheme()}
							>
								<Icon size="1.25rem" {...themeBtnIconProps} />
							</HeaderBtn>
							<HeaderBtn
								className="header__btn"
								title="Logout"
								onClick={() => authCtx.logout()}
							>
								<Icon size="1.25rem" {...logoutIconProps} />
							</HeaderBtn>
						</>
					) : (
						<span>Organize your life.</span>
					)}
				</div>
			</div>
		</header>
	);
}
