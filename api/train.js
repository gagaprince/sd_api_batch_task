import axios from 'axios';
import { TRAIN_PREFIX } from '../config/index';

export const run_batch_task = (options)=>{
    const url = `${TRAIN_PREFIX}/api/run_batch_task`
    return axios.post(url, options);
}

export const run_interrogate_task = (options)=>{
    const url = `${TRAIN_PREFIX}/api/interrogate`
    return axios.post(url, options);
}