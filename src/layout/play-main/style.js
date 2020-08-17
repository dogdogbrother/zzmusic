import styled from'styled-components';

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



