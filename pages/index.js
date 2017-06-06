import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';

import Head from 'next/head';

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
