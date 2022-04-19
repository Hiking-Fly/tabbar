import axios from 'axios'


export function request(config){
    const instance  = axios.create({
        baseURL:"http://123.207.32.32:8000",
        timeout:2000
    })
    return instance(config)
}
// export function request(config,success,failure){
//     const instance  = axios.create({
//         baseURL:"http://123.207.32.32:8000",
//         timeout:2000
//     })
//     instance(config)
//     .then(
//         res => {
//             success(res);
//         }
//     )
//     .catch(
//         err =>{
//             failure(err)
//         }
//     )
// }