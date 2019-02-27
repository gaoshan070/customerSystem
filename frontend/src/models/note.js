import * as noteService from "../services/note";

export default {
  namespace: "notes",
  state: {
    data: [],
    note: {},
    pagination: {
      current: 0,
      pageSize: 10
    },
    loading: false
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const rsp = yield call(noteService.fetch, {
        offset: 0,
        customerId: payload
      });
      yield put({ type: "loadNoteList", payload: { data: rsp.rows } });
    },
    *detail({ payload }, { call, put }) {
      const rsp = yield call(noteService.getDetail, payload);
      yield put({ type: "loadNoteDetail", payload: { note: rsp.data } });
    }
  },

  reducers: {
    loadNoteList(
      state,
      {
        payload: { data }
      }
    ) {
      return {
        ...state,
        data
      };
    },
    loadNoteDetail(
      state,
      {
        payload: { note }
      }
    ) {
      return {
        ...state,
        note
      };
    },

    addNewNote(state, { payload: newNote }) {
      const nextCounter = state.counter + 1;
      const newNoteWithId = { ...newNote, id: nextCounter };
      const nextData = state.data.concat(newNoteWithId);
      return {
        data: nextData,
        counter: nextCounter
      };
    },
    update(state, { payload: updateNote }) {}
  }
};
