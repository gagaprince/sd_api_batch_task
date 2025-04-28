import { 
    beginFluxBatchTask, 
    beginInterrogateFlux,
    resize_img_task,
    batch_clothes_task, 
    animeTaskForForest, 
    peopleLoraTaskForForest, 
    mov2animeTask, 
    mov2animePreview, 
    beginBatchTask, 
    beginInterrogate,
    prepareModelWithList,
    prepareMergeModelWithList
 } from './tasks'

async function sleep(time){
    return new Promise((res)=>{
        setTimeout(()=>{
            res();
        },time)
    })
}

async function main(){
    const movPath = 'G:\\webui\\videowork\\v2v\\20240924\\'
    // mov2animeTask(movPath);

    // const imgpath = '/Users/gagaprince/Downloads/xiaozhangyu/xiaozhangyu-0003.png';
    // mov2animePreview(imgpath);

    // const list = '3u11erfly,7elling,1121,aichixiangcai,aimee,aiyamaya,ally,anqi,aqian,azhamao,babyyeah'.split(',').reverse();
    // const list = 'badanmu,baiyangmeimei,baolachaomifen,bbjiang,beibei,beibingyang,beilun,biechaoxiaozhou,bobodaren,boxinyu'.split(',').reverse();
    // changtuimianmianbing
    // chenbailu
    const list = `
chiningmeng
chihaochide
chirouxiaobai
chiwudun
chongzi
chouchong
chunchun
chutianguangsi
cora
crisle
cuteyy
dachui
    `.split('\n').map(item=>item.trim()).filter(item=>!!item).reverse();
//     const list = `
// 20250424_badanmu_merge_anqi_70_50_flux.safetensors
// 20250424_badanmu_merge_anqi_70_60_flux.safetensors
// 20250424_badanmu_merge_anqi_70_70_flux.safetensors
// 20250424_baiyangmeimei_merge_anqi_70_50_flux.safetensors
// 20250424_baiyangmeimei_merge_anqi_70_60_flux.safetensors
// 20250424_baiyangmeimei_merge_anqi_70_70_flux.safetensors
// 20250424_beibei_merge_anqi_70_50_flux.safetensors
// 20250424_beibei_merge_anqi_70_60_flux.safetensors
// 20250424_beibei_merge_anqi_70_70_flux.safetensors
// 20250424_beibingyang_merge_anqi_70_50_flux.safetensors
// 20250424_beibingyang_merge_anqi_70_60_flux.safetensors
// 20250424_beibingyang_merge_anqi_70_70_flux.safetensors
// 20250424_beilun_merge_anqi_70_50_flux.safetensors
// 20250424_beilun_merge_anqi_70_60_flux.safetensors
// 20250424_beilun_merge_anqi_70_70_flux.safetensors
// 20250424_biechaoxiaozhou_merge_anqi_70_50_flux.safetensors
// 20250424_biechaoxiaozhou_merge_anqi_70_60_flux.safetensors
// 20250424_biechaoxiaozhou_merge_anqi_70_70_flux.safetensors
// 20250424_bobodaren_merge_anqi_70_50_flux.safetensors
// 20250424_bobodaren_merge_anqi_70_60_flux.safetensors
// 20250424_bobodaren_merge_anqi_70_70_flux.safetensors
// 20250424_boxinyu_merge_anqi_70_50_flux.safetensors
// 20250424_boxinyu_merge_anqi_70_60_flux.safetensors
// 20250424_boxinyu_merge_anqi_70_70_flux.safetensors
// 20250424_boxinyu_merge_baiyang_80_50_flux.safetensors
//     `.split('\n').map(item=>item.trim()).filter(item=>!!item).map(item=>{
//         const str = item.trim();
//         return [str.split('_')[1],str.split('_')[2],str.split('_')[3]].join('_');
//     }).reverse();
//     const list = `
// 20250424_badanmu_merge_anqi_70_40_flux.safetensors
// 20250424_badanmu_merge_anqi_70_50_flux.safetensors
// 20250424_badanmu_merge_anqi_80_50_flux.safetensors
// 20250424_baiyangmeimei_merge_anqi_70_40_flux.safetensors
// 20250424_baiyangmeimei_merge_anqi_70_50_flux.safetensors
// 20250424_baiyangmeimei_merge_anqi_80_50_flux.safetensors
// 20250424_beibei_merge_anqi_70_40_flux.safetensors
// 20250424_beibei_merge_anqi_70_50_flux.safetensors
// 20250424_beibei_merge_anqi_80_50_flux.safetensors
// 20250424_beibingyang_merge_anqi_70_40_flux.safetensors
// 20250424_beibingyang_merge_anqi_70_50_flux.safetensors
// 20250424_beibingyang_merge_anqi_80_50_flux.safetensors
// 20250424_beilun_merge_anqi_70_40_flux.safetensors
// 20250424_beilun_merge_anqi_70_50_flux.safetensors
// 20250424_beilun_merge_anqi_80_50_flux.safetensors
// 20250424_biechaoxiaozhou_merge_anqi_70_40_flux.safetensors
// 20250424_biechaoxiaozhou_merge_anqi_70_50_flux.safetensors
// 20250424_biechaoxiaozhou_merge_anqi_80_50_flux.safetensors
// 20250424_bobodaren_merge_anqi_70_40_flux.safetensors
// 20250424_bobodaren_merge_anqi_70_50_flux.safetensors
// 20250424_bobodaren_merge_anqi_80_50_flux.safetensors
// 20250424_boxinyu_merge_anqi_70_40_flux.safetensors
// 20250424_boxinyu_merge_anqi_70_50_flux.safetensors
// 20250424_boxinyu_merge_anqi_80_50_flux.safetensors
//     `.split('\n').map(item=>item.trim()).filter(item=>!!item).map(item=>item.split('_')[1]).reverse();
    console.log(list);
    console.log(list.length);

    // resize_img_task('7i7i')

    // beginBatchTask(list,'20250418'); 
    beginFluxBatchTask(list,'20250428'); 

    // beginInterrogate('77');
    // beginInterrogateFlux('bingqian', true);

    // for(let i=0;i<list.length;i++){
    //     const key = list[i];
    //     let flag = false;
    //     let time = 4000;
    //     if(i===0){
    //         time = 15000
    //     }
    //     if(i===list.length-1){
    //         flag = true;
    //     }
    //     await resize_img_task(key);
    //     // beginInterrogate(key, flag);
    //     beginInterrogateFlux(key,flag);
    //     await sleep(time);
    // }


    // peopleLoraTaskForForest();

    // prepareModelWithList(list);
    // prepareMergeModelWithList(list);
}

main();