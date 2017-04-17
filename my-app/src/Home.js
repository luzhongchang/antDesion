/**
 * Created by luzhongchang on 17/3/31.
 */
import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import { Breadcrumb, Alert } from 'antd';

const Home = ({ routes, params, children }) => (
    <div className="demo">
        <div className="demo-nav">
            <Link to="/">Home</Link>
            <Link to="/apps">Application List</Link>
        </div>
        hello word
        {children || 'Home Page'}
        <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
        <Breadcrumb routes={routes} params={params} />
    </div>
);

export  default  Home;