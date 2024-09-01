import { getClothesList,getSelfClothesList } from "../prompt"
import { post_txt2img } from '../api'
import { IMAGE_OUTPUT_DIR } from '../config';
import { saveBase64Image } from "../utils";

const promptTemplate = 'score_9,score_8_up,score_7_up,score_6_up,girl,very pale skin,long pink hair,gradient black hair,parted bangs,blue eyes,slim,posing,green eyes,{{clothes}},drink in hand,sitting on a bench,summer day,outdoor,front view,<lora:huolinger_V1:0.3>,'

const generateImage = async (promptObj)=>{
    try{
        const prompt = promptObj.allPrompt;
        const clothes = promptObj.prompt;
        const desc = promptObj.desc;
        const data = await post_txt2img({
            prompt,
            "negative_prompt": "score_6,score_5,score_4,source_pony,mosaic,(worst quality:1.2),(male looks to the camera),(male outcrop:2),(male appearance:2),(low quality:1.2),(normal quality:1.2),lowres,bad anatomy,bad hands,signature,watermarks,ugly,imperfect eyes,skewed eyes,unnatural face,unnatural body,error,extra limb,missing limbs,painting by bad-artist,bathtub,nipples,",
            "seed": -1,
            "steps": 20,
            "cfg_scale": 5,
            "width": 720,
            "height": 1280,
            "batch_size":2,
            "alwayson_scripts": {
                "ADetailer": {
                  "args": [
                    true,
                    {
                      "ad_model": "face_yolov8n.pt",
                      "ad_prompt": "score_9,score_8_up,score_7_up,score_6_up,girl,very pale skin,long pink hair,gradient black hair,parted bangs,blue eyes,slim,posing,green eyes,drink in hand,sitting on a bench,summer day,outdoor,front view,<lora:huolinger_V1:1>,",
                      "ad_negative_prompt": "",
                      "ad_confidence": 0.5,
                      "ad_mask_k_largest": 0,
                      "ad_mask_min_ratio": 0.0,
                      "ad_mask_max_ratio": 1.0,
                    }
                  ]
                }
              }
        });
        const ret = data.data;
        console.log(ret.info);
        const images = ret.images;
        for(let i=0; i<images.length; i++){
            await saveBase64Image(`${IMAGE_OUTPUT_DIR}/${Date.now()}-${i}-${clothes}-${desc}.png`, images[i]);
        }
    }catch(e){
        console.error(e);
    }
}

export const batch_clothes_task = async ()=>{
    const clothesPromptList = getSelfClothesList();
    const promptList = clothesPromptList.map((clothesPrompt)=>{
        return {
            allPrompt: promptTemplate.replace('{{clothes}}', clothesPrompt.prompt),
            ... clothesPrompt
        }
    });
    for(let i=0; i<promptList.length; i++){
        await generateImage(promptList[i]);
    }
}