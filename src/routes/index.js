import React from 'react';
import { Redirect } from "react-router-dom";
import PlayList from '@/pages/play-list';
import WangyiSearchList from '@/pages/wangyi-search-list';
export default [
  {
    path: "/",
    component: PlayList,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/play-list"}/>
        )
      },
      {
        path: "/play-list",
        component: PlayList
      },
      {
        path: "/wangyi-search-list",
        component: WangyiSearchList
      },
    ]
  },
]