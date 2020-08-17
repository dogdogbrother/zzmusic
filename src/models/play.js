/**
 * @description 用于处理播放的一些内容，摸索中，慢慢改善
 * @author senlin
 */
const playModel = {
  namespace: 'play',
  state: {
    audioEle: null, // audio元素,就是用ref把video元素挂载到这里，然后操作这个节点就行了
    playing: false, // 播放状态
    playlist: [], // 播放列表
    orderList: [], // 顺序列表
    currentIndex: -1, // 当前音乐索引
  },
  reducers: {
    assignAudioEle: (state, { payload }) => {
      return {
        audioEle: payload.audioEle
      }
    },
    setState: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    /**
     * @description 点歌操作，payload会把歌曲的url带进来,要给 audioEle 挂载src，要push给播放列表 playlist，
     *              要改变播放索引currentIndex, 要改变 playing 的播放状态
     */
    *requestMusic({payload}, {call, put, select}) {
      const { audioEle } = yield select(state => state.play)
      audioEle.src = payload.music.url;
      audioEle.play()
      yield put({
        type: 'setState',
        payload: {
          playing: true
        }
      })
    },
    // 播放和暂停在这个一个函数处理
    *controlPlay({payload}, {call, put, select}) {
      const { audioEle } = yield select(state => state.play)
      payload.playing ? audioEle.play() : audioEle.pause()
      yield put({
        type: 'setState',
        payload,
      })
    }
  }
}
export default playModel