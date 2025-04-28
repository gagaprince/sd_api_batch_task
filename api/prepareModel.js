import axios from 'axios';
import { TRAIN_PREFIX } from '../config/index';

export const prepare_model = (options)=>{
    const url = `${TRAIN_PREFIX}/api/prepareModelDir`
    return axios.post(url, options);
}

