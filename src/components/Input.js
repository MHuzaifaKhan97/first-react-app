import React from 'react'
import './Input.css'


class Input extends React.Component {
    render() {
      return (
        <input type='text' value={this.props.valuee} onChange={this.props.valChange}/>
        );
    }
}
export default Input;
