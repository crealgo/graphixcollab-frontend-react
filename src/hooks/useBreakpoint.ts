import { Breakpoint, Theme, useMediaQuery } from "@mui/material";

type UseBreakpointHook = (direction: "up" | "down", breakpoint: Breakpoint) => boolean;

export const useBreakpoint: UseBreakpointHook = (direction, breakpoint) => {
	const isBreakpoint = useMediaQuery<Theme>((theme) => theme.breakpoints[direction](breakpoint));

	return isBreakpoint;
};
