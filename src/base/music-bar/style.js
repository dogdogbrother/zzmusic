import styled from'styled-components';
// import styleVar from '@/styles/style-var';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding-bottom: 15px;
  color: #fff;
  &.disable {
    pointer-events: none;
    opacity: 0.6;
  }
`

export const MusicBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  i {
    font-size: 36px;
  }
`

export const ControlPlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  i {
    font-size: 24px;
  }
`