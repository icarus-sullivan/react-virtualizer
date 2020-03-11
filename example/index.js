import React from 'react';
import { hydrate } from 'react-dom';

import Item from './Item';
import Footer from './Footer';

import './style.css';

const items = (l) => Array(1000).fill().map((_, i) => `${l}_${i}`);

const Render = () => (
  <div style={{ boxSizing: 'border-box', width: '100vw', height: '100vh' }}>
    <div className="base red">
      {items('red').map((a, i) => (<Item key={a} label={a} className="item-base" index={i} /> ))}
    </div>
    <div className="base blue">
      {items('blue').map((a, i) => (<Item key={a} label={a} className="item-nofloat" index={i} /> ))}
    </div>
    <div className="base green">
      {items('green').map((a, i) => (<Item key={a} label={a} className="item-base" index={i} /> ))}
    </div>
    <Footer />
  </div>
);

hydrate(<Render />, document.body);
