import { post_txt2img } from '../api'
import { MOV2ANIME_PREVIEW_DIR } from '../config';
import { saveBase64Image, img2Base64 } from "../utils";

const generateTask = async (prompt, movPath, movFilePath='', width=720, height=1280)=>{
    try{

        const data = await post_txt2img({
            prompt,
            "negative_prompt": "nsfw,verybadimagenegative_v1.3,ng_deepnegative_v1_75t,(ugly face:0.8),cross-eyed,sketches,(worst quality:2),(low quality:2),(normal quality:2),lowres,normal quality,((monochrome)),((grayscale)),skin spots,acnes,skin blemishes,bad anatomy,DeepNegative,facing away,tilted head,{Multiple people},lowres,bad anatomy,bad hands,text,error,missing fingers,extra digit,fewer digits,cropped,worstquality,low quality,normal quality,jpegartifacts,signature,watermark,username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,missing fingers,missing arms,missing legs,extra digit,extra arms,extra leg,extra foot,",
            "seed": -1,
            "steps": 6,
            "cfg_scale": 2,
            width,
            height,
            "batch_size":1,
            "alwayson_scripts": {
                "controlnet":{
                    "args": [
                        {
                            "enabled": true, 
                            "control_mode": 0,  
                            "model": "control_v11f1e_sd15_tile [a371b31b]", 
                            "module": "tile_colorfix",
                            "weight": 0.4, 
                            "resize_mode": "Crop and Resize",
                            "threshold_a": 8,
                            "threshold_b": 1, 
                            "guidance_start": 0, 
                            "guidance_end": 1, 
                            "pixel_perfect": true,
                            "processor_res": 512, 
                            "save_detected_map": false,
                            "control_mode":"Balanced",
                            // "input_image": base64Img, 
                        },
                        {
                            "enabled": true, 
                            "control_mode": 0,  
                            "model": "control_v11p_sd15_lineart [43d4be0d]", 
                            "module": "lineart_realistic",
                            "weight": 0.7, 
                            "resize_mode": "Crop and Resize",
                            "guidance_start": 0, 
                            "guidance_end": 1, 
                            "pixel_perfect": true,
                            "processor_res": 512, 
                            "save_detected_map": false,
                            "control_mode":"Balanced",
                            // "input_image": base64Img, 
                        }
                    ]
                },
                // mov2anime插件参数顺序
                // [enabled,init_mov,init_mov_dir,rembg_mode,fps_scale_child,fps_scale_parent,invoke_tagger,invoke_tagger_val,
                // common_invoke_tagger,max_frames,transform_mode,min_gap,max_gap,max_delta,
                // des_enabled,des_width,des_height,upscaler_name,]
                "movie2anime":{
                    "args":[
                        true,
                        movFilePath, //单个影片路径
                        movPath, //批量路径
                        '原视频背景', //rembg_mode 去背景模式
                        1, // fps_scale_child 跳帧参数
                        1, // fps_scale_parent  跳帧参数
                        true, // invoke_tagger 是否启用反推提示词
                        0.35, // invoke_tagger_val 反推提示词阈值
                        prompt, 
                        // common_invoke_tagger 反推提示词前的公共提示词
                        -1, // max_frames // 最大转换帧数 -1是全转
                        '关键帧渲染', //transform_mode 转换方式
                        4,  // min_gap 最小关键帧间隔
                        6, // max_gap 最大关键帧间隔
                        35, //max_delta 阈值
                        true, // des_enabled 启用放缩至指定宽高
                        1080, //des_width 目标宽度
                        1920, // des_height 目标高度
                        'R-ESRGAN 4x+', // upscaler_name 放大算法
                    ]
                }
            }
        });
        
        const ret = data.data;
        console.log(ret.info);
        const images = ret.images;
        for(let i=0; i<images.length; i++){
            await saveBase64Image(`${MOV2ANIME_PREVIEW_DIR}/${Date.now()}-${i}-${width}-${height}.png`, images[i]);
        }
    }catch(e){
        console.error(e);
    }
}

const generatePreviewTask = async (base64Img, width=720, height=1280)=>{
    try{

        const data = await post_txt2img({
            prompt: 'masterpiece,best quality,ultra-detailed,illustration,beautiful art,artistic,realistic,8k,wallpaper,beautiful,1girl,<lora:lcmv15:0.5>,<lora:guli_v1:0.8>, guli,',
            "negative_prompt": "nsfw,verybadimagenegative_v1.3,ng_deepnegative_v1_75t,(ugly face:0.8),cross-eyed,sketches,(worst quality:2),(low quality:2),(normal quality:2),lowres,normal quality,((monochrome)),((grayscale)),skin spots,acnes,skin blemishes,bad anatomy,DeepNegative,facing away,tilted head,{Multiple people},lowres,bad anatomy,bad hands,text,error,missing fingers,extra digit,fewer digits,cropped,worstquality,low quality,normal quality,jpegartifacts,signature,watermark,username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,missing fingers,missing arms,missing legs,extra digit,extra arms,extra leg,extra foot,",
            "seed": -1,
            "steps": 6,
            "cfg_scale": 2,
            width,
            height,
            "batch_size":1,
            "alwayson_scripts": {
                "controlnet":{
                    "args": [
                        {
                            "enabled": true, 
                            "control_mode": 0,  
                            "model": "control_v11f1e_sd15_tile [a371b31b]", 
                            "module": "tile_colorfix+sharp",
                            "weight": 0.4, 
                            "resize_mode": "Crop and Resize",
                            "threshold_a": 8,
                            "threshold_b": 1, 
                            "guidance_start": 0, 
                            "guidance_end": 1, 
                            "pixel_perfect": true,
                            "processor_res": 512, 
                            "save_detected_map": false,
                            "input_image": base64Img, 
                            "control_mode":"Balanced",
                        },
                        {
                            "enabled": true, 
                            "control_mode": 0,  
                            "model": "control_v11p_sd15_lineart [43d4be0d]", 
                            "module": "lineart_realistic",
                            "weight": 0.5, 
                            "resize_mode": "Crop and Resize",
                            "guidance_start": 0, 
                            "guidance_end": 1, 
                            "pixel_perfect": true,
                            "processor_res": 512, 
                            "save_detected_map": false,
                            "input_image": base64Img, 
                            "control_mode":"Balanced",
                        }
                    ]
                }
            }
        });
        const ret = data.data;
        console.log(ret.info);
        const images = ret.images;
        for(let i=0; i<images.length; i++){
            await saveBase64Image(`${MOV2ANIME_PREVIEW_DIR}/${Date.now()}-${i}-${width}-${height}.png`, images[i]);
        }
    }catch(e){
        console.error(e);
    }
}


export const mov2animeTask = (movPath, prompt='masterpiece,best quality,ultra-detailed,illustration,beautiful art,artistic,realistic,8k,wallpaper,beautiful,1girl,<lora:lcmv15:0.5>,<lora:guli_v1:0.8>, guli,')=>{
    // G:\\webui\\videowork\\v2v\\20240901\\output_15.mp4
    generateTask(prompt, movPath)
}
export const mov2animePreview= (imgPath)=> {
    const base64Img = img2Base64(imgPath);
    generatePreviewTask(base64Img);
}