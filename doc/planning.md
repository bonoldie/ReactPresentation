<!-- START HEADER -->

<link rel="stylesheet" href="./assets/retro.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>

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

<!-- END HEADER -->

<!-- START SLIDE 1 -->

## Table Of Content

- [Table Of Content](#table-of-content)
- [ReactJS - Introduction](#reactjs---introduction)
- [React is](#react-is)
- [React isn't](#react-isnt)
- [Structure](#structure)
  - [DOM](#dom)
  - [VDOM](#vdom)
- [Component](#component)
- [LifeCycle](#lifecycle)
  - [LifeCycle - Old Classy Style](#lifecycle---old-classy-style)
  - [LifeCycle - New React v16+ w/Hooks](#lifecycle---new-react-v16-whooks)
- [JSX](#jsx)
- [Webpack](#webpack)

<br>
<br>

<!-- END SLIDE 1 -->

## Topics <!-- omit in toc -->

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
- [x] Webpack
  - [x] Introduction
  - [x] Setup
<br>
<br>
<br>

--- 

<!-- START SLIDE 2 -->

## ReactJS - JSX - Babel - Webpack <!-- omit in toc -->

#### The Four Horsemen of Apocalypse <!-- omit in toc -->

##### Bonoldi Enrico - Tezza Giacomo <!-- omit in toc -->

<br>
<br>

<!-- END SLIDE 2 -->

---

<!-- START SLIDE 3 -->

## ReactJS - Introduction 

## React is

>  - ### an OpenSource library
>  - ### Developed by Facebook
>  - ### a Design tool for UIs
>  - ### a component based library

## React isn't

>  - ### a framework
>  - ### a standalone tool

<br>
<br>

<!-- END SLIDE 3 -->

---

<!-- START SLIDE 4 -->

## Structure

### DOM

> ### The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" width="600" />

### VDOM

> ### The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

<br>
<br>

<!-- END SLIDE 4 -->

---

<!-- START SLIDE 5 -->

## [Component](https://en.reactjs.org/docs/components-and-props.html)

> ### Split the UI into independent, reusable pieces, and think about each piece in isolation.

```js
const Welcome = props => <h1>Hello, {props.name}</h1>
```

### Each component is standalone and has its own lifecycle  <!-- omit in toc -->

> ### Than render the component with the ReactDOM library

```js
ReactDOM.render(<Welcome name="World"/>,document.getElemenetById('root'))
```
 

<!-- END SLIDE 5 -->

---

<!-- START SLIDE 6 -->

## [LifeCycle](https://en.reactjs.org/docs/state-and-lifecycle.html)

### A component’s lifecycle can be broken down into four parts:  <!-- omit in toc -->

- ### Initialization
- ### Mounting
- ### Updating
- ### Unmounting

<!-- END SLIDE 6 -->

<!-- START SLIDE 7 -->

### LifeCycle - [Old Classy Style](https://reactjs.org/docs/components-and-props.html)

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

<!-- END SLIDE 7 -->

<!-- START SLIDE 8 -->

### LifeCycle - New React v16+ w/[Hooks](https://reactjs.org/docs/hooks-intro.html)

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
<!-- END SLIDE 8 -->

<!-- START SLIDE 9 -->

## [JSX](https://reactjs.org/docs/jsx-in-depth.html)

> ### JSX is a **syntax extension** to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.  
#### *Its used in both Class and functional component.*  <!-- omit in toc -->

<hr />

> ### Uses camelCase property naming convention instead of HTML attribute names.

<hr />

> ### JSX Code

```js
<MyButton color="blue" shadowSize={2}>  
  Click Me
</MyButton>
```

<hr />

> ### React compile into...  


```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

<!-- END SLIDE 9 -->

<!-- START SLIDE 10 -->

## [Babel](https://babeljs.io/docs/en/#babel-is-a-javascript-compiler)  <!-- omit in toc -->

>  ### Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 

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

### Here are the main things Babel can do for you:  <!-- omit in toc -->
- ### **Transform syntax**
- ### *Polyfill features that are missing in your target environment (through @babel/polyfill)*
- ### Source code transformations (codemods)

<hr />

> ### Source Code 

```js
[1, 2, 3].map((n) => n + 1);
```

<hr />

> ### Babel transformation  

```js
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

<!-- END SLIDE 10 -->

<!-- START SLIDE 11 -->

## Babel Example <!-- omit in toc -->

> ### with ES6
  
```js
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

> ### without ES6
 
```js
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

<!-- START SLIDE 11 -->



<!-- START SLIDE 12 -->

## [Webpack](https://webpack.js.org/)

### Webpack - Introduction  <!-- omit in toc -->

> ### At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

![webpack.png](./assets/webpack.png)

<!-- END SLIDE 12 -->

<!-- START SLIDE 13 -->

## Setup  <!-- omit in toc -->

### Webpack runs on node and it can be installed via npm  <!-- omit in toc -->

```bash  
npm install --save webpack /* webpack-cli webpack-dev-server */
```

```js
/* MY CURRENT CONFIGURATION (webpack.config.js)*/

const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
    return {
        // IGNORING NODE MODULES AND NATIVE CODE
        target: 'web',

        // CONFIGS
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true,
            writeToDisk: true
        },
        module: {
            rules: [
                { test: /\.(md)/, use: "raw-loader" },
                { test: /\.(js)|.(jsx)$/, use: 'babel-loader' },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader',] },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: './public/fonts'
                        }
                    }]
                }
            ]
        },
        mode: (env && env.dev) ? "development" : "production",
        plugins: [
            new htmlPlugin({
                template: './src/index.html'
            }),
            new CopyPlugin([
                { from: './doc/assets', to: './slides/assets/' },
            ])
        ],
        watch: env && env.dev
    }
}

```

<!-- END SLIDE 13 -->

<!-- START SLIDE 14 -->

## THANKS FOR THE ATTENTION  <!-- omit in toc -->

--- 

> ### FIRST OF ALL DO EXERCISES...
> #### then
> ### WANT SOMETHING MORE? Try <a href="https://github.com/Bonoldiz/react-boilerplate" target="_blank">this</a>

<!-- END SLIDE 14 -->