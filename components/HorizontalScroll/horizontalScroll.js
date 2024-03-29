import React, { useState, useLayoutEffect, useRef , useCallback} from "react";
import styled from "styled-components";

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 15vh;
  height: 90vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh - 70;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

// const applyScrollListener = (ref, setTranslateX) => {
//   window.addEventListener("scroll", () => {
//     const offsetTop = -ref.current.offsetTop;
//     setTranslateX(offsetTop);
//   });
// };

const HorizontalScroll = ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = useCallback(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  }, []);

  const scrollHandler = useCallback(() => {
    const offsetTop = -containerRef.current.offsetTop;
    setTranslateX(offsetTop);
  }, []);

  useLayoutEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [resizeHandler, scrollHandler]);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

export default HorizontalScroll;
