import React from 'react';
import { Redirect } from "react-router-dom";
import Play from '../pages/play/index';

export default [
  {
    path: "/",
    component: Play,
    // routes: [
    //   {
    //     path: "/",
    //     exact: true,
    //     render: () => (
    //       <Redirect to={"/recommend"}/>
    //     )
    //   },
    //   {
    //     path: "/recommend",
    //     component: Recommend
    //   },
    // ]
  }
]