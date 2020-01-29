import React from 'react';
import Virtual from '@sullivan/react-virtualizer';

const styles = {
  width: 200, 
  height: 200, 
  float: 'left', 
  marginRight: 10 
};

const Item = (label) => (
  <Virtual style={styles}>
    {label}
  </Virtual>
);

export default Item;