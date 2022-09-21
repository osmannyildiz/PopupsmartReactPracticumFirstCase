import UiTheme from "../models/enums/UiTheme";

export default class ThemeManager {
	static useDefaultTheme() {
		window.document.body.className = "";
		localStorage.removeItem("theme");
	}

	static useTheme(theme: UiTheme) {
		window.document.body.className = `theme-${theme}`;
		localStorage.setItem("theme", theme);
	}

	static useDarkTheme() {
		this.useTheme(UiTheme.DARK);
	}
}
