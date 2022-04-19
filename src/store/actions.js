export default {
    aUpdateInfo(context,payload){//异步操作
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                context.commit('updateInfo')
                resolve('返回的信息')
            }, 1000)
        })
       
    }
}