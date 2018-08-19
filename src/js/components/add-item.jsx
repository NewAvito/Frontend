import { Form, Menu, message, Dropdown, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../containers/store';

store.subscribe(() => {
  console.log('It is work!', store.getState())
});

store.dispatch({ type: 'ADD_INFO', payload: 'лол кек' });

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;



const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

    function handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
  }

  const menu = (props) => {
    console.log(props)
    return (
     <Menu onClick={handleMenuClick}>
      {props.categories.list.map(nameCategories => (
        <Menu.Item key={nameCategories.id}><Icon type="user" />{nameCategories.name}</Menu.Item>
        ))}
    </Menu>
    )
  };

@connect(mapStateToProps)
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur (e)  {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword (rule, value, callback)  {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword (rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange (value)  {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+7</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
            {...formItemLayout}
            label="Название"
          >
          {getFieldDecorator('title', {
          
          })(
              <Input />
          )}
        </FormItem>
       <FormItem
          {...formItemLayout}
          label="Описание"
        >
            <Input />
        </FormItem>
        <FormItem {...formItemLayout}
        label='Категория'>
          <Dropdown overlay={menu(this.props)}>
            <Button style={{ width: 250 }}>
              Выбрать категорию <Icon type="down" />
            </Button>
        </Dropdown>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Имя"
        >
            <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Город"
        >
            <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Метро(если есть)"
        >
            <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Номер телефона"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

export default Form.create()(RegistrationForm);;