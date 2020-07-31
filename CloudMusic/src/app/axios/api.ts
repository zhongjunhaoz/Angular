import { get } from './http'


const songSheet = params => get('/personalized',params); //推荐歌单
const topMV = params => get('/top/mv',params); //topMV
const newSong = params => get('/personalized/newsong',params); //最新音乐

const rank = params => get('/top/list',params); //排行榜

const searchSuggest = params => get('/search/suggest',params); //搜索建议
const search = params => get('/search',params); //搜索
const hotSong = params => get('/search/hot',params); //热门搜索
export {
    songSheet,
    topMV,
    newSong,
    rank,
    searchSuggest,
    search,
    hotSong
}