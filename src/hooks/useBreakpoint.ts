import { type Breakpoint, type Theme, useMediaQuery } from '@mui/material';

type UseBreakpointHook = (
	direction: 'up' | 'down',
	breakpoint: Breakpoint
) => boolean;

export const useBreakpoint: UseBreakpointHook = (direction, breakpoint) =>
	useMediaQuery<Theme>(theme => theme.breakpoints[direction](breakpoint));
