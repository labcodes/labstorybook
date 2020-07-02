import React from 'react'

export default class TesteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'deb'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.EventTarget.value })
  }
    
  render() {      
    return (
      <React.Fragment>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.value}</p>
      </React.Fragment>
    )
  }
}