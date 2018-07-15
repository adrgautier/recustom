import './App.css';
import React, { Component } from 'react';
import TextInput from '../TextInput';

class App extends Component {

  state = { value: '' };

  handleChange = (e) => {
    this.setState({ value: e.target.value});
  }

  render() {
    const { handleChange } = this;
    const { value } = this.state;
    const error = value.length < 3;

    return (
      <div className="App">
        <TextInput placeholder="This is an input" onChange={handleChange} value={value} error={error}/>
      </div>
    );
  }
}

export default App;
