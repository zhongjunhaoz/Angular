import { get } from './http'


const songSheet = params => get('/personalized',params); //推荐歌单
const topMV = params => get('/top/mv',params); //topMV
const newSong = params => get('/personalized/newsong',params); //最新音乐

const rank = params => get('/top/list',params); //排行榜
export {
    songSheet,
    topMV,
    newSong,
    rank
}