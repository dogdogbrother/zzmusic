/**
 * @description 正在播放的列表，当我们在网易云搜索或是我的搜索或是广场里面或是我的喜欢，选择了点击播放就会添加到这里面来
 * @author senlin
 */

const presentPlayModel = {
  namespace: 'presentPlay',
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

export default presentPlayModel