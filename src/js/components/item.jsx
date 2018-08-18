// import React, { Component } from 'react';
// import store from '../containers/store';

// store.subscribe(() => {
// 	console.log('It is work!', store.getState())
// })
// store.dispatch({ type: 'ADD_INFO', payload: 'лол кек' })

// export default class Item extends Component {

//   render() {
//     return (
//       <div className='item'>
//       	<span>Название объявления</span>
//       	<input type='text' className='titleText' />
//       	<span>Описание</span>
//       	<input type='text' className='descText' />
//       	<span>Ваше имя</span>
//       	<input type='text' className='nameText' />
//       	<span>Номер телефона</span>
//       	<input type='text' className='numberText' />
//       	<span>Регион, город</span>
//       	<input type='text' className='cityText' />
//       	<span>Метро(если есть)</span>
//       	<input type='text' className='metroText' />
//       	<span>Категория</span>
//       	<input type='text' className='categoryText' />
//       </div>
//     )
//   }
// }

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';
import store from '../containers/store';

store.subscribe(() => {
  console.log('It is work!', store.getState())
});

store.dispatch({ type: 'ADD_INFO', payload: 'лол кек' });

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories.list
  }
}

export default Form.create()(NormalLoginForm);