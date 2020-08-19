import React from 'react';
import {Provider} from 'react-redux';

import { GlobalStyle } from  './style';
import { IconStyle } from './assets/fonts/iconfont';

import './config/http';

import MainHeader from '@/components/main-header'
import store from '@/config/dva';
import MusicCoverBg from '@/base/music-cover-bg'
import Dialog from '@/components/dialog/login-dialog'
import Toast from '@/components/toast'
import PlayMain from '@/layout/play-main'
import { BrowserRouter  } from 'react-router-dom';
import { Route, Switch } from "react-router";
import PlayList from '@/pages/play-list';
import WangyiSearchList from '@/pages/wyy-search';
import MySearch from '@/pages/my-search'

function App() {
  return (
    <Provider store={store}>
      {/* 头部 */}
      <MainHeader/> 
      <IconStyle />
      {/* 全局样式 */}
      <GlobalStyle />
      <BrowserRouter >
        {/* 内容主区域，不单独写个组件的话app.js内容就太多了 */}
        <PlayMain>
          {/* 为了路由比较好查找，我就写在这里了 */}
          <Switch>
            <Route exact path="/" component={PlayList}/>
            <Route exact path="/wyy-search" component={WangyiSearchList}/>
            <Route exact path="/my-search" component={MySearch}/>
          </Switch>
        </PlayMain>
      </BrowserRouter>
      <MusicCoverBg />
      {/* 注册登陆的弹出框 */}
      <Dialog />
      {/* 错误提示 */}
      <Toast />
    </Provider>
  );
}

export default App;
