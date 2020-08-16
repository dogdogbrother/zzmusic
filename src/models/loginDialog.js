/**
 * @description 用于登陆注册弹出框
 * @author senlin
 */
import axios from 'axios'

const REGISTER_URL = '/api/user/register'
const LOGIN_URL = '/api/user/login'

const loginDialogModel = {
  namespace: 'loginDialog',
  state: {
    dialogStatus: false,  // 控制dialog开关
    dialogHeaderText: '提示', // dialog头部默认字段
    dialogMain: null, // dialog中间内容, 是jsx
    dialogBtns: [], // dialog中间按钮, 是jsx[]
  },
  reducers: {
    changeDialog: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    /**
     * @description 注册和登陆写成一个方法吧，用有没有确认密码来辨别
     *              成功就处理 userModel，失败就处理 tostModel
     */
    *registerOrLogin({payload}, {call, put}) {
      let res = null
      try{
        res = yield call(axios.post, payload.affirmPassword ? REGISTER_URL : LOGIN_URL, payload)
      } catch (error) {
        res = error
      }
      if (res.code === 200) {
        yield put({
          type: 'changeDialog',
          payload: {
            dialogStatus: false
          }
        })
        // 修改 user
        yield put({
          type: 'user/changeUser',
          payload: res.data
        })
      } else {
        yield put({
          type: 'toast/showToast',
          payload: {
            toastStatus: true,
            toastText: res.data, 
          }
        })
      }
    }
  }
}

export default loginDialogModel