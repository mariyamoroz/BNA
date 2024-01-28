const defineCurrentBreakpoint = (): string => {

    const breakpoints = {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1231,
        xl: 1520,
    };

    let currentBreakpoint = 'xs';

    if (typeof window !== 'undefined') {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        const breakpointNames = Object.keys(breakpoints);

        currentBreakpoint = breakpointNames[0];

        for (let i = 1; i < breakpointNames.length; i++) {
            if (width < breakpoints[breakpointNames[i]]) {
                break;
            }
            currentBreakpoint = breakpointNames[i];
        }
    }

    return currentBreakpoint;
}

export default defineCurrentBreakpoint;