import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h4>Hello ReactJS</h4>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
