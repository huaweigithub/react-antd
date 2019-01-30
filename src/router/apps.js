import React from 'react';
import 'antd/dist/antd.css';
import { Router, Route, Link, hashHistory } from 'react-router-dom'
import { Alert } from 'antd';

class RouterHome extends React.Component{
  render(){
    return(
      <div className="demo">
        <div className="demo-nav">
         <Alert style={{ margin: '16px 0' }} message="this is child app..." />
        </div>
      </div>
    )
  }
}

export default RouterHome