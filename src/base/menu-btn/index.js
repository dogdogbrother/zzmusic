import React from 'react';
import { connect } from 'react-redux';
import { MenuBtnWrap } from './style'
import { NavLink } from 'react-router-dom';

const MenuBtn = (props) => {
  // const { toastStatus, toastText } = props;
  return <MenuBtnWrap>
    <NavLink exact to="/" activeClassName="active">正在播放</NavLink>
    <NavLink exact to="/wangyi-search-list" activeClassName="active">网易云搜索</NavLink>
    <NavLink exact to="/b" activeClassName="active">我的搜索</NavLink>
    <NavLink exact to="/c" activeClassName="active">我的喜欢</NavLink>
    <a className="show-960" href='###'>歌词</a>
    <NavLink exact to="/d" activeClassName="active">广场</NavLink>
  </MenuBtnWrap>
}

export default connect(({toast})=> toast)(MenuBtn)