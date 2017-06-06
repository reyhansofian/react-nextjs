import React, { Component } from 'react';
import Head from 'next/head';

import Login from '../components/Login/Login';

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
            <link rel="stylesheet" href="../static/css/simple-line-icons.css" />
            <link rel="stylesheet" href="../static/css/style.css" />
        </Head>
        <div className="app">
          <Login />
        </div>
      </div>
    );
  }
}

export default Index;
