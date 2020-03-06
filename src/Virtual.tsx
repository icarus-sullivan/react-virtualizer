import React, { useRef, useState, useEffect } from 'react';

import './VirtualTypes';

const DEFAULT_DIMENSIONS = {
  height: '100vh',
  width: '100vw',
};

const Virtual = ({ children, style = {}, tag = 'div',  rootMargin = '100px', ...props }: VirtualProps) => {
  const [vis, setVis] = useState(false);
  const [lastKnownDimensions, setLastKnownDimensions] = useState(DEFAULT_DIMENSIONS)
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
