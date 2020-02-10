<!--<link rel="stylesheet" href="bootstrap.min.css">-->
<link rel="stylesheet" href="../node_modules/markdown-retro/css/retro.css">

<style>

.vscode-light pre {
    background-color: rgba(220, 220, 220, 0.05) !important;
}

.vscode-light .hljs-keyword, .vscode-light .hljs-selector-tag, .vscode-light .hljs-name, .vscode-light .hljs-tag {
    color: #569CD6 !important;
}

.vscode-light .hljs-title, .vscode-light .hljs-doctag {
    color: #DCDCDC;
}

div.babelTable + table td {
    border: 0px !important;
} 

</style>

## Table Of Content
- [Table Of Content](#table-of-content)
- [Topics](#topics)
- [Slide 1](#slide-1)
  - [ReactJs - JSX - Babel - WebPack](#reactjs---jsx---babel---webpack)
    - [The Four Horsemen of Apocalypse](#the-four-horsemen-of-apocalypse)
      - [Bonoldi Enrico - Tezza Giacomo](#bonoldi-enrico---tezza-giacomo)
- [Slide 2](#slide-2)
  - [ReactJs - Introduction](#reactjs---introduction)
- [Slide 3](#slide-3)
  - [ReactJs - Structure](#reactjs---structure)
    - [DOM](#dom)
    - [VDOM](#vdom)
- [Slide 4](#slide-4)
  - [ReactJs - Component](#reactjs---component)
- [Slide 5](#slide-5)
  - [ReactJs - LifeCycle](#reactjs---lifecycle)
- [Slide 6](#slide-6)
    - [ReactJs - LifeCycle - Old Classy Style](#reactjs---lifecycle---old-classy-style)
- [Slide 7](#slide-7)
    - [ReactJs - LifeCycle - New React v16+ w/Hooks](#reactjs---lifecycle---new-react-v16-whooks)
- [Slide 8](#slide-8)
  - [JSX](#jsx)
- [Slide 9](#slide-9)
  - [Babel](#babel)

<br>
<br>

## Topics

- [ ] ReactJs
  - [x] Introduction
  - [x] Structure
    - [x] dom
    - [x] vitrualdom
  - [x] Component
  - [ ] LifeCycle
    - [ ] LifeCycle description
    - [x] Old Method
    - [x] New Method
- [x] JSX
- [x] Babel
- [ ] WebPack
<br>
<br>
<br>

---

## Slide 1

### ReactJs - JSX - Babel - WebPack

#### The Four Horsemen of Apocalypse

##### Bonoldi Enrico - Tezza Giacomo

<br>
<br>

---

## Slide 2

### ReactJs - Introduction

|         React is          |    React isn't    |
| :-----------------------: | :---------------: |
|   an OpenSource library   |    a framework    |
|   Developed by Facebook   | a standalone tool |
|   a Design tool for UIs   |                   |
| a component based library |
<br>
<br>

---

## Slide 3

### ReactJs - Structure

#### DOM

> The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" width="400">

#### VDOM

> The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

<br>
<br>

---

## Slide 4

### ReactJs - [Component](https://en.reactjs.org/docs/components-and-props.html)

> Split the UI into independent, reusable pieces, and think about each piece in isolation.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Each component is standalone and has its own lifecycle

---

## Slide 5

### ReactJs - [LifeCycle](https://en.reactjs.org/docs/state-and-lifecycle.html)

A component’s lifecycle can be broken down into four parts:

- Initialization
- Mounting
- Updating
- Unmounting


## Slide 6

#### ReactJs - LifeCycle - [Old Classy Style](https://reactjs.org/docs/components-and-props.html)

```js
class MyComponent extends React.Component {
  /* INITIALIZATION */
  constructor(props){...}
  
  /* MOUNTING */
  componentWillMount(){...}
  componentDidMount(){...}

  /* UPDATE */
  shouldComponentUpdate(){...}
  componentWillUpdate(){...}
  componentDidUpdate(){...}

  /* UNMOUNT */
  componentWillUnmount(){...}
}
```

## Slide 7

#### ReactJs - LifeCycle - New React v16+ w/[Hooks](https://reactjs.org/docs/hooks-intro.html)

```js
/* the Initialization is the method itself */
const MyComponent = () => {

  /* The old Update methods */
  React.useEffect(
    () => {

      /* The old componentWillUnmount */
      return () => {

      }
    },
    [/* DEPENDENCIES */])

  return( /* JSX */)
}
```

## Slide 8

### [JSX](https://reactjs.org/docs/jsx-in-depth.html)

> JSX is a **syntax extension** to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.  
*Its used in both Class or functional component.*

> Uses camelCase property naming convention instead of HTML attribute names.

```json
/* COMMON BABEL CONFIG FILE */
/* Saved in .babelrc or babel.config.json */
{
  "presets":[
      "@babel/preset-env", 
      "@babel/preset-react"
  ]
}
```

## Slide 9

### [Babel](https://babeljs.io/docs/en/#babel-is-a-javascript-compiler)

>   Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 

Here are the main things Babel can do for you:
- **Transform syntax**
- *Polyfill features that are missing in your target environment (through @babel/polyfill)*
- Source code transformations (codemods)

<div class="babelTable"></div>

| Source Code |  Babel transformation |
| - | - |
| `[1, 2, 3].map((n) => n + 1);` | `[1, 2, 3].map(function(n) {` |
|  | &nbsp;&nbsp;&nbsp; `return n + 1;` |
|  | `});` |


