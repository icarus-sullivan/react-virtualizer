import React, { useRef, useState, useEffect } from 'react';

import './VirtualTypes';

const Reveal = ({ children, tag = 'div', ...props }: VirtualProps) => {
  const [vis, setVis] = useState(false);
  const ref = useRef();
  useEffect(() => {
    let loaded = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (loaded && entries[0].isIntersecting) {
          setVis(true);
          // @ts-ignore
          obs.unobserve(ref.current);
        }
        loaded = true;
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

  return React.createElement(
    tag,
    {
      ...props,
      ref,
    },
    vis ? children : [],
  );
};

export default Reveal;
