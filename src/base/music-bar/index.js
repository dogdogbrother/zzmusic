import React from 'react';
import { connect } from 'react-redux';
import { Wrap, MusicBtnWrap, ControlPlay } from './style'

const MusicBar = (props) => {
  const { playing, dispatch } = props;
  function onControlPlay() {
    console.log(playing);
    dispatch({
      type: 'play/controlPlay',
      payload: {
        playing: !playing
      }
    })
  }
  return(
    <Wrap>
      <MusicBtnWrap>
        <i className="pointer iconfont" title="上一曲 Ctrl + Left">&#xe965;</i>
        <ControlPlay className="control-play pointer" title="播放暂停 Ctrl + Space" onClick={onControlPlay}>
          {
            playing ? <i className="iconfont">&#xe956;</i> : <i className="iconfont">&#xe95a;</i>
          }
        </ControlPlay>
        {/*  暂停 */}
        <i className="pointer iconfont" title="下一曲 Ctrl + Right">&#xe964;</i>
      </MusicBtnWrap>
    </Wrap>
  )
}

export default connect(({play})=> play)(MusicBar)