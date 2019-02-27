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
    *fetch({ _ }, { call, put }) {
      const rsp = yield call(customerService.fetch, {
        offset: 0
      });
      yield put({
        type: "loadCustomerList",
        payload: { data: rsp.rows, total: rsp.total }
      });
    },
    *refresh({ payload }, { call, put }) {
      console.log(payload);
      const rsp = yield call(customerService.refresh, payload);
      yield put({
        type: "loadCustomerList",
        payload: { data: rsp.rows, total: rsp.total }
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
      const rsp = yield call(customerService.save, payload);
      // yield put({ type: 'queryList' });
      return rsp;
    }
  },

  reducers: {
    loadCustomerList(
      state,
      {
        payload: { data, total }
      }
    ) {
      return {
        ...state,
        data,
        pagination: {
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
