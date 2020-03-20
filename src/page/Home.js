/*
 * @Author: your name
 * @Date: 2020-03-19 13:37:46
 * @LastEditTime: 2020-03-19 13:47:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianxi\src\page\Home.js
 */
import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{

  render(){
    return (
      <div>
        <header>
          <h1>Welcome</h1>
        </header>

        <main>
          <Link to={{pathname:"user/add"}} replace>添加用户</Link>
        </main>
      </div>
    );
  }
}

export default Home;
