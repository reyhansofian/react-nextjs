import React, { Component } from 'react';
import Head from 'next/head';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="../static/css/style.css" />
        </Head>
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar {...this.props} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Index;
