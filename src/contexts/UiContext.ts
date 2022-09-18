import { useState } from "react";
import UiTheme from "../models/enums/UiTheme";
import buildContext from "../utils/buildContext";

interface IUiContext {
	isSpinnerVisible: boolean;
	setIsSpinnerVisible: (isSpinnerVisible: boolean) => void;
	theme: UiTheme;
	setTheme: (theme: UiTheme) => void;
}

export const [UiContext, useUiContext] = buildContext<IUiContext>();

export function buildUiContextValue(): IUiContext {
	const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

	const [theme, setTheme] = useState(UiTheme.LIGHT);

	return {
		isSpinnerVisible,
		setIsSpinnerVisible,
		theme,
		setTheme,
	};
}
