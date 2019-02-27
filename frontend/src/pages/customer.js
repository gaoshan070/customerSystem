import React, { Component } from "react";
import { Table, Popconfirm, Modal, Form, Input, Button } from "antd";
import CustomerModal from "../components/CustomerModal";
import { connect } from "dva";
import style from "./style.css";
import Link from "umi/link";

const columns = [
  {
    title: "ID",
    dataIndex: "customerId",
    sorter: true
  },
  {
    title: "Name",
    dataIndex: "customerName",
    sorter: true
  },
  {
    title: "Birth",
    dataIndex: "birth"
  },
  {
    title: "Status",
    dataIndex: "status",
    render: status => (status == 0 ? "Non-active" : "Current"),
    filters: [
      { text: "Non-active", value: "0" },
      { text: "Current", value: "1" },
      { text: "Prospective", value: "2" }
    ]
  },
  {
    title: "Gender",
    dataIndex: "gender",
    render: gender => (gender == 1 ? "Male" : "Female"),
    filters: [{ text: "Male", value: "1" }, { text: "Female", value: "0" }]
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (text, record) => (
      <span className={style.operation}>
        <CustomerModal record={record}>
          <a>Edit</a>
        </CustomerModal>
        <Link to={`/note?cid=${record.customerId}`}>Notes</Link>
      </span>
    )
  }
];

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
    onDidMount: () => {
      dispatch({
        type: `${namespace}/fetch`
      });
    },
    refresh: offset => {
      dispatch({
        type: `${namespace}/refresh`,
        payload: offset
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
export default class CustomerPage extends Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  handleViewDetail = () => {};

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.props.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.props.refresh(pager.current);
  };

  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.customerList}
        pagination={this.props.pagination}
        loading={this.props.loading}
        onChange={this.handleTableChange}
        key="id"
      />
    );
  }
}
