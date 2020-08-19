/**
 * @description 我自己的搜索播放列表
 * @author senlin
 */

const wyyPlayModel = {
  namespace: 'myPlay',
  state: {
    musics: []
  },
  reducers: {
    setState: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    *changeList({payload}, {call, put, select}) {

    }
  }
}

export default wyyPlayModel