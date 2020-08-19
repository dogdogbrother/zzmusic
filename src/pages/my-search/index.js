import React, { useState } from 'react';
import { Wrap, Search } from './style'
import { connect } from 'react-redux'
import MusicList from '@/components/music-list'
import { Input } from '@/styles/style-component.js'

function MySearch (props) {
  const [searchValue, setSearchValue] = useState('')
  const { musics } = props
  function updateSearchField(e) {
    
  }
  function enterSearch(e) {
    if (e.keyCode === 13) {

    }
  }
  return <Wrap>
    <Search>
      <Input
        className="search-input"
        type="text"
        placeholder="音乐/歌手"
        value={searchValue}
        onChange={updateSearchField}
        onKeyUp={enterSearch}
      />
    </Search>
    <MusicList listType={3} musics={musics}/>
  </Wrap>
}


export default connect(({myPlay}) => myPlay) (MySearch);