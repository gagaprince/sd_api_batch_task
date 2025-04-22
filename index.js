import { beginFluxBatchTask,beginInterrogateFlux, batch_clothes_task, animeTaskForForest, peopleLoraTaskForForest, mov2animeTask, mov2animePreview, beginBatchTask, beginInterrogate } from './tasks'


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

    const list = 'juemei,77,7ge,wansu,zhendehen,zhenzhendawang,zhiyu'.split(',');

    // beginBatchTask(list,'20250418'); 
    // beginFluxBatchTask(list,'20250418'); 

    // beginInterrogate('77');
    beginInterrogateFlux('bingqian', true);

    // for(let i=0;i<list.length;i++){
    //     const key = list[i];
    //     let flag = false;
    //     if(i===list.length-1){
    //         flag = true;
    //     }
    //     beginInterrogate(key, flag);
    //     await sleep(4000);
    // }


    
    // beginInterrogate('xiexin');
    // beginInterrogate('jiaze');
    // beginInterrogate('saykiy');
    // beginInterrogate('chiwudun');
    // beginInterrogate('buheniwan');
    // beginInterrogate('wananxiaoyang');
    // beginInterrogate('yizhibeika');
    // beginInterrogate('pangpang');
    // beginInterrogate('yudaG', true);

    // beginInterrogate('xiaoxiaozhu');
    // beginInterrogate('luyanqi');
    // beginInterrogate('please');
    // beginInterrogate('rekeke');
    // beginInterrogate('liaoliao');
    // beginInterrogate('jiayi');

    // beginInterrogate('xiaoyan');
    // peopleLoraTaskForForest();
}

main();