import { useEffect, useState } from "react";
import UiTheme from "../models/enums/UiTheme";
import buildContext from "../utils/buildContext";
import ThemeManager from "../utils/ThemeManager";

interface IUiContext {
	isSpinnerVisible: boolean;
	setIsSpinnerVisible: (isSpinnerVisible: boolean) => void;
	theme: UiTheme | null;
	toggleTheme: () => void;
	trySavedTheme: () => void;
}

export const [UiContext, useUiContext] = buildContext<IUiContext>();

export function buildUiContextValue(): IUiContext {
	const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

	const [theme, setTheme] = useState<UiTheme | null>(null);

	const toggleTheme = () => {
		if (!theme || theme === UiTheme.LIGHT) {
			setTheme(UiTheme.DARK);
		} else {
			setTheme(UiTheme.LIGHT);
		}
	};

	const trySavedTheme = () => {
		const savedTheme = localStorage.getItem("theme") as UiTheme;
		if (savedTheme) {
			setTheme(savedTheme);
		}
	};

	useEffect(() => {
		switch (theme) {
			case UiTheme.LIGHT:
				ThemeManager.useLightTheme();
				break;
			case UiTheme.DARK:
				ThemeManager.useDarkTheme();
				break;
			default:
				ThemeManager.useDefaultTheme();
		}
	}, [theme]);

	return {
		isSpinnerVisible,
		setIsSpinnerVisible,
		theme,
		toggleTheme,
		trySavedTheme,
	};
}
