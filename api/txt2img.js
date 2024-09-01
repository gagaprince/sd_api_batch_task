import axios from 'axios';
import { SD_API_PREFIX } from '../config/index';

export const post_txt2img = (options)=>{
    const url = `${SD_API_PREFIX}/sdapi/v1/txt2img`
    return axios.post(url, options);
}