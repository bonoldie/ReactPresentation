## Examples

### DOM 
##### (due righe di html e un getById)

---

## Component

```js
class Welcome extends React.Component {
    state = {
        name : ""
    }

    constructor(props){
        this.setState(() => ({ name : props.name }))
    }

    render(){
        return(
            <h1>Hello, {this.state.name}</h1>
        )
    }
}
```

```js
const Welcome = props => <h1>Hello, {props.name}</h1>
```


```js
ReactDOM.render(<Welcome name="World"/>,document.getElemenetById('root'))
```

---

## Lifecycle

```js
class MyComponent extends React.Component {
  /* INITIALIZATION */
  constructor(props){
      console.log("constructor")
  }

  /* MOUNTING */
  componentWillMount(){
      console.log("will mount")
  }

  componentDidMount(){
    console.log("did mount")
  }

  /* UPDATE */
  shouldComponentUpdate(){
      console.log("should component update")
  }
  componentWillUpdate(){
    console.log("will component update")
  }
  componentDidUpdate(){
    console.log("did component update")
  }

  /* UNMOUNT */
  componentWillUnmount(){
      console.log("will unmount")
  }
}
```

```js
/* the Initialization is the method itself */
const MyComponent = props => {

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

### JSX

```html
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>
```

```js
var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/* Hello world */}
        <div className="awesome" style={{border: '1px solid red'}}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </div>
    );
  }
});

```