/**
 * @description 用于个人信息的管理
 * @author senlin
 */
import axios from 'axios'

const GET_INFO_URL = '/api/user/info'
const LOGOUT_URL = '/api/user/logout'

const STATE = {
  userName: '',  
  nickName: '', 
  avatar: '', 
  id: 0,
}
const userModel = {
  namespace: 'user',
  state: {
    ...STATE
  },
  reducers: {
    changeUser: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    /**
     * @description 初始化获取用户信息
     */
    *getUserInfo(_, {call, put}) {
      const { data } = yield call(axios.get, GET_INFO_URL)
      if (data) {
        yield put({
          type: 'changeUser',
          payload: data
        })
      }
    },
    *logout(_, {call, put}) {
      const {code} = yield call(axios.get, LOGOUT_URL)
      if (code) {
        yield put({
          type: 'changeUser',
          payload: {
            ...STATE
          },
        })
      }
    }
  }
}

export default userModel