import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Wrap, Search, HotSong } from './style'
import MusicList from '@/components/music-list'
import { Input } from '@/styles/style-component.js'

function WangyiSearchList (props) {
  const { hots, dispatch, searchKey, musics } = props;
  const [searchValue, setSearchValue] = useState('')
  // 初始化搜索热点
  useEffect(() => {
    dispatch({
      type: 'hot/getSearchHot'
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // 搜索动作后给搜索框赋值，为的是点击热点时给输入框赋值，和切换的时候keep住值
  useEffect(() => {
    setSearchValue(searchKey)
  }, [searchKey])

  function enterSearch(e) {
    if (e.keyCode === 13) {
      dispatch({
        type: 'wyyMusic/getMyMusicList',
        payload:{
          searchKey: searchValue,
          isSearch: true
        }
      })
    }
  }

  function updateSearchField(e) {
    setSearchValue(e.target.value)
  }
  function onSearch(searchKey) {
    dispatch({
      type: 'wyyMusic/getMyMusicList',
      payload:{
        searchKey,
        isSearch: true
      }
    })
  }
  return (
    <Wrap>
      <Search>
        {
          hots.map((hot, index) => {
            return <HotSong key={index} onClick={() => onSearch(hot.first)}>{hot.first}</HotSong>
          })
        }
        <Input
          className="search-input"
          type="text"
          placeholder="音乐/歌手"
          value={searchValue}
          onChange={updateSearchField}
          onKeyUp={enterSearch}
        />
      </Search>
      <MusicList musics={musics} listType={2}/>
    </Wrap>
  )
}

export default connect(({hot, wyyMusic}) => ({...hot, ...wyyMusic})) (WangyiSearchList);