import styled from'styled-components';
import styleVar from '@/styles/style-var';
export const HeaderWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  @media (max-width: 768px) {
    background: ${styleVar["header_bg_color"]};
  }
  .header {
    text-align: center;
    line-height: 60px;
    color: ${styleVar["text_color_active"]};
    font-size: ${styleVar["font_size_large"]};
    @media (max-width: 768px) {
      padding-left: 15px;
      text-align: left;
    }
  }
`
export const UserWrap = styled.dl`
  position: absolute;
  top: 50%;
  right: 15px;
  line-height: 30px;
  text-align: right;
  transform: translateY(-50%);
  .user-info {
    float: left;
    margin-right: 15px;
    cursor: pointer;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 90px;
    vertical-align: middle;
  }
  span {
    margin-left: 10px;
    color: ${styleVar["text_color_active"]};
  }
  .user-btn {
    float: left;
    cursor: pointer;
    &:hover {
      color: ${styleVar["text_color_active"]};
    }
  }
  @media (max-width: 768px) {
    .user-info {
      margin-right: 10px;
      span {
        display: none;
      }
    }
  }
`