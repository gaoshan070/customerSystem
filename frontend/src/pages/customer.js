import React, { Component } from "react";
import { Table, Tag, Row, Col, Input, Button, Select } from "antd";
import CustomerModal from "../components/CustomerModal";
import { connect } from "dva";
import style from "./style.css";
import Link from "umi/link";
import moment from "moment";

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
    refresh: query => {
      dispatch({
        type: `${namespace}/refresh`,
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
export default class CustomerPage extends Component {
  state = {
    filteredInfo: {
      name: "",
      value: "",
      email: "",
      status: ""
    },
    sortedInfo: {
      sort: "customer_id",
      order: "desc"
    }
  };

  componentDidMount() {
    this.props.onDidMount();
  }

  handleViewDetail = () => {};

  handleSortChange = value => {
    let { sortedInfo } = this.state;
    sortedInfo.sort = value;
    this.setState(() => ({ sortedInfo: sortedInfo }));
    this.handleSort();
  };
  handleOrderChange = value => {
    let { sortedInfo } = this.state;
    sortedInfo.order = value;
    this.setState(() => ({ sortedInfo: sortedInfo }));
    this.handleSort();
  };
  handleNameChange = event => {
    let { filteredInfo } = this.state;
    filteredInfo.name = event.target.value;
    this.setState(() => ({ filteredInfo: filteredInfo }));
  };
  handleEmailChange = event => {
    let { filteredInfo } = this.state;
    filteredInfo.email = event.target.value;
    this.setState(() => ({ filteredInfo: filteredInfo }));
  };
  handleStatusChange = value => {
    let { filteredInfo } = this.state;
    filteredInfo.status = value;
    this.setState(() => ({ filteredInfo: filteredInfo }));
  };
  handleSort = () => {
    const pager = { ...this.props.pagination };
    let query = {
      offset: typeof pager.current == "undefined" ? 0 : pager.current,
      filter: this.state.filteredInfo,
      pagination: pager,
      sort: this.state.sortedInfo
    };
    this.props.refresh(query);
  };
  handleFilter = () => {
    let query = {
      offset: 0,
      filter: this.state.filteredInfo,
      pagination: { current: 1 },
      sort: this.state.sortedInfo
    };
    this.props.refresh(query);
  };
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.props.pagination };
    pager.current = pagination.current;
    let query = {
      offset: pager.current,
      pagination: pagination,
      filter: this.state.filteredInfo,
      sort: this.state.sortedInfo
    };
    this.props.refresh(query);
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "ID",
        dataIndex: "customerId"
      },
      {
        title: "Name",
        dataIndex: "customerName"
      },
      {
        title: "Birth",
        dataIndex: "birth",
        render: val => <span>{moment(val).format("YYYY-MM-DD")}</span>
      },
      {
        title: "Status",
        dataIndex: "status",
        render: status => {
          let color = "geekblue";
          let value = "Prospective";
          if (status === 0) {
            color = "volcano";
            value = "Non-active";
          } else if (status === 1) {
            color = "green";
            value = "Current";
          }
          return (
            <Tag color={color} key={status}>
              {value}
            </Tag>
          );
        }
      },
      {
        title: "Gender",
        dataIndex: "gender",
        render: gender => (gender == 1 ? "Male" : "Female")
      },
      {
        title: "Email",
        dataIndex: "email"
      },
      {
        title: "Address",
        dataIndex: "address"
      },
      {
        title: "Mobile",
        dataIndex: "mobile"
      },
      {
        title: "CreateDate",
        dataIndex: "createDate"
      },
      {
        title: "UpdateDate",
        dataIndex: "updateDate"
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
    return (
      <div>
        <Row>
          <Col span={3}>
            <Select
              onChange={this.handleSortChange}
              id="sort"
              style={{ width: 120 }}
              defaultValue="Sort"
            >
              <Select.Option value="customer_id">ID</Select.Option>
              <Select.Option value="create_date">Create Date</Select.Option>
              <Select.Option value="update_date">Update Date</Select.Option>
            </Select>
          </Col>
          <Col span={2}>
            <Select
              onChange={this.handleOrderChange}
              id="order"
              style={{ width: 120 }}
              defaultValue="Order"
            >
              <Select.Option value="desc">DESC</Select.Option>
              <Select.Option value="asc">ASC</Select.Option>
            </Select>
          </Col>
          <Col span={3} offset={5}>
            <Input
              onChange={this.handleNameChange}
              id="customerName"
              placeholder="Name"
            />
          </Col>
          <Col span={3}>
            <Input
              onChange={this.handleEmailChange}
              id="email"
              placeholder="Email"
            />
          </Col>
          <Col span={3}>
            <Select
              onChange={this.handleStatusChange}
              id="status"
              style={{ width: 120 }}
              defaultValue="All Status"
            >
              <Select.Option value="0">Non-active</Select.Option>
              <Select.Option value="1">Current</Select.Option>
              <Select.Option value="2">Prospective</Select.Option>
            </Select>
          </Col>
          <Col span={3}>
            <Button
              onClick={() => {
                this.handleFilter();
              }}
              type="primary"
              icon="search"
            >
              Filter
            </Button>
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={this.props.customerList}
          pagination={this.props.pagination}
          loading={this.props.loading}
          onChange={this.handleTableChange}
          rowKey="customerId"
          scroll={{ x: 1300 }}
        />
      </div>
    );
  }
}
