import React, { useState, useRef } from 'react';
import { Wrap, ProgressBar, ProgressInner, ProgressDot, ProgressOuter } from './style';
import { connect } from 'react-redux';

// 10 就是滑道轨块的
const dotWidth = 10

const MusicProgress = (props) => {
  const [moveStatus, setMoveStatus] = useState(false)
  const [startX, setStart] = useState(0)
  const [left, setLeft] = useState(0)

  const proressRef = useRef();
  const percentProgressRef = useRef();
  const proressInner = useRef();

  // 移动滑块
  function moveSilde(offsetWidth) {
    proressInner.current.style.width = `${offsetWidth}px`
  }

  /**
   * @description 计算百分比的逻辑是。当我们滑动中或是点击进度条改变后，计算颜色变深的进度条元素和外层的元素对比计算。
   * @param {boolean} isEnd 计算百分比的作用有2个，一个是计算歌曲当前时间，一个是改变歌曲播放时长。
   *                        但是滑动不松手就只会改变时间，只有点击和滑动结束才会改变歌曲，所用需要个变量来判断是否是结束操作。
   */
  function calculatePercent(isEnd = false) {
    const lineWidth = proressRef.current.clientWidth - dotWidth
    const percent = proressInner.current.clientWidth / lineWidth
  }
  /**
   * @description 点击进度条的目的就是改变滑道轨块的位置
   */
  function getBoundingClientRect(e) {
    // 拿到的是这个进度条的位置信息，例如width、height是他的宽高，left是元素左侧距离左侧屏幕的宽度，right是元素右侧距离左侧屏幕的距离等。
    let rect = proressRef.current.getBoundingClientRect()
    // offsetWidth就是 滑块真正应该在的位置，min() 的作用就是不让滑块跑出左侧外面。
    let offsetWidth = Math.min(
      // 进度条元素的真正宽度（元素宽度-轨块宽度）
      proressRef.current.clientWidth - dotWidth,
      // e.clientX - rect.left 就是你鼠标在滑轨上对应的 x 值，是不会小于0的，这里的max算是个保险措施吧。
      Math.max(0, e.clientX - rect.left)
    )
    moveSilde(offsetWidth);
    calculatePercent(true);
  }

  function barMove(e) {
    // console.log(e.clientX || e.touches[0].pageX);
    if (!moveStatus) return
    e.preventDefault()
    // endX 是鼠标距离最左侧的x值
    let endX = e.clientX || e.touches[0].pageX
    let dist = endX - startX
    let offsetWidth = Math.min(
      proressRef.current.clientWidth - dotWidth,
      Math.max(0, left + dist)
    )
    moveSilde(offsetWidth)
    calculatePercent();
  }
  function barUp() {
    // console.log('这就是AAAAAAAAA');
  }
  function barDown(e) {
    e.preventDefault()
    setMoveStatus(true)
    setStart(e.clientX || e.touches[0].pageX)
    setLeft(proressInner.current.clientWidth)
  }
  return <>
    <Wrap 
      ref={proressRef} 
      onClick={getBoundingClientRect} 
      onMouseMove={barMove}
      onMouseUp={barUp}
    >
      <ProgressBar />
      <ProgressOuter ref={percentProgressRef}></ProgressOuter>
      {/* inner 就是已经播放的深白色的进度条 */}
      <ProgressInner ref={proressInner} className="proressInner">
        <ProgressDot onMouseDown={barDown} onTouchStart={barDown}></ProgressDot>
      </ProgressInner>
    </Wrap>
  </>
}

export default connect(({toast})=> toast)(MusicProgress)