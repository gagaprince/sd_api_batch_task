import { getForestStoryPromptList, getGirlRoleList, getCommonPosPromptList, getPosGirlRoleList } from '../prompt';
import { post_txt2img } from '../api'
import { STORY_IMAGE_OUTPUT_DIR } from '../config';
import { saveBase64Image } from "../utils";

const generateImage = async (storyPrompt, girlRole, width=720, height=1280)=>{
    try{
        const { loraPrompt, name, loraAdetailer } = girlRole;
        const { prompt, desc, adetailerPrompt='' } = storyPrompt;
        

        const desPrompt = prompt.replace('{女主角}', loraPrompt);
        const desAdetailerPrompt = (adetailerPrompt || prompt).replace('{女主角}', loraAdetailer);


        const data = await post_txt2img({
            prompt: desPrompt,
            "negative_prompt": "score_6,score_5,score_4,source_pony,mosaic,(worst quality:1.2),(male looks to the camera),(male outcrop:2),(male appearance:2),(low quality:1.2),(normal quality:1.2),lowres,bad anatomy,bad hands,signature,watermarks,ugly,imperfect eyes,skewed eyes,unnatural face,unnatural body,error,extra limb,missing limbs,painting by bad-artist,bathtub,nipples,",
            "seed": -1,
            "steps": 20,
            "cfg_scale": 5,
            width,
            height,
            "batch_size":4,
            "alwayson_scripts": {
                "ADetailer": {
                  "args": [
                    true,
                    {
                      "ad_model": "face_yolov8n.pt",
                      "ad_prompt": desAdetailerPrompt,
                      "ad_negative_prompt": "",
                      "ad_confidence": 0.8,
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
            await saveBase64Image(`${STORY_IMAGE_OUTPUT_DIR}/${Date.now()}-${name}-${desc}-${i}-${width}-${height}.png`, images[i]);
        }
    }catch(e){
        console.error(e);
    }
}

export const animeTaskForForest = async ()=>{
    // const storyPromptList = getForestStoryPromptList();
    // const girlRoleList = getGirlRoleList();
    const posPromptList = getCommonPosPromptList();
    const posGirlRoleList = getPosGirlRoleList();

    for(let i=0;i<posGirlRoleList.length;i++){
        const girlRole = posGirlRoleList[i];
        for(let j=0;j<posPromptList.length;j++){
            const storyPrompt = posPromptList[j];
            await generateImage(storyPrompt, girlRole);
            await generateImage(storyPrompt, girlRole, 1280, 720);
        }
    }

}