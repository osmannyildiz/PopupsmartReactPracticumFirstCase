import {
	mdiCheck,
	mdiCheckboxBlankOutline,
	mdiCheckboxMarked,
	mdiDelete,
	mdiLoading,
	mdiLogout,
	mdiPlus,
	mdiSquareEditOutline,
	mdiWeatherNight,
	mdiWeatherSunny,
} from "@mdi/js";
import { IconProps } from "@mdi/react/dist/IconProps";

export const notCompletedIconProps: IconProps = {
	path: mdiCheckboxBlankOutline,
};
export const loadingIconProps: IconProps = { path: mdiLoading, spin: true };
export const completedIconProps: IconProps = { path: mdiCheckboxMarked };
export const editIconProps: IconProps = { path: mdiSquareEditOutline };
export const completeIconProps: IconProps = { path: mdiCheck };
export const deleteIconProps: IconProps = { path: mdiDelete };
export const addIconProps: IconProps = { path: mdiPlus };
export const lightThemeIconProps: IconProps = { path: mdiWeatherSunny };
export const darkThemeIconProps: IconProps = { path: mdiWeatherNight };
export const logoutIconProps: IconProps = { path: mdiLogout };
