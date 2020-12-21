import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// component
// state
// lifecycle
// ui

function isAuthenticated() {
  return false;
}


class App extends React.Component {
  render() {
    return (
      <div>
        { isAuthenticated() === true && <div>Hello Mike!</div>}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)