import styled from'styled-components';
import styleVar from '@/styles/style-var';

export const DialogWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1996;
  background-color: ${styleVar['dialog_bg_color']};
  user-select: none;
  .wrap{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1996;
    display: flex;
  }
`
export const DialogContent = styled.div`
  width: 420px;
  border-radius: 5px;
  background: ${styleVar['dialog_content_bg_color']};
  @media (max-width: 767px) {
    width: 270px;
    border-radius: 10px;
    text-align: center;
  }
`
export const DialogHeader = styled.div`
  padding: 15px;
  padding-bottom: 0;
  font-size: ${styleVar['font_size_large']};
  color: ${styleVar['text_color_active']};
`
export const DialogMain = styled.div`
  padding: 20px 15px;
  line-height: 22px;
  font-size: ${styleVar['font_size_medium']};
  color: ${styleVar['dialog_text_color']};
`

export const Dialogbtns = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px 10px;
  text-align: center;
  color: ${styleVar['dialog_text_color']};
  @media (min-width: 768px) {
    justify-content: flex-end;
    div {
      display: block;
      padding: 8px 15px;
      border-radius: 3px;
      border: 1px solid ${styleVar['btn_color']};
      font-size: ${styleVar['font_size_medium']};
      cursor: pointer;
      &:not(:nth-of-type(1)) {
        margin-left: 10px;
      }
      &.mm-btn-confirm {
        border-style: ${styleVar['btn_color_active']};
      }
      &:hover {
        color: ${styleVar['text_color_active']};
        border: 1px solid ${styleVar['btn_color_active']};
      }
    }
  }
  @media (max-width: 767px) {
    & {
      padding: 0;
      justify-content: center;
      div {
        flex: 1;
        line-height: 22px;
        padding: 10px 0;
        border-top: 1px solid ${styleVar['dialog_line_color']};
        font-size: ${styleVar['font_size_large']};
        &:not(:nth-of-type(1)) {
          border-left: 1px solid ${styleVar['dialog_line_color']};
        }
      }
    }
  }
`