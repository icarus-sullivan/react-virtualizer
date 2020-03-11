import React, { useRef, useState, useEffect } from 'react';

import './VirtualTypes';

const parseEntity = (v: any) => {
  if (Number.isInteger(v)) {
    return `${v}px`;
  }

  return v;
}

const Virtual = ({ 
  children, 
  style = {}, 
  tag = 'div', 
  initialHeight = '100vh', 
  initialWidth = '100vw', 
  rootMargin = '100px', 
  ...props }: VirtualProps) => {
  const [vis, setVis] = useState(false);
  const [dimesions, setDimensions] = useState({ width: initialWidth, height: initialHeight });
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries.pop();
        // @ts-ignore
        const visible = entry.isIntersecting;
        setVis(visible);

        if (!visible) {
          // @ts-ignore
          const bounds = entry.boundingClientRect;
          setDimensions({
            // @ts-ignore
            height: bounds.height,
            // @ts-ignore
            width: bounds.width,
          });
        }
      },
      {
        root: null,
        rootMargin: parseEntity(rootMargin),
        threshold: [0],
      },
    );

    // @ts-ignore
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return React.createElement(
    tag,
    {
      ...props,
      // Use last known height to mimic space when not visible
      style: vis ? style : { ...style, ...dimesions },
      ref,
    },
    vis ? children : [],
  );
};

export default Virtual;
