import styled from'styled-components';
import styleVar from '@/styles/style-var';

export const Input = styled.input`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 15px;
    margin-bottom: 10px;
    border: 1px solid ${styleVar["btn_color"]};
    outline: 0;
    background: transparent;
    color: ${styleVar["text_color_active"]};
    font-size: ${styleVar["font_size_medium"]};
    box-shadow: 0 0 1px 0 #fff inset;
    &::placeholder {
      color: ${styleVar["text_color"]};
    }
`