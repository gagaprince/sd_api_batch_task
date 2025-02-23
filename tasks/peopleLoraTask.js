import { getGirlLoraList, getLoraForPeoplePromptList, getTeacherPromptList, getTeacherGirlRoleList } from '../prompt';
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
            "negative_prompt": "score_6,score_5,score_4,source_pony,(worst quality:1.4),(low quality:1.4),(normal quality:1.4),lowres,bad anatomy,bad hands,signature,watermarks,ugly,imperfect eyes,skewed eyes,unnatural face,unnatural body,error,extra limb,missing limbs,painting by bad-artist,red lips,(shoes:1.2),bad feet,too many toes,extra toes,high heels,curly hair,ugly face,badly drawn face,blurry,nipples",
            "seed": -1,
            "steps": 20,
            "cfg_scale": 6,
            "sampler_index":"Euler a",
            width,
            height,
            "batch_size":2,
            "alwayson_scripts": {
                "ADetailer": {
                  "args": [
                    true,
                    {
                      "ad_model": "face_yolov8n.pt",
                      "ad_prompt": desAdetailerPrompt,
                      "ad_negative_prompt": "",
                      "ad_confidence": 0.8,
                      "ad_denoising_strength":0.4,
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
            await saveBase64Image(`${STORY_IMAGE_OUTPUT_DIR}/${name}-${desc}-${i}.png`, images[i]);
        }
    }catch(e){
        console.error(e);
    }
}

export const peopleLoraTaskForForest = async ()=>{
    // const storyPromptList = getForestStoryPromptList();
    // const girlRoleList = getGirlRoleList();
    // const peopleLoraPromptList = getLoraForPeoplePromptList();
    // const peopleLoraGirlRoleList = getGirlLoraList();

    // for(let i=0;i<peopleLoraGirlRoleList.length;i++){
    //     const girlRole = peopleLoraGirlRoleList[i];
    //     for(let j=0;j<peopleLoraPromptList.length;j++){
    //         const storyPrompt = peopleLoraPromptList[j];
    //         await generateImage(storyPrompt, girlRole, 1024, 1024);
    //     }
    // }


    const teacherLoraPromptList = getTeacherPromptList();
    const teacherLoraGirlRoleList = getTeacherGirlRoleList();

    for(let i=0;i<teacherLoraGirlRoleList.length;i++){
        const girlRole = teacherLoraGirlRoleList[i];
        for(let j=0;j<teacherLoraPromptList.length;j++){
            const storyPrompt = teacherLoraPromptList[j];
            await generateImage(storyPrompt, girlRole, 720, 1280);
        }
    }

}