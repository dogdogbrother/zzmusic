import React from 'react';
import { Wrap, Search, HotSong } from './style'
import { Input } from '@/styles/style-component.js'

function WangyiSearchList (props) {
  return (
    <Wrap>
      <Search>
        <HotSong>想念她</HotSong>
        <HotSong>也许还能再见</HotSong>
        <HotSong>夜的第七章</HotSong>
        <HotSong>水星记</HotSong>
        <HotSong>天空之城</HotSong>
        <Input
          className="search-input"
          type="text"
          placeholder="音乐/歌手"
        />
      </Search>
    </Wrap>
  )
}

export default WangyiSearchList;