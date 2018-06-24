import React, { Component } from 'react';
import CustomProperties from 'react-custom-properties';
import logo from './logo.svg';
import './App.css';
import Section, {AlternativeSection} from './components/Section';

import defaultProperties from './styles/defaultProperties';

class App extends Component {
  render() {
    return (
      <CustomProperties properties={defaultProperties}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Section className="so much style" alignment="left">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Section>
          <AlternativeSection className="i am styled" alignment="right" important>
            This is some alternative section :)
          </AlternativeSection>
        </div>
      </CustomProperties>
    );
  }
}

export default App;
