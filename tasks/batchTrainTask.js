import { run_batch_task, run_interrogate_task } from '../api/index'

// "G:/webui/sd-webui-aki/lora-scripts-v1.7.3/train/yifu/liantiaodiaodai/train",
export const giveMeTaskOpt = (trainDir, outputName = "test_pony")=>{
    return {
        "model_train_type": "sdxl-lora",
        "pretrained_model_name_or_path": "G:/webui/sd-webui-aki/sd-webui-aki-v4.5/models/Stable-diffusion/SDXL/ponyDiffusionV6XL_v6StartWithThisOne.safetensors",
        "vae": "G:/webui/sd-webui-aki/sd-webui-aki-v4.5/models/VAE/sdxl_vae.safetensors",
        "v2": false,
        "train_data_dir": trainDir,
        "prior_loss_weight": 1,
        "resolution": "1024,1024",
        "enable_bucket": false,
        "min_bucket_reso": 256,
        "max_bucket_reso": 1024,
        "bucket_reso_steps": 64,
        "output_name": outputName,
        "output_dir": "./output",
        "save_model_as": "safetensors",
        "save_precision": "bf16",
        "save_every_n_epochs": 1,
        "max_train_epochs": 4,
        "train_batch_size": 1,
        "gradient_checkpointing": true,
        "network_train_unet_only": false,
        "network_train_text_encoder_only": false,
        "learning_rate": 0.0001,
        "unet_lr": 0.0001,
        "text_encoder_lr": 0.00001,
        "lr_scheduler": "cosine_with_restarts",
        "lr_warmup_steps": 0,
        "lr_scheduler_num_cycles": 1,
        "optimizer_type": "AdamW8bit",
        "network_module": "networks.lora",
        "network_dim": 32,
        "network_alpha": 32,
        // "network_weights":"G:/webui/sd-webui-aki/lora-scripts-v1.7.3/output/dafan_pony_batch1_v2-000002.safetensors",
        "log_with": "tensorboard",
        "logging_dir": "./logs",
        "caption_extension": ".txt",
        "shuffle_caption": true,
        "keep_tokens": 0,
        "max_token_length": 255,
        "seed": 1337,
        "clip_skip": 2,
        "mixed_precision": "bf16",
        "full_bf16": true,
        "xformers": true,
        "lowram": false,
        "cache_latents": true,
        "cache_latents_to_disk": true,
        "cache_text_encoder_outputs": false,
        "cache_text_encoder_outputs_to_disk": false,
        "persistent_data_loader_workers": true
    }
}

export const giveMeFluxTaskOpt = (trainDir, outputName = "test_pony")=>{
    return {
        "model_train_type": "flux-lora",
        "pretrained_model_name_or_path": "G:/webui/sd-webui-aki/ComfyUI-aki-v1.4/models/unet/flux1-dev.safetensors",
        "ae": "G:/webui/sd-webui-aki/ComfyUI-aki-v1.4/models/vae/ae.safetensors",
        "clip_l": "G:/webui/sd-webui-aki/ComfyUI-aki-v1.4/models/clip/clip_l.safetensors",
        "t5xxl": "G:/webui/sd-webui-aki/ComfyUI-aki-v1.4/models/clip/t5xxl_fp16.safetensors",
        "timestep_sampling": "sigmoid",
        "sigmoid_scale": 1,
        "model_prediction_type": "raw",
        "discrete_flow_shift": 1,
        "loss_type": "l2",
        "guidance_scale": 1,
        "train_t5xxl": false,
        "train_data_dir": trainDir,//"G:/webui/sd-webui-aki/lora-scripts-v1.10.0/train/bingqian/train",
        "prior_loss_weight": 1,
        "resolution": "512,512",
        "enable_bucket": false,
        "min_bucket_reso": 256,
        "max_bucket_reso": 2048,
        "bucket_reso_steps": 64,
        "bucket_no_upscale": true,
        "output_name": outputName,
        "output_dir": "./output",
        "save_model_as": "safetensors",
        "save_precision": "fp16",
        "save_every_n_epochs": 1,
        "save_state": false,
        "max_train_epochs": 9,
        "train_batch_size": 1,
        "gradient_checkpointing": true,
        "gradient_accumulation_steps": 1,
        "network_train_unet_only": true,
        "network_train_text_encoder_only": false,
        "learning_rate": 0.0001,
        "unet_lr": 0.0005,
        "text_encoder_lr": 0.00002,
        "lr_scheduler": "cosine_with_restarts",
        "lr_warmup_steps": 0,
        "lr_scheduler_num_cycles": 1,
        "optimizer_type": "AdamW8bit",
        "network_module": "networks.lora_flux",
        "network_dim": 16,
        "network_alpha": 8,
        "log_with": "tensorboard",
        "logging_dir": "./logs",
        "caption_extension": ".txt",
        "shuffle_caption": false,
        "keep_tokens": 0,
        "seed": 1337,
        "clip_skip": 2,
        "mixed_precision": "bf16",
        "sdpa": true,
        "lowram": false,
        "cache_latents": true,
        "cache_latents_to_disk": true,
        "cache_text_encoder_outputs": true,
        "cache_text_encoder_outputs_to_disk": true,
        "persistent_data_loader_workers": true,
        "fp8_base": true
    }
}


