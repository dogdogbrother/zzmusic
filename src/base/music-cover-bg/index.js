import React from 'react';
import { BgImg, Mask } from './style'
import { connect } from 'react-redux';

const MusicCoverBg = (props) => {
  return <>
    <BgImg style={{backgroundImage: `url(${require('../../assets/background/bg3.gif')})`}} />
    <Mask />
  </>
}

export default connect(({toast})=> toast)(MusicCoverBg)