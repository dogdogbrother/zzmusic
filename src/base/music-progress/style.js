import styled from'styled-components';
import styleVar from '@/styles/style-var';

export const Wrap = styled.div`
  position: relative;
  padding: 5px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
`

export const ProgressBar = styled.div`
  height: 2px;
  width: 100%;
  background: ${styleVar['bar_color']};
`

export const ProgressOuter = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  display: inline-block;
  width: 0;
  height: 2px;
  margin-top: -1px;
  background: rgba(255, 255, 255, 0.2);
`

export const ProgressInner = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  display: inline-block;
  width: 0;
  height: 2px;
  margin-top: -1px;
  background: ${styleVar['line_color']};
`

export const ProgressDot = styled.div`
  position: absolute;
  top: 50%;
  right: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${styleVar['dot_color']};
  transform: translateY(-50%);
`