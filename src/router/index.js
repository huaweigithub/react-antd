import React from 'react';
import 'antd/dist/antd.css';

import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { Breadcrumb, Alert } from 'antd';
import RouterHome from './home';
import RouterApp from './apps';


class RouterDefault extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={RouterHome}></Route>
          <Route path="/apps" component={RouterApp}></Route>
        </Switch>
      </div>
    )
  }
}

export default RouterDefault