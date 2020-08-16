import React from 'react';
import { connect } from 'react-redux';
import { Wrap, Content, ContentLeft, CoontentRight, MusicBar, MusicBarBtn } from './style'
import MenuBtn from '@/base/menu-btn'
const PlayMain = (props) => {
  const { children: renderRouters } = props;
  return <Wrap >
    <Content className="height-80">
      <ContentLeft>
        <MenuBtn />
        <div className="height-60">{renderRouters}</div>
      </ContentLeft>
      <CoontentRight>12324545</CoontentRight>
    </Content>
    <MusicBar>
      <MusicBarBtn></MusicBarBtn>
    </MusicBar>
  </Wrap>
}

export default connect(({toast})=> toast)(PlayMain)