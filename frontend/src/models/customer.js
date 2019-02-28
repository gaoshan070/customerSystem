import * as customerService from "../services/customer";

export default {
  namespace: "customers",
  state: {
    data: [],
    customer: {},
    pagination: {
      current: 0,
      pageSize: 10,
      total: 0
    },
    loading: false
  },

  effects: {
    *fetch({ _ }, { call, put, select }) {
      const rsp = yield call(customerService.fetch, {
        offset: 0
      });
      const pager = yield select(state => state.customers.pagination);
      yield put({
        type: "loadCustomerList",
        payload: {
          data: rsp.rows,
          total: rsp.total,
          pagination: pager
        }
      });
    },
    *refresh({ payload }, { call, put }) {
      const rsp = yield call(customerService.refresh, payload);
      yield put({
        type: "loadCustomerList",
        payload: {
          data: rsp.rows,
          total: rsp.total,
          pagination: payload.pagination
        }
      });
    },
    *detail({ payload }, { call, put }) {
      const rsp = yield call(customerService.getDetail, payload);
      yield put({
        type: "loadCustomerDetail",
        payload: { customer: rsp.data }
      });
    },
    *update({ payload }, { call, put }) {
      const rsp = yield call(customerService.update, payload);
      yield put({
        type: "fetch"
      });
    }
  },

  reducers: {
    loadCustomerList(
      state,
      {
        payload: { data, total, pagination }
      }
    ) {
      return {
        ...state,
        data,
        pagination: {
          current: pagination.current,
          total: total
        }
      };
    },
    loadCustomerDetail(
      state,
      {
        payload: { customer }
      }
    ) {
      return {
        ...state,
        customer
      };
    },
    addNewUser(state, { payload: newUser }) {
      const nextCounter = state.counter + 1;
      const newUserWithId = { ...newUser, id: nextCounter };
      const nextData = state.data.concat(newUserWithId);
      return {
        data: nextData,
        counter: nextCounter
      };
    }
  }
};
