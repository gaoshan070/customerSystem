import * as noteService from "../services/note";

export default {
  namespace: "notes",
  state: {
    data: [],
    note: {},
    pagination: {
      current: 0,
      pageSize: 9,
      total: 0
    },
    loading: false
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const rsp = yield call(noteService.fetch, payload);
      yield put({
        type: "loadNoteList",
        payload: { data: rsp.rows, total: rsp.total }
      });
    },
    *update({ payload }, { call, put }) {
      const rsp = yield call(noteService.update, payload);
      yield put({
        type: "fetch",
        payload: { offset: 0, customerId: payload.customerId }
      });
    },
    *save({ payload }, { call, put }) {
      const rsp = yield call(noteService.save, payload);
      yield put({
        type: "fetch",
        payload: { offset: 0, customerId: payload.customerId }
      });
    }
  },

  reducers: {
    loadNoteList(
      state,
      {
        payload: { data, total }
      }
    ) {
      return {
        ...state,
        data,
        pagination: {
          current: 1,
          total: total
        }
      };
    }
  }
};
