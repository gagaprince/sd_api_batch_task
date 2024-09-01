const commonPosPromptList = [
    {
        prompt:'score_9,score_8_up,score_7_up,1girl,solo,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(off shoulder oversized grey t-shirt),(black shorts:1.2),hands on a desk,office,desk,(breasts on table:1.1),(lying down on stomach:1.3),(bend over office desk),medium breasts,hanging breasts,cleavage,{女主角},',
        desc:'打台球',
        adetailerPrompt:'',
    },
    {
        prompt:'score_9,score_8_up,score_7_up,1girl,solo,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(off shoulder oversized grey t-shirt),(black shorts:1.2),hands on a desk,office,desk,(breasts on table),lying down on stomach,medium breasts,(bend over office desk:1.3),(ass focus),looking back,{女主角},',
        desc:'打台球背后视角',
        adetailerPrompt:'',
    },
    {
        prompt:'score_9,score_8_up,score_7_up,1girl,solo,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(off shoulder oversized grey t-shirt),hands on a desk,office,desk,(breasts on table),lying down on stomach,medium breasts,(bend over office desk:1.3),(ass focus),(black shorts pulled to the knees to show perfact pussy:1.1),looking back,(pussy),(lower body naked:1.1),sex from behind,doggystyle,vaginal,1man,penis,{女主角},<lora:Expressive_H-000001:1>,Expressiveh,',
        desc:'后入',
        adetailerPrompt:'score_9,score_8_up,score_7_up,1girl,solo,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(off shoulder oversized grey t-shirt),hands on a desk,office,desk,(breasts on table),lying down on stomach,medium breasts,(bend over office desk:1.3),(ass focus),(black shorts pulled to the knees to show perfact pussy:1.1),looking back,(pussy),(lower body naked:1.1),sex from behind,doggystyle,vaginal,1man,penis,{女主角},',
    },
    {
        prompt:`score_9,score_8_up,score_7_up,1girl,1man,man's face out of frame,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(off shoulder oversized grey t-shirt),hands on a desk,office,desk,(breasts on table:1.1),(lying down on stomach:1.3),(bend over office desk),medium breasts,hanging breasts,cleavage,nipples,(sex from behind:1.3),doggystyle,vaginal,1man,(arms grab),breasts grab,<lora:Expressive_H-000001:1>,Expressiveh,<lora:orgasm_face_pony:0.6>,orgasm_face,{女主角}`,
        desc:'从前面看后入',
        adetailerPrompt:`score_9,score_8_up,score_7_up,1girl,1man,man's face out of frame,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(off shoulder oversized grey t-shirt),hands on a desk,office,desk,(breasts on table:1.1),(lying down on stomach:1.3),(bend over office desk),medium breasts,hanging breasts,cleavage,nipples,(sex from behind:1.3),doggystyle,vaginal,1man,(arms grab),breasts grab,<lora:orgasm_face_pony:1>,orgasm_face,{女主角}`,
    },
    {
        prompt:'score_9,score_8_up,score_7_up,1girl,solo,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(off shoulder oversized grey t-shirt),lying on bed,(clothes lift:1.2),medium breasts,breast grab,exposed breasts,nipples,pussy,pussy focus,pussy lips,(rubbing clitoris),spreading pussy,female masturbation,{女主角},spread legs,',
        desc:'自摸',
        adetailerPrompt:'',
    },
    {
        prompt:'score_9,score_8_up,score_7_up,1girl,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,((off shoulder oversized grey t-shirt)),scared,(crying with eyes open)struggle,resist,girl on top,looking at viewer,(breastfeeding),(sucking breast:1.5),medium breasts,in heat,highly detailed,intricate,nipples,exposed breasts,1man,(old man),{女主角},<lora:Expressive_H-000001:1>,Expressiveh,',
        desc:'吸奶',
        adetailerPrompt:'score_9,score_8_up,score_7_up,1girl,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,((off shoulder oversized grey t-shirt)),scared,(crying with eyes open)struggle,resist,girl on top,looking at viewer,(breastfeeding),(sucking breast:1.5),medium breasts,in heat,highly detailed,intricate,nipples,exposed breasts,1man,(old man),{女主角},',
    },
    {
        prompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,black shorts,kneeling,medium breasts,cleavage,exposed breasts,(hand job),1man,old man,standing,show penis,penis in hand,man's face out of frame,indoors,modern decoration,floor tiles,white walls,TV,sofa,focus penis,head grab,{女主角},<lora:Expressive_H-000001:1>,Expressiveh,<lora:disgusted_face_xl_goofy:0.9>,disgusted face`,
        desc:'站着打手枪',
        adetailerPrompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,black shorts,kneeling,medium breasts,cleavage,exposed breasts,(hand job),1man,old man,standing,show penis,penis in hand,man's face out of frame,indoors,modern decoration,floor tiles,white walls,TV,sofa,focus penis,head grab,{女主角},<lora:disgusted_face_xl_goofy:1>,disgusted face`,
    },
    {
        prompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,black shorts,kneeling,medium breasts,cleavage,exposed breasts,(handjob),1man,old man,(man lying on ground),show penis,hands holding penis,man's face out of frame,indoors,modern decoration,floor tiles,white walls,TV,sofa,focus penis,head grab,{女主角},<lora:Expressive_H-000001:1>,Expressiveh,<lora:disgusted_face_xl_goofy:0.9>,disgusted face,`,
        desc:'躺着打手枪',
        adetailerPrompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,black shorts,kneeling,medium breasts,cleavage,exposed breasts,(handjob),1man,old man,(man lying on ground),show penis,hands holding penis,man's face out of frame,indoors,modern decoration,floor tiles,white walls,TV,sofa,focus penis,head grab,{女主角},<lora:disgusted_face_xl_goofy:1>,disgusted face,`,
    },
    {
        prompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,black shorts,kneeling,medium breasts,cleavage,exposed breasts,(handjob),1man,old man,(man lying on ground),show penis,hands holding penis,man's face out of frame,indoors,modern decoration,floor tiles,white walls,TV,sofa,focus penis,head grab,(lick_the_dick),{女主角},<lora:Expressive_H-000001:1>,Expressiveh,<lora:disgusted_face_xl_goofy:0.9>,disgusted face,pov,`,
        desc:'舔',
        adetailerPrompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,black shorts,kneeling,medium breasts,cleavage,exposed breasts,(handjob),1man,old man,(man lying on ground),show penis,hands holding penis,man's face out of frame,indoors,modern decoration,floor tiles,white walls,TV,sofa,focus penis,head grab,(lick_the_dick),{女主角},<lora:disgusted_face_xl_goofy:1>,disgusted face,pov,`,
    },
    {
        prompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,kneeling,medium breasts,cleavage,(exposed breasts),(breasts grab),reverse cowgirl position,girl on top,(vaginal),(hugging from behind:1.1),old man,((faceless male)),sitting,(man's face out of frame:1.3),{女主角},<lora:Expressive_H-000001:1>,Expressiveh,<lora:orgasm_face_pony:0.7>,orgasm_face,`,
        desc:'坐着做',
        adetailerPrompt:`score_9,score_8_up,score_7_up,anime,1girl,long hair,black hair,swept bangs,thin,slim,wide hips,makeup,eye shadow,red lips,off shoulder oversized grey t-shirt,kneeling,medium breasts,cleavage,(exposed breasts),(breasts grab),reverse cowgirl position,girl on top,(vaginal),(hugging from behind:1.1),old man,((faceless male)),sitting,(man's face out of frame:1.3),{女主角},<lora:orgasm_face_pony:1>,orgasm_face,`,
    },
    

    
];

const girlRoleList = [
    // {
    //     name:'火灵儿',
    //     loraPrompt:'<lora:huolinger_V1:0.3>',
    //     loraAdetailer:'<lora:huolinger_V1:1>',
    // },
    // {
    //     name:'清漪',
    //     loraPrompt:'<lora:清漪_V1-000001:0.3>',
    //     loraAdetailer:'<lora:清漪_V1-000001:1>',
    // },
    // {
    //     name:'云溪',
    //     loraPrompt:'<lora:云曦_V2-000001:0.3>',
    //     loraAdetailer:'<lora:云曦_V2-000001:1>',
    // },
    // {
    //     name:'陆雪琪',
    //     loraPrompt:'<lora:luxueqi_V1:0.3>',
    //     loraAdetailer:'<lora:luxueqi_V1:1>',
    // },
    {
        name:'李慕婉',
        loraPrompt:'<lora:limuwan_V1:0.3>',
        loraAdetailer:'<lora:limuwan_V1:1>',
    },
    {
        name:'美杜莎',
        loraPrompt:'<lora:MEIDUSHA:0.3>',
        loraAdetailer:'<lora:MEIDUSHA:1>',
    },
];

export const getCommonPosPromptList = ()=>{
    return commonPosPromptList;
}

export const getPosGirlRoleList = ()=>{
    return girlRoleList;
}
