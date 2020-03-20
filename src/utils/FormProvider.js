/*
 * @Author: your name
 * @Date: 2020-03-19 16:14:59
 * @LastEditTime: 2020-03-19 16:39:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianxi\src\utils\FormProvider.js
 */

 import React from 'react';

 function FormProvider(fields){
   
  return function(Comp){

    const initialFormState={};
    for(const key in fields){
      initialFormState[key]={
        value:fields[key].defaultValue,
        error:''
      };
    }

    class FormComponent extends React.Component{

      constructor(props){
        super(props);
        this.state={
          form:initialFormState,
          formVaild:false
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(fieldName,value){
        const {form} = this.state;

        const newFieldState = {value,vaild: true,error:''}; 

        const fieldRules = fields[fieldName].rules;

        for(let i = 0; i<fieldRules.length;i++){

          const {pattern,error} = fieldRules[i];
          
          let vaild = false;

          if(typeof pattern === 'function') {
            
            valid = pattern(value);

          } else {

            valid = pattern.test(value);

          }

          if(!vaild){

            newFieldState.vaild = false;

            newFieldState.error = error;

            break;
          }
        }

        const newForm = {...form,[fieldName]:newFieldState};

        const formVaild = Object.values(newForm).every(f => f.vaild);

        this.setState({
          form:newForm,
          formValue
        });
      }

      render(){
        const {form,formVaild} = this.state;
        return <Comp {...this.props} form={form} formVaild={formVaild} onFormChang={this.handleChange}/>
      }
    }

    return FormComponent;
  }

 }

 export default FormProvider;