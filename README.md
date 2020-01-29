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

## Virtual 
The `Virtual` component hides its children when it is no longer visible within the browser window. 

```javascript
import Virtual from '@sullivan/react-virtualizer';

const Item = () => (
  <Virtual tag={'p'}>
    Resource intensive component here
  </Virtual>
);
```

## Reveal
The `Reveal` component doesn't show any of its children until it is scrolled into the browser window.

```javascript
import { Reveal } from '@sullivan/react-virtualizer';

const Image = ({ src }) => (
  <Reveal>
    <img src={src}>
  </Reveal>
);
```

## Props 

| prop     | default |
|----------|---------|
| tag      | div |
| style    | {} |
| children | [] |

## Compatability
React 16.8.3+
 
## Changelog

### 1.0.0
- First version published