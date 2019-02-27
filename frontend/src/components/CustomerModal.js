import React, { Component } from "react";
import { Modal, Form, Input } from "antd";

const FormItem = Form.Item;

class CustomerEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModelHandler = e => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { customerName, email, status } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title="Edit Customer"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form layout="horizontal" onSubmit={this.okHandler}>
            <FormItem {...formItemLayout} label="Name">
              {getFieldDecorator("customerName", {
                initialValue: customerName
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Email">
              {getFieldDecorator("email", {
                initialValue: email
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Status">
              {getFieldDecorator("status", {
                initialValue: status
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(CustomerEditModal);
