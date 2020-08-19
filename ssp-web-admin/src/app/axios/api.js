import { get,post,POST,GET } from './http';

const login = params => POST('/api/login',params); //登录
const users = params => get('/api/userData',params); //账号管理页面

const todayNum = params => get('/api/todayNum',params); //今日上报和处理数
const allReports = params => get('/api/allReports',params); //所有上报|最新上报|最新处理|已处理
const photoDetail = params => get('/api/reportDetails',params); //详情页
// const imgUpdata = params => post('/api/file/upload', params); //上传图片
// const formUpdata = params => post('/api/report',params); //上传整个表单

const imgUpdata = params => POST('/api/file/upload',params);//上传图片
const formUpdata = params => POST('/api/report',params); //上传整个表单
export {
    login,
    users,
    todayNum,
    allReports,
    photoDetail,
    imgUpdata,
    formUpdata
}