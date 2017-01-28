import React, { Component } from 'react';

class SelectPlayerForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playerId: ''
    }
  }

  handleChange(event) {
    this.setState({playerId: event.target.value});
  }

  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(parseInt(this.state.playerId, 10))
        }} >
        <input onChange={this.handleChange.bind(this)} value={this.state.playerId} type="text"/>
        <input type="submit"/>
      </form>
    )
  }
}

export default SelectPlayerForm;