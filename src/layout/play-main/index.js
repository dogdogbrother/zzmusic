/**
 * @description 本来只是想用于布局的，但是播放的video无处安放，只好在这里写逻辑了
 */
import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrap, Content, ContentLeft, CoontentRight } from './style'
import MenuBtn from '@/base/menu-btn'
import MusicBar from '@/base/music-bar'

const PlayMain = (props) => {
  const playRef = useRef();
  const { children: renderRouters, dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'play/assignAudioEle',
      payload: {
        audioEle: playRef && playRef.current
      }
    })
  }, [dispatch, playRef])
  return <Wrap >
    <audio ref={playRef} />
    <Content className="height-80">
      <ContentLeft>
        <MenuBtn />
        <div className="height-60">{renderRouters}</div>
      </ContentLeft>
      <CoontentRight>12324545</CoontentRight>
    </Content>
    <MusicBar />
  </Wrap>
}

export default connect(({play})=> play)(PlayMain)