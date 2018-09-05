import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './components/Panel';
import './App.css';

import en from './locales/en.json';
import es from './locales/es.json';

const locales = {en, es};

class App extends Component {
  static childContextTypes = {
    locale: PropTypes.object
  }

  state = {
    currentLocale: 'en'
  }

  getChildContext() {
    return {locale: locales[this.state.currentLocale]}
  }

  changeLocale(locale){
    this.setState({currentLocale: locale})
  }

  render() {
    return (
      <div>
        <nav>
          <a onClick={() => this.changeLocale('en')}>🇺🇸</a>
          <a onClick={() => this.changeLocale('es')}>🇪🇦</a>
        </nav>
        <Panel />
      </div>
    );
  }
}

export default App;