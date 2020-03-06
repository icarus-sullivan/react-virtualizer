import React from 'react';
import Virtual from '@sullivan/react-virtualizer';

const styles = {
  width: 200, 
  height: 200, 
  float: 'left', 
  marginRight: 10 
};

const Internal = ({label}) => {
  console.log('rendering', label);
  return label;
}

const Item = (label) => (
  <Virtual tag={'p'} style={styles}>
    <Internal label={label} />
  </Virtual>
);

export default Item;