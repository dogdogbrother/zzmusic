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
    orderList: [], // 顺序列表,暂时不写播放模式
    currentIndex: -1, // 当前音乐索引
    duration: 0, // 当前音频总时长，网易云来的文件有duration，自己穿的文件没有，没有的话可以计算下赋值给他
    currentDuration: 0, // 当前音频播放时长，每当点击或是拖动进度条的时候都要改变他，并且通过 audioEle 持续改变他
  },
  reducers: {
    assignAudioEle: (state, { payload }) => {
      return {
        ...state,
        audioEle: payload.audioEle
      }
    },
    setState: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    /**
     * @description 点歌操作.
     * payload会把歌曲的url带进来,要给 audioEle 挂载src.
     * 要push给播放列表 presentPlayList，和对应push进来的list,
     * 要改变播放索引currentIndex, 要改变 playing 的播放状态
     */
    *requestMusic({payload}, {call, put, select}) {
      const { audioEle, playlist, currentIndex } = yield select(state => state.play)
      audioEle.src = payload.music.url;
      yield audioEle.play()

      yield put({
        type: 'setState',
        payload: {
          playing: true,
          currentIndex: currentIndex + 1,
          playlist: [...playlist, payload.music],
          duration: payload.music.duration || audioEle.duration
        }
      })
      yield put({
        type: 'presentPlay/setState',
        payload: {
          musics: [...playlist, payload.music],
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
    },
    // 上一曲或者下一曲切换，先控制下播放，再存数据
    *switchPlay({payload}, {call, put, select}) {
      const { audioEle, currentIndex, playlist } = yield select(state => state.play)
      audioEle.pause()
      const playIndex = payload.type === 'pre' ? currentIndex - 1 : currentIndex + 1
      audioEle.src = playlist[playIndex].url;
      yield audioEle.play()
      yield put({
        type: 'setState',
        payload: {
          currentIndex: playIndex,
        }
      })
    },
    // 把
    *changePercent({payload}, {call, put, select}) {
      const { audioEle } = yield select(state => state.play)
      audioEle.currentTime = payload.currentDuration
      yield put({
        type: 'setState',
        payload,
      })
    }
  }
}
export default playModel