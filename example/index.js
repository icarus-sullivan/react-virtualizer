import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item';
import Footer from './Footer';

const items = Array(100).fill().map((_, i) => `item_${i}`);

const Render = () => (
  <div>
    {items.map(Item)}
    <Footer />
  </div>
);

const elem = document.createElement('div');
document.body.appendChild(elem);
ReactDOM.render(<Render/>, elem);
