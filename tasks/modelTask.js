import { prepare_model } from '../api';
export const prepareModelWithList = async (lora_name_list)=>{
    const base_path = 'H:\\baidu\\fluxlora临时文件\\';
    const photo_path = 'G:\\webui\\sd-webui-aki\\ComfyUI-aki-v1.4\\output\\';
    const model_path = 'G:\\webui\\sd-webui-aki\\sd-webui-aki-v4.5\\models\\Lora\\webui_models_lora\\flux\\self\\';
    for(let i=0;i<lora_name_list.length;i++){
        const model_name = lora_name_list[i];
        await prepare_model({
            model_name,base_path,photo_path,model_path
        });
    }
}
export const prepareMergeModelWithList = async (lora_name_list)=>{
    const base_path = 'H:\\baidu\\fluxlora临时文件\\';
    const photo_path = 'G:\\webui\\sd-webui-aki\\ComfyUI-aki-v1.4\\output\\';
    const model_path = 'G:\\webui\\sd-webui-aki\\sd-webui-aki-v4.5\\models\\Lora\\webui_models_lora\\flux\\merge\\';
    for(let i=0;i<lora_name_list.length;i++){
        const model_name = lora_name_list[i];
        await prepare_model({
            model_name,base_path,photo_path,model_path
        });
    }
}