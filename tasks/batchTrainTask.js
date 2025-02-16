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


export const beginBatchTask = ()=>{
    const trainList = [
        // {
        //     dirKey: 'shuibingyue',
        //     outName: 'shuibingyue_pony',
        // },
        // {
        //     dirKey: 'xiaowusu',
        //     outName: 'xiaowusu_pony',

        // },
        // {
        //     dirKey: 'dongmengmeng',
        //     outName: 'badanmu_pony',
        // },
        // {
        //     dirKey: 'dongmengmeng',
        //     outName: '20241116_dongmengmeng_pony',
        // },
        // {
        //     dirKey: 'duohedounai',
        //     outName: '20241116_duohedounai_pony',
        // },
        // {
        //     dirKey: 'huzhien',
        //     outName: '20241117_huzhien_pony',
        // },
        // {
        //     dirKey: 'xiaohuang',
        //     outName: '20241117_xiaohuang_pony',
        // },
        // {   
        //     dirKey: 'wangqiaochu',
        //     outName: '20250122_wangqiaochu_pony',
        // },
        // {
        //     dirKey: 'zhouhongdou',
        //     outName: '20250129_zhouhongdou_pony',
        // },
        // {
        //     dirKey: 'yiiin',
        //     outName: '20250208_yiiin_pony',
        // },
        // {
        //     dirKey: 'lebaoei',
        //     outName: '20250208_lebaoei_pony',
        // },
        // {
        //     dirKey: 'yuyexiaoxuan',
        //     outName: '20250208_yuyexiaoxuan_pony',
        // },
        // {
        //     dirKey: 'lldmv',
        //     outName: '20250208_lldmv_pony',
        // },
        // {
        //     dirKey: 'xingxing',
        //     outName: '20250208_xingxing_pony',
        // },
        {
            dirKey: 'lanyangyang',
            outName: '20250209_lanyangyang_pony',
        },
        {
            dirKey: 'songjin',
            outName: '20250209_songjin_pony',
        },
        {
            dirKey: 'maotai',
            outName: '20250209_maotai_pony',
        },
        // {
        //     dirKey: 'please',
        //     outName: '20250105_please_pony',
        // },
        // {
        //     dirKey: 'rekeke',
        //     outName: '20250105_rekeke_pony',
        // },
        // {
        //     dirKey: 'liaoliao',
        //     outName: '20250105_liaoliao_pony',
        // },
        // {
        //     dirKey: 'jiayi',
        //     outName: '20250105_jiayi_pony',
        // }
    ]


    const options = trainList.map(trainOpt => giveMeTaskOpt(`G:/webui/sd-webui-aki/lora-scripts-v1.7.3/train/${trainOpt.dirKey}/train`, trainOpt.outName))
    console.log(options);
    run_batch_task(options)
}

export const giveMeInterrogateOpt = (key) => {
    return {
        "path": `G:/webui/sd-webui-aki/lora-scripts-v1.7.3/train/${key}/train/20_${key}`,
        "threshold": 0.35,
        "interrogator_model": "wd14-convnextv2-v2",
        "replace_underscore": true,
        "escape_tag": true,
        "batch_output_action_on_conflict": "copy",
        "additional_tags": key
    }
}

export const beginInterrogate = async (key)=>{
    // const list = ['xiaoshiqi','xiaoyishimei','yeyuanna','yizhimianyang'];
    // const list = ['xiaoyishimei']
    // const optionList = list.map(key => giveMeInterrogateOpt(key));
    // for(let i=0;i<optionList.length; i++){
    //     run_interrogate_task(optionList[i]);
    // }
    run_interrogate_task(giveMeInterrogateOpt(key))
}