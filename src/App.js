import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import ShowData from './components/ShowData';

class App extends Component {

  constructor(){
      super();
      this.changeState = this.changeState.bind(this)
     this.state = {
       name : ''
     }
  }

  changeState = (event) =>{
    this.setState({
      name : event.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className='title'>Welcome to First React App</h1>
        <Input valuee={this.state.name} valChange={this.changeState} />
        <ShowData userValue={this.state.name}/>
      </div>
    );
  }
}

export default App;
