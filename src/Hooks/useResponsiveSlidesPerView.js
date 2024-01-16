import { useEffect, useState } from 'react';

const useResponsiveSlidesPerView = (breakpointSliderList) => {
  function getSlidesPerView(screenWidth) {
    for (let breakpoint of Object.keys(breakpointSliderList).sort(
      (a, b) => b - a
    )) {
      if (screenWidth >= breakpoint) {
        return breakpointSliderList[breakpoint];
      }
    }
  }

  const [slidesPerView, setSlidesPerView] = useState(
    getSlidesPerView(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return slidesPerView;
};

export default useResponsiveSlidesPerView;