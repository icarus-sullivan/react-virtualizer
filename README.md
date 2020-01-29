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
import Virtual from '@sullivan/react-virtualizer';

const Item = () => (
  <Virtual tag={'li'}>
    Random text here
  </Virtual>
);


```


# Props 
```
interface VirtualProps {
  tag?: string,
  children: JSX.Element[] | JSX.Element,
  style?: object,
}
```

## Compatability
React 16.8.3+
 
## Changelog

### 0.1.0
- First version published