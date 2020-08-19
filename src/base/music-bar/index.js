import React, { useState } from 'react';
import MusicProgress from '@/base/music-progress'
import { connect } from 'react-redux';
import { Wrap, MusicBtnWrap, ControlPlay, MusicContent } from './style'
import { durationFormat } from '@/utils/util.js'

const MusicBar = (props) => {
  const { playing, dispatch, currentIndex, playlist, currentDuration, duration, audioEle } = props;
  const [shamTime, setShamTime] = useState() //作为临时属性存在，就是当滑动轨块时当前时间去变化(不能真的修改播放时间)
  function onControlPlay() {
    if (!playlist.length) return
    dispatch({
      type: 'play/controlPlay',
      payload: {
        playing: !playing
      }
    })
  }
  function onSwitch(type) {
    if (!playlist.length) return
    if (currentIndex === playlist.length - 1 && type === 'next') return
    if (!currentIndex && type === 'pre') return
    dispatch({
      type: 'play/switchPlay', 
      payload: {
        type
      }
    })
  }
  return(
    <Wrap>
      <MusicBtnWrap>
        <i className="pointer iconfont" title="上一曲 Ctrl + Left" onClick={() => onSwitch('pre')}>&#xe965;</i>
        <ControlPlay className="control-play pointer" title="播放暂停 Ctrl + Space" onClick={onControlPlay}>
          {
            playing ? <i className="iconfont">&#xe956;</i> : <i className="iconfont">&#xe95a;</i>
          }
        </ControlPlay>
        {/*  暂停 */}
        <i className="pointer iconfont" title="下一曲 Ctrl + Right" onClick={() => onSwitch('next')}>&#xe964;</i>
      </MusicBtnWrap>
      <MusicContent>
        <div className="music-bar-info">
          {
            playlist.length ? 
            <div>{playlist[currentIndex].name}<span>- {playlist[currentIndex].singer}</span></div> : 
            <p>欢迎使用zz在线音乐播放器</p>
          }
          <div className="music-bar-time">
            {durationFormat( shamTime || currentDuration)}/{durationFormat(duration % 3600)}
          </div>
        </div>
        <MusicProgress setShamTime={setShamTime}></MusicProgress>
      </MusicContent>
    </Wrap>
  )
}

export default connect(({play})=> play)(MusicBar)