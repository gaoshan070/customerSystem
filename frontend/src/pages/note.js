import React, { Component } from "react";
import { Card, Button, Modal, Form, Input } from "antd";
import { connect } from "dva";
import TextArea from "antd/lib/input/TextArea";

const namespace = "notes";

const FormItem = Form.Item;

const style = {
  width: "400px",
  margin: "30px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  border: "1px solid #e8e8e8"
};

const mapStateToProps = state => {
  const noteList = state[namespace].data;
  return {
    noteList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: cid => {
      dispatch({
        type: `${namespace}/fetch`,
        payload: cid
      });
    },
    onClickAdd: newNote => {
      const action = {
        type: `${namespace}/addNewNote`,
        payload: newNote
      };
      dispatch(action);
    },
    onClickView: id => {
      dispatch({
        type: `${namespace}/detail`,
        payload: id
      });
    },
    saveNote: values => {
      dispatch({
        type: `${namespace}/saveNote`,
        payload: values
      });
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Note extends Component {
  state = {
    customerId: null,
    visible: false,
    id: null
  };
  componentDidMount() {
    this.props.onDidMount(this.props.location.query.cid);
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    const {
      form: { validateFields }
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        this.saveNote(values);
        this.setState({ visible: false });
      }
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  detail(id) {
    this.props.onClickView(id);
  }

  render() {
    const { visible, id } = this.state;
    return (
      <div>
        <Modal
          title="New Note"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label="Note Content">
              <TextArea />
            </FormItem>
          </Form>
        </Modal>
        {this.props.noteList.map(note => {
          return (
            <Card
              style={style}
              key={note.noteId}
              actions={[<a onClick={this.detail(note.noteId)}>Edit</a>]}
            >
              <Card.Meta description={note.noteContent} />
            </Card>
          );
        })}
        <div>
          <Button onClick={() => this.showModal()}>Add</Button>
        </div>
      </div>
    );
  }
}
