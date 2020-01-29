import React, { useRef, useState, useEffect } from 'react';

import './VirtualTypes';

const DEFAULT_DIMENSIONS = {
  height: 'auto',
  width: 'auto',
};

const Virtual = ({ children, tag = 'div', ...props }: VirtualProps) => {
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

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setLastKnownDimensions({
      height: ref.current.clientHeight,
      width: ref.current.clientWidth,
    });
  }, [vis]);

  // Use last known height to mimic space when not visible
  const style = vis ? {} : lastKnownDimensions;

  return React.createElement(
    tag,
    {
      ...props,
      style,
      ref,
    },
    vis ? children : [],
  );
};

export default Virtual;
