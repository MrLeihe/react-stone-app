import React, { Component } from 'react';
import { Form, Breadcrumb, Input, Button } from 'antd';

const FormItem = Form.Item;

function createPage(target) {
  @target
  class StoneForm extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      console.log(event);
      event.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        console.log(err);
        console.log(values);
      });
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      const FormItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 14 }
      };
      return (
        <div>
          <header>
            <Breadcrumb>
              <Breadcrumb.Item>home</Breadcrumb.Item>
              <Breadcrumb.Item>{`${this.symbol}表单页`}</Breadcrumb.Item>
            </Breadcrumb>
          </header>
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...FormItemLayout} label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: true, message: 'please input your email!' }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...FormItemLayout}>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'please input your password!' },
                  { validator: this.checkd }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem style={{ marginTop: 24, textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }

  return Form.create()(StoneForm);
}

export default createPage;
