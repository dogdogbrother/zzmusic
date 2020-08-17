/**
 * @description 存放搜索得来的歌曲，以及搜索歌曲相关的HTTP
 * @author senlin
 */
import axios from 'axios'

const HOT_URL = 'wyapi/search/hot'

const hotModel = {
  namespace: 'hot',
  state: {
    hots: []
  },
  reducers: {
    changeHot: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    *getSearchHot({payload}, {call, put}) {
      const { data } = yield call(axios.get, HOT_URL)
      if (data && data.result) {
        yield put({
          type: 'changeHot',
          payload: {
            hots: data.result.hots.slice(0, 5)
          }
        })
      }
    },
  }
}
export default hotModel