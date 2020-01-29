import React, { useRef, useState, useEffect } from 'react';

import './VirtualTypes';

const DEFAULT_DIMENSIONS = {
  height: 'auto',
  width: 'auto',
};

const Virtual = ({ children, style = {}, tag = 'div', ...props }: VirtualProps) => {
  const [vis, setVis] = useState(false);
  const [lastKnownDimensions, setLastKnownDimensions] = useState(DEFAULT_DIMENSIONS)
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        setVis(entries[0].isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
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

  // Use last known height to mimic space when not visible
  const overrides = vis ? style : { ...style, ...lastKnownDimensions };

  return React.createElement(
    tag,
    {
      ...props,
      style: overrides,
      ref,
    },
    vis ? children : [],
  );
};

export default Virtual;
