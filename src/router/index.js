import React from 'react';
import 'antd/dist/antd.css';

// import {
//   Router, Route, hashHistory,
// } from 'react-router';

import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';


import { Breadcrumb, Alert } from 'antd';
import RouterHome from './home';
import RouterApp from './apps';


class RouterDefault extends React.Component{
  render(){
    return(
      <HashRouter>
        <div>
          <h1>this is test...</h1>
          <Route exact name="home" breadcrumbName="Home" path="/" component={RouterHome}>
            {/* <Route name="apps" breadcrumbName="Application List" path="apps" component={RouterApp}></Route> */}
          </Route>
          <Route name="apps" breadcrumbName="apps" path="/apps" component={RouterApp}></Route>
        </div>
      </HashRouter>
    )
  }
}

export default RouterDefault