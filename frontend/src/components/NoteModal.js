import React, { Component } from "react";
import { Modal, Form, Input } from "antd";
import { connect } from "dva";
import TextArea from "antd/lib/input/TextArea";

const FormItem = Form.Item;
const namespace = "notes";
const mapStateToProps = state => {
  const noteList = state[namespace].data;
  const pagination = state[namespace].pagination;
  const loading = state[namespace].loading;
  return {
    noteList,
    pagination,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: note => {
      dispatch({
        type: `${namespace}/update`,
        payload: note
      });
    },
    save: note => {
      dispatch({
        type: `${namespace}/save`,
        payload: note
      });
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class NoteEditModal extends Component {
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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.noteId == 0) {
          this.props.save(values);
        } else {
          this.props.update(values);
        }
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { noteContent, customerId, noteId } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title={noteId == 0 ? "New Note" : "Edit Note"}
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
            <FormItem>
              {getFieldDecorator("noteId", {
                initialValue: noteId
              })(<Input type="hidden" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Note Content">
              {getFieldDecorator("noteContent", {
                initialValue: noteContent,
                rules: [
                  { required: true, message: "Content should not be null!" }
                ]
              })(<TextArea />)}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(NoteEditModal);
