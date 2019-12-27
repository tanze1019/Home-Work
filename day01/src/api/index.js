import Axios from "../utils/request"
import qs from "qs"

export let getList =(data)=>{
    return Axios({
        url:"https://restapi.amap.com/v3/place/text",
        method:"get",
        params:data
    })
}


