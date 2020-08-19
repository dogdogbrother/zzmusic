/**
 * @description 用于 audio 实例的播放返回，例如返回目前播放时间等等。利用传入的 dispatch 把数据给dva。
 */

export class musciAction {
  constructor({dispatch, playRef}) {
    // this.dispatch = dispatch
    // this.audioEle = audioEle
    const audioEle = playRef.current
    audioEle.ontimeupdate = () => {
      dispatch({
        type: 'play/setState',
        payload: {
          currentDuration: audioEle.currentTime
        }
      })
    }
  }
}