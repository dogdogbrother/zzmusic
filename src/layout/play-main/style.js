import styled from'styled-components';
import styleVar from '@/styles/style-var';

export const Wrap = styled.div`
  height: 100%;
  width: 100%;
  padding: 75px 25px 25px 25px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 1750px;
  margin: 0 auto;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
`

export const ContentLeft = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
`

export const CoontentRight = styled.div`
  position: relative;
  width: 310px;
  margin-left: 10px;
  @media (max-width: 960px) {
    display: none;
  }
`

export const MusicBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding-bottom: 15px;
  color: #fff;
  @media (max-width: 520px) {
    position: relative;
    flex-direction: column;
  }
`

export const MusicBarBtn = styled.div`
  
`



