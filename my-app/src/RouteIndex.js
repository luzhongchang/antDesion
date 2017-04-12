/**
 * Created by luzhongchang on 17/3/31.
 */
import React, { Component } from 'react';
import {Link,Route,Router, hashHistory} from 'react-router'
import {Breadcrumb, Alert} from  'antd';
import App from './App'
import  Home from './Home';
class  RouteIndex extends Component
{
    render()
    {
        return(
           <Router history={hashHistory}>
               <Route name ='home'  breadcrumbName="Home" path="/" component={Home}>
                    <Route name="apps" breadcrumbName="Application List" path="apps" component={App}>
                        <Route name="app" breadcrumbName="Application:id" path=":id">
                            <Route name="detail" breadcrumbName="Detail" path="detail" />
                        </Route>
                    </Route>
               </Route>
           </Router>
        );
    }
}
export  default RouteIndex;