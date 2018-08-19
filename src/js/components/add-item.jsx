import { Form, Menu, message, Dropdown, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../containers/firebase.js';
import FileUploader from "react-firebase-file-uploader";

import { addItem } from '../actions/adsActions';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

@connect(mapStateToProps, mapDispatchToProps)
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarURL: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return console.log(err);
      }
      console.log('Received values of form: ', values);
      let newObj = {url: this.state.avatarURL};
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

  handleUploadStart() { this.setState({ isUploading: true, progress: 0 }) };
  handleProgress (progress) {this.setState({ progress })};
  handleUploadError(error) {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess(filename) {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({ avatarURL: url })
      });
  };

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
                return <Option key={category.category} value={category.category}>{category.category}</Option>
              })
            }
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Name"
        >
        {getFieldDecorator('username', {
          
        })(
            <Input />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="City"
        >
        {getFieldDecorator('location', {
          
        })(
            <Input />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Price"
        >
        {getFieldDecorator('cost', {
          
        })(
            <Input />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Номер телефона"
        >
          {getFieldDecorator('numphone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='image'
        >
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}

            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
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
