import React from 'react';
import Virtual from '@sullivan/react-virtualizer';

const Internal = ({label}) => {
  console.log('rendering', label);
  return label;
}

const Item = ({ label, className, index }) => (
  <Virtual tag={'p'} className={className} initialHeight={200} initialWidth={200} rootMargin={10}>
    <Internal label={label} />
  </Virtual>
);

export default Item;