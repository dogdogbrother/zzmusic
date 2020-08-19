import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrap, ListContent } from './style'
import { durationFormat } from '@/utils/util.js'
/**
 * @description 我的播放，网易云搜索，我的搜索都会用到这个组件(我的喜欢后面写)。其中我的播放是不需要加载的，而2个搜索通过把dispatch名字传进来就行了。
 */
const MusicList = (props) => {
  const [scrollTop, setScrollTop] = useState(0) // 记录滚动位置，用于下拉加载
  const [lockUp, setLocUp] = useState(true) // 滚动锁定，为了防止多余加载
  const { musics, dispatch, listType } = props;
  // 这个 useEffect 是监听和生命周期的混合来判断是否下拉加载，稍稍有点绕
  useEffect(() => {
    // tudo
    if (musics.length%30) {
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
        type: 'wyyMusic/getMyMusicList',
      })
    }
  } 
  const onplay = (music) => {
    dispatch({
      type: 'play/requestMusic',
      payload: {
        music,
      }
    })
  }
  return (
    <Wrap className='height-50'>
      <div className="list-item list-header">
        <span className="list-name">歌曲</span>
        <span className="list-artist">歌手</span>
        {
          listType === 1 ? <span className="list-time">时长</span> : <span className="list-album">专辑</span>
        }
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
                {
                  listType === 1 ? 
                  <span className="list-time">
                    {durationFormat(music.duration % 3600)}
                    <i className="iconfont list-menu-icon-del" style={{fontSize: '40px'}}>&#xe901;</i>
                  </span> 
                  :
                  <span className="list-album">{music.album}</span>
                }
                
              </div>
            )
          })
        }
      </ListContent>
    </Wrap>
  )
}

export default connect() (MusicList)