import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';

import { registerUser } from '../actions/userActions';

const FormItem = Form.Item;
const Option = Select.Option;

@connect(mapStateToProps, mapDispatchToProps)
class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this); 
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
    this.validateToNextPassword = this.validateToNextPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = this.props.form;
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (err) {
        console.log(err);
      }

      console.log('Received values of form: ', data);
      this.props.registerUser(data);
    });
  }

  handleConfirmBlur(e) {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords doesnt match!');
    } else {
      callback();
    }
  }

  validateToNextPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    
    if (this.props.logged) {
      return <Redirect to='/' />
    }

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div className='reg-form'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label='E-mail'
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label='Password'
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type='password' />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label='Confirm Password'
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type='password' onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>Register</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    logged: !!user.uid
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    registerUser: (user) => {
      dispatch(registerUser(user));
    }
  }
}

export default Form.create()(RegistrationForm);
