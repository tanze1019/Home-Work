import Axios from "../utils"
import qs from "qs"


export let getBanner =()=>{
    return Axios({
        url:"http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f",
        method:"get",
    })
}
export let getClass =()=>{
    return Axios({
        url:"http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f",
        method:"get",
    })
}
export let getReo=()=>{
    return Axios({
        url:"http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f",
        method:"get",
    })
}
export let getList=()=>{
    return Axios({
        url:"http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f",
        method:"get",
    })
}