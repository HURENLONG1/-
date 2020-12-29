module.exports = {
    devServer: {
        port: Number(process.env.VUE_APP_PORT),
        host: "localhost",
        https: false,
        open: true, //启动服务时自动打开浏览器访问
        // proxy:{
        //     [process.env.VUE_APP_BASE_API]:{
        //         //http://m.hao123.com/hao123_api/page/getRootData?vit=h123&from=3w123&sample=1
        //         target:process.env.VUE_APP_SERVICE_URL,
        //         changeOrigin:true,
        //         pathRewrite:{
        //             ['^'+process.env.VUE_APP_BASE_API]:'/'
        //         }
        //     }
        // }
    },
    lintOnSave: false, //关闭语法检测格式
    productionSourceMap: false, //打包是不会生成.map文件。加快打包速度
}