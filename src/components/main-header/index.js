import React, { useEffect } from 'react';
import { HeaderWrap, UserWrap } from './style'
import { connect } from 'react-redux';

const MainHeader = (props) => {
  const { dispatch, userName, nickName, avatar} = props
  useEffect(() => {
    dispatch({
      type: 'user/getUserInfo'
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function changeLoginDialog() {
    dispatch({
      type: 'loginDialog/changeDialog',
      payload: {
        dialogStatus: true
      }
    })
  }
  function logout() {
    dispatch({
      type: 'user/logout'
    })
  }
  return (
    <HeaderWrap>
      <h1 className="header">
        <a href="https://github.com/maomao1996/Vue-mmPlayer" target="blank">
          听听歌 划划水 摸摸鱼
        </a>
      </h1>
      <UserWrap>
        {
          userName 
            ?
          <>
            <div className="user-info">
              <img className="avatar" src={avatar} alt="用户头像"/>
              <span>{nickName}</span>
            </div>
            <dd className="user-btn" onClick={logout}>退出</dd>
          </>
            :
          <dd className="user-btn" onClick={changeLoginDialog}>登录</dd>
        }
      </UserWrap>
    </HeaderWrap>
  )
}

export default connect(({user}) => user)(MainHeader);