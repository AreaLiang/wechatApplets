import { get , post} from './http'

export const test = (p:object) => get('wechat', p);
export const getArticleApi = (p:object) => post('article', p);//获取主页文章信息
export const checkInfoApi = (p:object) => post('checkInfo', p);//验证用户信息
export const getVedioApi = (p:object) => post('vedio', p);//获取视频页面
export const searchApi = (p:object) => post('search', p);//获取搜索内容
export const getHotListApi = (p:object) => post('getHotList', p);//获取热门列表