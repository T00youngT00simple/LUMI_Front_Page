import request from '../utils/request'
import { baseUrl } from '../config/env'


export function getImageInfoList(){
    return request({
        url: `${baseUrl}/image/list/`,
        method: "get",
    })
}

