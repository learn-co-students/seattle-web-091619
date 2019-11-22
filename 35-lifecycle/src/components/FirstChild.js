import React from 'react'

class FirstChild extends React.PureComponent {
    constructor() {
        console.log("%cFIRST CHILD CONSTRUCTOR", "color:green;")
        super()
    }

    componentDidMount() {
        console.log("%cFIRST CHILD MOUNTED", "color:green;")
    }

    componentWillReceiveProps(props) {
        console.log(props)
    }

    render() {
        console.log("%cFIRST CHILD RENDER", "color:green;")
        return (
            <div>
                <h2>FIRST CHILD</h2>
                <h3>{this.props.myValue}</h3>
            </div>
        )
    }
}

export default FirstChild