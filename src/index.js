/*
 * @Author: your name
 * @Date: 2020-03-19 10:55:47
 * @LastEditTime: 2020-03-19 13:49:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianxi\src\index.js
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Route,HashRouter,Switch} from 'react-router-dom';
 import UserAddPage from './page/AddUser';
 import Home from './page/Home'

 ReactDOM.render((
   <HashRouter>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/user/add" component={UserAddPage}/> 
     </Switch>     
   </HashRouter>
 ),document.getElementById('app'));