import styled from'styled-components';
import styleVar from '@/styles/style-var';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .search-input{
    flex: 1;
    height: 40px;
    box-sizing: border-box;
    padding: 0 15px;
    border: 1px solid ${styleVar["btn_color"]};
    outline: 0;
    background: transparent;
    color: ${styleVar["text_color_active"]};
    font-size: ${styleVar["font_size_medium"]};
    box-shadow: 0 0 1px 0 #fff inset;
    &::placeholder {
      color: ${styleVar["text_color"]};
    }
  }
`

export const Search = styled.div`
  display: flex;
  height: 40px;
  padding: 10px 15px;
  overflow: hidden;
  background: ${styleVar['search_bg_coloe']};
`

export const HotSong = styled.span`
  line-height: 40px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: ${styleVar["text_color_active"]};
  }
  @media (max-width: 640px) {
    display: none;
  }
`