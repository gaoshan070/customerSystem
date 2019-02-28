import React, { Component } from "react";
import { Card, Button, Modal, Form, Input, Pagination, Row, Col } from "antd";
import { connect } from "dva";
import TextArea from "antd/lib/input/TextArea";
import NoteModal from "../components/NoteModal";

const namespace = "notes";

const FormItem = Form.Item;

const style = {
  width: "300px",
  margin: "30px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  border: "1px solid #e8e8e8"
};

const mapStateToProps = state => {
  const noteList = state[namespace].data;
  const pagination = state[namespace].pagination;
  return {
    noteList,
    pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: query => {
      dispatch({
        type: `${namespace}/fetch`,
        payload: query
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
    customerId: this.props.location.query.cid,
    visible: false,
    id: null
  };
  componentDidMount = () => {
    let customerId = this.state.customerId;
    let query = { offset: 0, customerId: customerId };
    this.props.onDidMount(query);
  };

  refresh = current => {
    const { customerId } = this.state;
    let query = { offset: current, customerId: customerId };
    this.props.onDidMount(query);
  };

  render() {
    return (
      <div>
        <div>
          <NoteModal
            record={{
              customerId: this.state.customerId,
              noteContent: "",
              noteId: 0
            }}
          >
            <Button>Add</Button>
          </NoteModal>
        </div>
        <Row gutter={16}>
          {this.props.noteList.map(note => {
            return (
              <Col key={note.noteId} span={8}>
                <Card
                  style={style}
                  key={note.noteId}
                  extra={[
                    <NoteModal
                      key={note.noteId}
                      record={{
                        customerId: note.customerId,
                        noteContent: note.noteContent,
                        noteId: note.noteId
                      }}
                    >
                      <a>Edit</a>
                    </NoteModal>
                  ]}
                >
                  <Card.Meta description={note.noteContent} />
                </Card>
              </Col>
            );
          })}
        </Row>
        <Pagination
          onChange={this.refresh}
          defaultCurrent={1}
          total={this.props.pagination.total}
        />
      </div>
    );
  }
}
