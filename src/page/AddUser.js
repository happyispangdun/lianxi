/*
 * @Author: your name
 * @Date: 2020-03-19 11:09:09
 * @LastEditTime: 2020-03-20 10:24:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianxi\src\page\AddUser.js
 */
import React from 'react';
import formProvider from '../utils/formProvider';


class AddUser extends React.Component{

  handleSubmit(e){
    e.preventDefault();
    const {form:{name,age,gender}} = this.props;
    if(!form.vaild){
      alert('请填写正确的信息后重试');
      return
    }
    fetch('http://localhost:3000/user',{
      method:'post',
      body:JSON.stringify({
        name,
        age,
        gender
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      if(res.id){
        alert('添加用户成功');
        this.setState({
          name: '',
          age: 0,
          gender: ''
        });
      }else{
        alert('添加失败');
      }
    }).catch(err => console.log(err));
  }

  render(){
    const {form:{name,age,gender}} = this.state;
    return(
      <div>
        <header>
          <h1>添加用户</h1>
        </header>
        <main>
          <form onSubmit={e => {this.handleSubmit(e)}}>
            <label>用户名：</label>
            <input type="text" value={name.value} onChange={e => this.handleValueChange('name',e.target.value)}/>
            {!name.vaild&&<span>{name.error}</span>}
            <br/>
            <label>年龄：</label>
            <input type="number" value={age.value||0} onChange={e => this.handleValueChange('age',e.target.value,'number')}/>
            {!age.vaild&&<span>{age.error}</span>}
            <br/>
            <label>性别：</label>
            <select value={gender.value} onChange={e => this.handleValueChange('gender',e.target.value)}>
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            {!gender.vaild&&<span>{gender.error}</span>}
            <br/>
            <br/>
            <input type="submit" value="提交"/>
          </form>
        </main>
      </div>

    )
  }
}

AddUser = formProvider({
  name:{
    defaultValue:"",
    rules:[
      {
        pattern:function(value){
          return value.length>0;
        },
        error:""
      },
      {
        pattern:/^.{1,4}$/,
        error:"用户名最大4个字符"
      }
    ]
  },
  age:{
    default:"",
    rules:[
      {
        pattern: function (value) {
          return value >= 1 && value <= 100;
        },
        error: '请输入1~100的年龄'
      }
    ]
  },
  gender: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return !!value;
        },
        error: '请选择性别'
      }
    ]
  }
})(AddUser)

export default AddUser;