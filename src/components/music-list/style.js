import styled from'styled-components';
import styleVar from '@/styles/style-var';

export const Wrap = styled.div`
  .list-header {
    border-bottom: 1px solid ${styleVar['list_head_line_color']};
    color: @text_color_active;
    .list-name {
      padding-left: 40px;
      user-select: none;
    }
  }
  .list-no {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: @text_color;
  }

  .list-item {
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid  ${styleVar['list_item_line_color']};
    line-height: 50px;
    overflow: hidden;

    &.list-item-no {
      justify-content: center;
      align-items: center;
    }

    &.on {
      color: #fff;

      .list-num {
        font-size: 0;
        background: url('~assets/img/wave.gif') no-repeat center center;
      }
    }

    &:hover {
      .list-name {
        padding-right: 80px;
        .list-menu {
          display: block;
        }
      }
    }
    &:not([class*='list-header']):hover {
      .list-name {
        padding-right: 80px;
        .list-menu {
          display: block;
        }
      }
      .list-time {
        font-size: 0;
        .list-menu-icon-del {
          display: block;
        }
      }
    }

    .list-num {
      display: block;
      width: 30px;
      margin-right: 10px;
      text-align: center;
    }

    .list-name {
      position: relative;
      flex: 1;
      box-sizing: border-box;

      & > span {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      small {
        margin-left: 5px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
      }
      .list-menu {
        display: none;
        position: absolute;
        top: 50%;
        right: 10px;
        height: 40px;
        font-size: 0;
        transform: translateY(-50%);
        cursor: pointer;
        &:hover {
          i.iconfont {
            color: #fff;
          } 
        }
      }
    }

    .list-artist,
    .list-album {
      display: block;
      width: 300px;
      .no-wrap();
      @media (max-width: 1440px) {
        width: 200px;
      }
      @media (max-width: 1200px) {
        width: 150px;
      }
    }

    .list-time {
      display: block;
      width: 60px;
      position: relative;

      .list-menu-icon-del {
        display: none;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }

  @media (max-width: 960px) {
    .list-item .list-name {
      padding-right: 70px;
    }
  }

  @media (max-width: 768px) {
    .list-item {
      .list-name .list-menu {
        display: block;
      }

      .list-artist,
      .list-album {
        width: 20%;
      }
    }
  }

  @media (max-width: 640px) {
    .list-item {
      .list-artist {
        width: 80px;
      }

      .list-album,
      .list-time {
        display: none;
      }
    }
  }
`

export const ListContent = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`