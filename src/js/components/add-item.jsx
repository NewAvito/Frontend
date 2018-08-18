import { Form, Menu, message, Dropdown, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/adsActions';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

@connect(mapStateToProps, mapDispatchToProps)
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return console.log(err);
      }
      console.log('Received values of form: ', values);
      let newObj = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          if (values[key]) {
            newObj[key] = values[key];
          }
        }
      }

      this.props.addItem(newObj);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { categories } = this.props;
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
      initialValue: '+7',
    })(
      <Select style={{ width: 70 }}>
        <Option value="+7">+7</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form className='add-form' onSubmit={this.handleSubmit}>
        <FormItem
            {...formItemLayout}
            label="Title"
          >
          {getFieldDecorator('title', {
          
          })(
              <Input />
          )}
        </FormItem>
       <FormItem
          {...formItemLayout}
          label="Description"
        >
        {getFieldDecorator('description', {
          
        })(
            <Input />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Category"
        >
          {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Please select category!' }],
          })(
            <Select>
            {
              categories.map((category) => {
                return <Option key={category.id} value={category.id}>{category.name}</Option>
              })
            }
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Name"
        >
        {getFieldDecorator('name', {
          
        })(
            <Input />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="City"
        >
        {getFieldDecorator('city', {
          
        })(
            <Input />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Subway(если есть)"
        >
        {getFieldDecorator('subway', {
          
        })(
            <Input />
        )}
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
          <Button type="primary" htmlType="submit">Add</Button>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    }
  }
}

export default Form.create()(RegistrationForm);;
