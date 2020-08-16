import styled from'styled-components';
import styleVar from '@/styles/style-var';

export const MenuBtnWrap = styled.div`
  width: 100%;
  height: 60px;
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  a {
    display: inline-block;
    height: 40px;
    box-sizing: border-box;
    margin-right: 8px;
    padding: 0 23px;
    border: 1px solid ${styleVar['btn_color']};
    color: ${styleVar['btn_color']};
    border-radius: 2px;
    font-size: 14px;
    line-height: 40px;
    overflow: hidden;
    cursor: pointer;
    &:nth-last-of-type(1) {
      margin: 0;
    }
    &:hover,
    &.active {
      border-color: ${styleVar['btn_color_active']};
      color:${styleVar['btn_color_active']};
    }
  }
  @media (min-width: 960px) {
    a.show-960 {
      display: none;
    }
  }
  @media (max-width: 960px) {
    a.show-960 {
      display: inline-block;
    }
  }
  @media (max-width: 768px) {
    height: 50px;
    a {
      height: 35px;
      padding: 0 10px;
      margin-right: 6px;
      line-height: 35px;
    }
  }
`
/**
 * @description
 */

