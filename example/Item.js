import React from 'react';
import Virtual from '@sullivan/react-virtualizer';

const Internal = ({label}) => {
  console.log('rendering', label);
  return label;
}

const Item = ({ label, className, index }) => (
  <Virtual tag={'p'} className={className} initialHeight={index === 1 ? undefined : '200px'} initialWidth={'200px'} rootMargin={'0px'}>
    <Internal label={label} />
  </Virtual>
);

export default Item;