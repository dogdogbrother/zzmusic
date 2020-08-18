import styled from'styled-components';
import styleVar from '@/styles/style-var';

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

export const MusicContent = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  padding-left: 40px;
  font-size: ${styleVar['font_size_small']};
  color: ${styleVar['text_color_active']};
  .music-bar-info {
    height: 15px;
    padding-right: 80px;
    line-height: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .music-bar-time {
    position: absolute;
    top: 0;
    right: 5px;
  }
  @media (max-width: 768px) {
    .music-bar-info span,
    .music-bar-volume .mmProgress {
      display: none;
    }
  }
  @media (max-width: 520px) {
    padding-left: 0;
    order: 1;
  }
`