import React from "react"
import PropTypes from "prop-types"

import Routes from './Routes'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Routes />
      </div>
    );
  }
}

export default App
