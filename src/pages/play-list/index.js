import React from 'react';
import { Wrap } from './style'
import { connect } from 'react-redux'
import MusicList from '@/components/music-list'

function Play (props) {
  const { musics } = props
  return <Wrap>
    <MusicList listType={1} musics={musics}/>
  </Wrap>
}


export default connect(({presentPlay}) => presentPlay) (Play);