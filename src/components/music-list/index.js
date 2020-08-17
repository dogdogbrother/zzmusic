import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrap, ListContent } from './style'

const MusicList = (props) => {
  const [scrollTop, setScrollTop] = useState(0) // 记录滚动位置，用于下拉加载
  const [lockUp, setLocUp] = useState(true) // 滚动锁定，为了防止多余加载
  const { musics, dispatch } = props;

  // 这个 useEffect 是监听和生命周期的混合来判断是否下拉加载，稍稍有点绕
  useEffect(() => {
    // 假如 歌曲列表取余有值代表没有更多了
    if (musics%30) {
      setLocUp(true)
    } else {
      setLocUp(false)
    }
  }, [musics])
  function listScroll(e) {
    setScrollTop(e.target.scrollTop)
    if (lockUp) return
    const { scrollHeight, offsetHeight } = e.target
    if (scrollTop + offsetHeight >= scrollHeight - 50) {
      setLocUp(true)
      dispatch({
        type: 'music/getMyMusicList',
      })
    }
  } 
  const onplay = (music) => {
    dispatch({
      type: 'play/requestMusic',
      payload: {
        music
      }
    })
  }
  return (
    <Wrap className='height-50'>
      <div className="list-item list-header">
        <span className="list-name">歌曲</span>
        <span className="list-artist">歌手</span>
        {/* <span class="list-time">时长</span> */}
        <span className="list-album">专辑</span>
      </div>
      {/* 存放歌曲内容的list */}
      <ListContent className="height-60" onScroll={($event) => listScroll($event)}>
        {
          musics.map((music, index) => {
            return (
              <div className="list-item" key={music.id}>
                <span className="list-num">{index + 1}</span>
                <div className="list-name">
                  <span>{music.name}</span>
                  <div className="list-menu">
                    {/* 我这里需要个icon */}
                    <i className="hover iconfont" style={{fontSize: 40}} onClick={() => onplay(music)}>&#xe95d;</i>
                  </div>
                </div>
                <span className="list-artist">{music.singer}</span>
                {/* 这里根据条件有播放时长或是专辑，这里因为先写搜索，就先这样 */}
                <span className="list-album">{music.album}</span>
              </div>
            )
          })
        }
      </ListContent>
    </Wrap>
  )
}

export default connect(({music})=> music)(MusicList)