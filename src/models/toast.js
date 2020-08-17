/**
 * @description 用于登陆注册弹出框
 * @author senlin
 */

function delay(timout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timout);
  });
}

const toastModel = {
  namespace: 'toast',
  state: {
    toastStatus: false,  // 
    toastText: '错误', // 
  },
  reducers: {
    changeStatus: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    *showToast({payload}, {call, put, select}) {
      // const status = yield select(state => state.toast.toastStatus)
      yield put({
        type: 'changeStatus',
        payload,
      });
      yield call(delay, 1200)
      yield put({
        type: 'changeStatus',
        payload: {
          ...payload,
          toastStatus: false
        }
      });
    }
  }
}

export default toastModel