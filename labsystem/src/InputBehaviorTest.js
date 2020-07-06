import React from "react";

import Input from "./Input";

export default class InputBehaviorTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: '',
        };
    }

    handleOnChange = (newValue) => {
        console.warn({newValue});
        this.setState({testValue: newValue})
    }

    render() {
        return (
            <React.Fragment>
                <Input value={this.state.testValue} id="testInput" label="Test here" onChange={this.handleOnChange}/><br />
                <p><strong>Input value: </strong>{this.state.testValue}</p>
            </React.Fragment>
        )
    }
}
