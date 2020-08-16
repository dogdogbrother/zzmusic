import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {TsastWrap} from './style'
import { connect } from 'react-redux';

const Toast = (props) => {
  const { toastStatus, toastText } = props;
  return <>
      {
        toastStatus &&
        <QueueAnim type='scaleX'>
          <TsastWrap key="a">
            {toastText}
          </TsastWrap>
        </QueueAnim> 
      }
  </>
}

export default connect(({toast})=> toast)(Toast)