export const beginFluxBatchTask = (list, date)=>{
    const trainList = list.map(item=>({
        dirKey: item,
        outName: `${date}_${item}_flux`
    }))

    //  G:/webui/sd-webui-aki/lora-scripts-v1.10.0/train/${trainOpt.dirKey}/train
    const options = trainList.map(trainOpt => giveMeFluxTaskOpt(`G:/webui/sd-webui-aki/lora-scripts-v1.10.0/train/${trainOpt.dirKey}/train`, trainOpt.outName))
    console.log(options);
    run_batch_task(options)
}


export const beginBatchTask = (list, date)=>{
    const trainList = list.map(item=>({
        dirKey: item,
        outName: `${date}_${item}_pony`
    }))
    // const trainList = [
    //     // {
    //     //     dirKey: 'buheniwan',
    //     //     outName: '20250315_buheniwan_pony',
    //     // },
    //     // {
    //     //     dirKey: 'yizhibeika',
    //     //     outName: '20250315_yizhibeika_pony',
    //     // },
    // ]


    const options = trainList.map(trainOpt => giveMeTaskOpt(`G:/webui/sd-webui-aki/lora-scripts-v1.7.3/train/${trainOpt.dirKey}/train`, trainOpt.outName))
    console.log(options);
    run_batch_task(options)
}

export const giveMeInterrogateOpt = (key, unloadModel=false) => {
    return {
        "path": `G:/webui/sd-webui-aki/lora-scripts-v1.7.3/train/${key}/train/20_${key}`,
        "threshold": 0.35,
        "interrogator_model": "wd14-convnextv2-v2",
        "replace_underscore": true,
        "escape_tag": true,
        "batch_output_action_on_conflict": "copy",
        "additional_tags": key,
        "unload_model_after_running": unloadModel,
    }
}

export const giveMeInterrogateFluxOpt = (key, unloadModel=false) => {
    return {
        "path": `G:/webui/sd-webui-aki/lora-scripts-v1.10.0/train/${key}/train/4_${key}`,
        "threshold": 0.35,
        "interrogator_model": "wd-vit-v3",
        "replace_underscore": true,
        "escape_tag": true,
        "batch_output_action_on_conflict": "copy",
        "additional_tags": key,
        "unload_model_after_running": unloadModel,
    }
}

export const beginInterrogate = async (key, unloadModel)=>{
    // const list = ['xiaoshiqi','xiaoyishimei','yeyuanna','yizhimianyang'];
    // const list = ['xiaoyishimei']
    // const optionList = list.map(key => giveMeInterrogateOpt(key));
    // for(let i=0;i<optionList.length; i++){
    //     run_interrogate_task(optionList[i]);
    // }
    run_interrogate_task(giveMeInterrogateOpt(key, unloadModel))
}

export const beginInterrogateFlux = async (key, unloadModel)=>{
    // const list = ['xiaoshiqi','xiaoyishimei','yeyuanna','yizhimianyang'];
    // const list = ['xiaoyishimei']
    // const optionList = list.map(key => giveMeInterrogateOpt(key));
    // for(let i=0;i<optionList.length; i++){
    //     run_interrogate_task(optionList[i]);
    // }
    run_interrogate_task(giveMeInterrogateFluxOpt(key, unloadModel))
}

export const beginInterrogateBatch = async(key)=>{
    run_interrogate_task({
        "path": `G:/webui/sd-webui-aki/lora-scripts-v1.7.3/train/${key}/train/20_${key}`,
        "threshold": 0.35,
        "interrogator_model": "wd14-convnextv2-v2",
        "replace_underscore": true,
        "escape_tag": true,
        "batch_output_action_on_conflict": "copy",
        "additional_tags": key
    })
}

