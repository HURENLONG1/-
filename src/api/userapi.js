import request from '../utils/request';
import qs from 'qs'

export default {
    //获取首页轮播图的图片
    getBanner(page, num) {

        // return axios({
        //     url: 'http://47.103.194.4/taobao/php/goods.php',
        //     method: 'post',
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     data: {
        //         page,
        //         num
        //     }
        // })

        return request.post('/php/goods.php', qs.stringify({
            page,
            num
        }))
    },

    //根据哈希值跳转到详情页
    todetails(hash){
        JSON.parse(hash)
        return request.post('/php/detalis.php',qs.stringify({
            hash
        }))
    },

    //将详情页的商品加入购物车
    putIn(
        goods_name, 
        goods_id, 
        goods_price, 
        goods_small_logo, 
        cat_one_id, 
        cart_number){
        return request.post('/php/joinshopcar.php', qs.stringify({
            goods_name, 
            goods_id, 
            goods_price, 
            goods_small_logo, 
            cat_one_id, 
            cart_number 
        }))
    },

    //登录
    Login(inp1, inp2){
        console.log(qs.stringify({inp1, inp2}));
        return request.post('/php/login.php', qs.stringify({
            inp1,
            inp2
        }))
    }
}