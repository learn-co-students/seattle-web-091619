import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// let domNode = document.createElement("h1")
// console.dir(domNode)

// let reactElement = React.createElement("h1", null, "Hello from React Element")

// let customObject = {
//     $$typeof: Symbol.for("react.element"),
//     key: null,
//     type: "h3",
//     ref: null,
//     props: {children: "Im a custom object"}
// }

// console.log(reactElement)

ReactDOM.render(<App/>, document.getElementById("root"))

