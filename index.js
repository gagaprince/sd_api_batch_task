import { batch_clothes_task, animeTaskForForest, peopleLoraTaskForForest, mov2animeTask, mov2animePreview, beginBatchTask, beginInterrogate } from './tasks'

async function main(){
    const movPath = 'G:\\webui\\videowork\\v2v\\20240924\\'
    // mov2animeTask(movPath);

    // const imgpath = '/Users/gagaprince/Downloads/xiaozhangyu/xiaozhangyu-0003.png';
    // mov2animePreview(imgpath);

    // beginBatchTask();
    // beginInterrogate('lanyangyang');
    // beginInterrogate('maotai');
    // beginInterrogate('songjin');
    // beginInterrogate('yuyexiaoxuan');
    // beginInterrogate('lldmv');
    // beginInterrogate('xingxing');
    // beginInterrogate('immy');
    // beginInterrogate('roulaoban');

    // beginInterrogate('xiaoxiaozhu');
    // beginInterrogate('luyanqi');
    // beginInterrogate('please');
    // beginInterrogate('rekeke');
    // beginInterrogate('liaoliao');
    // beginInterrogate('jiayi');

    // beginInterrogate('xiaoyan');
    peopleLoraTaskForForest();
}

main();