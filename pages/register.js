import React, { Component } from 'react';
import Head from 'next/head';

import Register from '../components/Register/Register';

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="../static/css/simple-line-icons.css" />
          <link rel="stylesheet" href="../static/css/style.css" />
        </Head>
        <div className="app">
          <Register />
        </div>
      </div>
    );
  }
}

export default RegisterPage;
