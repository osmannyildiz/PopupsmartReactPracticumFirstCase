import { AuthContext, buildAuthContextValue } from "../contexts/AuthContext";
import {
	BackendContext,
	buildBackendContextValue,
} from "../contexts/BackendContext";
import { buildUiContextValue, UiContext } from "../contexts/UiContext";

type Props = {
	children: React.ReactNode;
};

export default function GlobalContextsProvider({ children }: Props) {
	const authContextValue = buildAuthContextValue();
	const uiContextValue = buildUiContextValue();
	const backendContextValue = buildBackendContextValue();

	return (
		<AuthContext.Provider value={authContextValue}>
			<UiContext.Provider value={uiContextValue}>
				<BackendContext.Provider value={backendContextValue}>
					{children}
				</BackendContext.Provider>
			</UiContext.Provider>
		</AuthContext.Provider>
	);
}
