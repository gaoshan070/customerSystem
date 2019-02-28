import React, { Component } from "react";
import { Modal, Form, Input, Select } from "antd";
import { connect } from "dva";

const FormItem = Form.Item;
const namespace = "customers";
const mapStateToProps = state => {
  const customerList = state[namespace].data;
  const pagination = state[namespace].pagination;
  const loading = state[namespace].loading;
  return {
    customerList,
    pagination,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: customer => {
      dispatch({
        type: `${namespace}/update`,
        payload: customer
      });
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
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
    // const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // onOk(values);
        this.props.update(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const {
      customerName,
      email,
      status,
      gender,
      customerId,
      address,
      mobile
    } = this.props.record;
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
            <FormItem>
              {getFieldDecorator("customerId", {
                initialValue: customerId
              })(<Input type="hidden" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Name">
              {getFieldDecorator("customerName", {
                initialValue: customerName
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Gender">
              {getFieldDecorator("gender", {
                initialValue: gender
              })(
                <Select>
                  <Option value={0}>Female</Option>
                  <Option value={1}>Male</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Mobile">
              {getFieldDecorator("mobile", {
                initialValue: mobile
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Email">
              {getFieldDecorator("email", {
                initialValue: email
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Address">
              {getFieldDecorator("address", {
                initialValue: address
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Status">
              {getFieldDecorator("status", {
                initialValue: status,
                rules: [{ required: true, message: "Please select status!" }]
              })(
                <Select onChange={this.handleStatusChange}>
                  <Option value={0}>Non-active</Option>
                  <Option value={1}>Current</Option>
                  <Option value={2}>Propspective</Option>
                </Select>
              )}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(CustomerEditModal);
