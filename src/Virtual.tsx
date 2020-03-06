import React, { useRef, useState, useEffect } from 'react';

import './VirtualTypes';

const Virtual = ({ 
  children, 
  style = {}, 
  tag = 'div', 
  initialHeight = '100vh', 
  initialWidth = '100vw', 
  rootMargin = '100px', 
  ...props }: VirtualProps) => {
  const [vis, setVis] = useState(false);
  const [lastKnownDimensions, setLastKnownDimensions] = useState({ width: initialWidth, height: initialHeight });
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        // @ts-ignore
        setVis(entries.pop().isIntersecting);
      },
      {
        root: null,
        rootMargin,
        threshold: [0],
      },
    );

    // @ts-ignore
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setLastKnownDimensions({
      // @ts-ignore
      height: ref.current.clientHeight,
      // @ts-ignore
      width: ref.current.clientWidth,
    });
  }, [vis]);

  return React.createElement(
    tag,
    {
      ...props,
      // Use last known height to mimic space when not visible
      style: vis ? style : { ...style, ...lastKnownDimensions },
      ref,
    },
    vis ? children : [],
  );
};

export default Virtual;
