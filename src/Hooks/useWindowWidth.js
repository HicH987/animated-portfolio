import { useEffect, useState } from 'react';

const useWindowWidth = (breakpoints) => {
    const [activeBreakpoints, setActiveBreakpoints] = useState({});

    const resize = () => {
        const newActiveBreakpoints = {};
        for (let breakpoint of breakpoints) {
            newActiveBreakpoints[breakpoint] = window.innerWidth <= breakpoint;
        }
        setActiveBreakpoints(newActiveBreakpoints);
    };
 
    useEffect(() => {
        window.addEventListener('resize', resize);
 
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [breakpoints]); // Re-run the effect when the breakpoints change
 
    return activeBreakpoints;
};

export default useWindowWidth;