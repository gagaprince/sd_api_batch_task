import { batch_clothes_task, animeTaskForForest, peopleLoraTaskForForest, mov2animeTask, mov2animePreview } from './tasks'

async function main(){
    const movPath = 'G:\\webui\\videowork\\v2v\\20240901\\'
    mov2animeTask(movPath);
}

main();