import React, { Component } from 'react';
import api from './services/api';

import Home from './pages/Home';

class App extends Component {
  componentDidMount() {
    api
      .get(
        `${process.env.REACT_APP_URI}?client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&response_type=${process.env.REACT_APP_RESPONSE}&redirect_uri=${
          process.env.REACT_APP_REDIRECT_URI
        }&scope=${process.env.REACT_APP_SCOPE}&state=${
          process.env.REACT_APP_STATE
        }`,
      )
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
