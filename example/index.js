import React from 'react';
import ReactDOM from 'react-dom';

import ReactInject from '@sullivan/react-virtualizer';

const Render = () => (
  <>
    <div id="replace-me" />
    <ReactInject src="circle.svg" tag="p"/>
    <ReactInject id="replace-me" src="text.md" />
  </>
);

const elem = document.createElement('div');
document.body.appendChild(elem);
ReactDOM.render(<Render/>, elem);
