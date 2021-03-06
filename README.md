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


#### Props 

| prop     | type    | default |
|----------|---------|---------|
| tag      | string  | div     |
| style    | object  | {} |
| children | React.Children | [] |
| rootMargin | string \| number | 100px |
| initialHeight | string \| number | 100vh |
| initialWidth | string \| number | 100vw |

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

#### Props 

| prop     | type    | default |
|----------|---------|---------|
| tag      | string  | div     |
| style    | object  | {} |
| children | React.Children | [] |

```javascript
import { Reveal } from '@sullivan/react-virtualizer';

const Image = ({ src }) => (
  <Reveal>
    <img src={src}>
  </Reveal>
);
```

## Performance Tweaks
If you find that the `Virtual` component is slow to load while scrolling or tends to pop-in. You can tweak the initialHeight and initialWidth to be a closer approximation to the actual content. This helps speed up sibling `Virtual` components in determining their own dimensions. 

## Compatability
React 16.8.3+
 
## Changelog

**1.0.5**
- Performance improvements, obtaining dimensions from entry instead of forcing a repaint on the component
- Adding number support for initialHeight, initialWidth, and rootMargin

**1.0.4**
- Added initialHeight and initialWidth to allow for more fine controls of item rendering

**1.0.3**
- Improved loading times

**1.0.0**
- First version published