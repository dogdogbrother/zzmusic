/**
 * @description 存放网易云搜索得来的歌曲，以及搜索歌曲相关的HTTP
 * @author senlin
 */
import axios from 'axios'
import formatSongs from '@/utils/song'
import { LIMIT } from '@/config/constant'

const WY_MUSIC_LIST_URL = 'wyapi/search?'

const musicModel = {
  namespace: 'wyyMusic',
  state: {
    searchKey: '',
    musics: [],
    offset: 0,
    limit: LIMIT, // 这个有设置为常量的必要，因为计算和其他页面是数据依赖联动的
  },
  reducers: {
    changeMusics: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    *getMyMusicList({payload}, {call, put, select}) {
      // 假如 isSearch 是 true，就代表是非滚动搜索，就要重置为原始内容
      if (payload && payload.isSearch) {
        yield put({
          type: 'changeMusics',
          payload: {
            musics: [],
            offset: 0,
            searchKey: ''
          }
        })
      }
      const { offset, searchKey, musics } = yield select(state => state.wyyMusic)
      const { data } = yield call(axios.get, WY_MUSIC_LIST_URL, {
        params: {
          offset: offset,
          limit: LIMIT,
          keywords: (payload && payload.searchKey) || searchKey
        }
      })
      if (data && data.result && data.result.songs && data.result.songs.length) {
        yield put({
          type: 'changeMusics',
          payload: {
            musics: [...musics, ...formatSongs(data.result.songs)],
            offset: offset + LIMIT,
            searchKey: (payload && payload.searchKey) || searchKey
          }
        })
      }
    },
  }
}

export default musicModel