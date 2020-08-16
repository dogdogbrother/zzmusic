import styled from'styled-components';
import styleVar from '@/styles/style-var';

const COMMON_STYLE = `
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
export const Mask = styled.div`
  ${COMMON_STYLE}
  z-index: -2;
  background-color: ${styleVar['dialog_bg_color']};
`

export const BgImg = styled.div`
  ${COMMON_STYLE}
  z-index: -2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: blur(12px);
  opacity: 0.7;
  transition: all 0.8s;
`

