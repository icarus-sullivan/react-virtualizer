![npm version](https://img.shields.io/npm/v/@sullivan/react-virtualizer.svg) ![npm license](https://img.shields.io/npm/l/@sullivan/react-virtualizer.svg)

# @sullivan/react-virtualizer
Simple pseudo virtualization and reveal components to hide off-window components 

## Installation
```
npm install --save @sullivan/react-virtualizer
```
or
```
yarn add @sullivan/react-virtualizer
```


# Usage

```javascript
import React from 'react';
import ReactInject from '@sullivan/react-virtualizer';

const Circle = (props) => (
  <ReactInject src="/asset/circle.svg" />
);

export default Circle;
```


# Props 
If an id is used, ReactInject will try to inject into the result of getElementById. If not, a new element will be created and the content will be injected there. To control the newly created element pass a tag prop. 

```typescript
type ReactInjectProps {
  id?: string,
  tag?: string,
  src: string,
}
```

## Compatability
React 16.8.3+
 
## Changelog

### 0.1.0
- Add the ability to create a specific type of element instead of defaulting to a 'div'