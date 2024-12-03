const commonPosPromptList = [
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,long hair,black hair,skinny,half-open eyes,blush,medium breasts,cleavage,((exposed breasts)),nipples,spread legs slightly,((thin waist)),((thin legs)),pussy,(sexual intercourse),(vaginal sex),ejaculation,cum in pussy,((motion lines)),(lying on the bay window),bay window,(hotel room),(huge floor-to-ceiling windows),(cityscape),night,1man,man's face out of frame,nude,{女主角},`,
    //     desc:'酒店落地窗前的激情',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,1man,makeup,indoors,floor-to-ceiling windows,living room,medium breasts,cleavage,looking away,long hair,straight_hair,black hair,swept bangs,standing,bent over,((exposed breasts)),(nipples),sweat,sweat on breasts,motion lines,<lora:20241028_niukoutop_pony:0.9:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,niukoutop,shirt,midriff,navel,white shirt,crop top,flower print,collarbone,short sleeves,<lora:Expressive_H-000001:0.5>,expressiveh,man's face out of frame,sex from behind,{女主角},realistic`,
    //     desc:'纽扣上衣sex_real',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,1man,makeup,indoors,floor-to-ceiling windows,living room,medium breasts,cleavage,looking away,long hair,straight_hair,black hair,swept bangs,standing,bent over,((exposed breasts)),(nipples),sweat,sweat on breasts,motion lines,<lora:20241028_niukoutop_pony:0.9:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,niukoutop,shirt,midriff,navel,white shirt,crop top,flower print,collarbone,short sleeves,<lora:Expressive_H-000001:0.5>,expressiveh,man's face out of frame,sex from behind,{女主角}`,
    //     desc:'纽扣上衣sex_real_lookingatviewer',
    //     adetailerPrompt:`score_9,score_8_up,score_7_up,1girl,looking at viewer,{女主角},<lora:Expressive_H-000001:0.5>,expressiveh,realistic, `,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,close-up details,black hair,long hair,outstanding style,makeup,red lips,black eyeshadow,tall,in her teens,adding a touch of dimension to your images without compromising details,looking at viewer,{女主角},<lora:Expressive_H-000001:0.6>,expressiveh,`,
    //     desc:'肖像',
    //     adetailerPrompt:`score_9,score_8_up,score_7_up,close-up details,black hair,long hair,outstanding style,makeup,red lips,black eyeshadow,tall,in her teens,adding a touch of dimension to your images without compromising details,looking at viewer,{女主角},<lora:Expressive_H-000001:0.6>,expressiveh,`,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,source_anime,1girl,solo,closed up details,lace,(floor-to-ceiling windows),high-rise buildings,dark clouds,(lightning),night,storm,long hair,black hair,makeup,red lips,eyeshadow,black dress,medium breasts,thin,sitting on bed,indoors,looking at viewer,from above,{女主角}`,
    //     desc:'黑色闪电',
    //     adetailerPrompt:`score_9,score_8_up,score_7_up,source_anime,1girl,solo,closed up details,lace,(floor-to-ceiling windows),high-rise buildings,dark clouds,(lightning),night,storm,long hair,black hair,makeup,red lips,eyeshadow,black dress,medium breasts,thin,sitting on bed,indoors,looking at viewer,from above,{女主角}`,
    // },
    {
        prompt:`score_9,score_8_up,score_7_up,source_anime,1girl,solo,closed up details,from above,(undressing),dress lift,leaking one breast,nipples,long hair,black hair,makeup,red lips,eyeshadow,black dress,medium breasts,thin legs,perfect legs,sitting,indoors,((looking at viewer)),on couch,black panties,{女主角},<lora:Expressive_H-000001:0.5>,expressiveh,`,
        desc:'黑色连衣裙暴露',
        adetailerPrompt:`score_9,score_8_up,score_7_up,source_anime,1girl,solo,closed up details,from above,(undressing),dress lift,leaking one breast,nipples,long hair,black hair,makeup,red lips,eyeshadow,black dress,medium breasts,thin legs,perfect legs,sitting,indoors,((looking at viewer)),on couch,black panties,{女主角},<lora:Expressive_H-000001:0.5>,expressiveh,`,
    },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,source_anime,1girl,solo,close-up details,long hair,black hair,makeup,red lips,eyeshadow,medium breasts,thin,long legs,perfect legs,off-shoulder_shirt,skirt,necklace,earrings,sit on the ground,head up,arm_support,indoors,(floor-to-ceiling windows),high-rise buildings,sun,sunlight,from above,((looking at viewer)),{女主角},<lora:Expressive_H-000001:0>,expressiveh,`,
    //     desc:'室内跪坐',
    //     adetailerPrompt:'score_9,score_8_up,score_7_up,source_anime,1girl,solo,close-up details,long hair,black hair,makeup,red lips,eyeshadow,medium breasts,thin,long legs,perfect legs,off-shoulder_shirt,skirt,necklace,earrings,sit on the ground,head up,arm_support,indoors,(floor-to-ceiling windows),high-rise buildings,sun,sunlight,from above,((looking at viewer)),{女主角},<lora:Expressive_H-000001:0>,expressiveh,',
    // }
    //,
    //{
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,nipples,(kneeling),nude,medium breasts,bruised  breasts,hanging breasts,breasts apart,serious,kubrick_stare,despair,tear,sad,crying_with_eyes_open,1man,man's face out of frame,from side,show penis,penis on face,handjob,pussy,pussy juice,{女主角},`,
    //     desc:'跪地口',
    //     adetailerPrompt:``,
    // },
    //
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,woman (supermarket worker),solo focus,shirt opened to reveal naked breasts,erect nipples,skirt hitched up,skirtlift,no underwear,((1woman 1man  doggystyle sex from behind)),standing,hands holding shopping trolley,supermarket aisle,((sweaty)),oiled skin,shiny skin,(head down ass up),black hair,very long hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,medium breasts,hanging breasts,sigh,annoyed,frustrated,crying_with_eyes_open,sad,vibration,motion line,{女主角},`,
    //     desc:'超市后入',
    //     adetailerPrompt:``,
    // },
    
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,looking at viewer,long hair,black hair,blue eyes,swept bangs,circle earnings,strong make up,eye shadow,red lips,medium breasts,red and swollen breasts,(nude, naked:1.3),pussy,pussy juice,navel,thighs,highlegs,barefoot,bare hips,curvy,indoors,apartment,bedroom,on bed,night,city,moon,1boy,(arms wrapped around),love,black hair,straddling,(breast sucking),(sucking nipples),moaning,head grab,from above,{女主角}`,
    //     desc:'床上吸',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up BREAK indoors,at night,dimly lit motel room BREAK rating_explicit,1girl,{女主角},lying on bed,partially illuminated,partially covered in shadow,unique pose,unique angle,medium breasts,long black hair with bangs,big brown eyes,pale skin,petite,slender,curvy arms,thin legs,(leaking one breast:1.1),pussy,pussy juice,nipples,<lora:tiaowenqun_pony-000004:0.8:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,`,
    //     desc:'床上诱惑',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up BREAK indoors,at night,dimly lit motel room BREAK rating_explicit,1girl,{女主角},lying on bed,partially illuminated,partially covered in shadow,unique pose,unique angle,medium breasts,long black hair with bangs,big brown eyes,pale skin,petite,slender,curvy arms,thin legs,pussy,pussy juice,nipples,nude,`,
    //     desc:'床上诱惑2',
    //     adetailerPrompt:``,
    // }
    
    
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,1man,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,leaning_forward,(breast grab from behind),doggystyle,sex from behind,hanging breasts,breasts apart,medium breasts,nipples,glaring,kubrick_stare,sulking,arms up,nude,man's face out of frame,view from side 45 degrees,{女主角},`,
    //     desc:'后摸胸',
    //     adetailerPrompt:``,
    // },
    
    // {
    //     prompt:'score_9,score_8_up,score_7_up,1girl,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,crossed_legs,high_heels,sitting,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,indoor,couch,',
    //     desc:'我的家庭教师，是一个大美女',
    //     adetailerPrompt:'',
    // },
    // {
    //     prompt:'score_9,score_8_up,score_7_up,1girl,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,sitting in chair,otaku room,table,chair,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,',
    //     desc:'她每天穿的很性感的来给我补课，总让我想入非非',
    //     adetailerPrompt:'',
    // },
    // {
    //     prompt:'score_9,score_8_up,score_7_up,1girl,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,sitting in chair,otaku room,table,chair,leaning_forward,medium breasts,hanging breasts,cleavage,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,',
    //     desc:'她时不时的展现自己的诱人身材，感觉在诱惑我',
    //     adetailerPrompt:'',
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,sitting in chair,otaku room,table,chair,leaning_forward,medium breasts,hanging breasts,cleavage,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,from above,`,
    //     desc:'我觉得她就是故意的',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:'score_9,score_8_up,score_7_up,1boy,solo,white_shirt,pants,erection under clothes,indoor,otaku room,table,chair,sitting,embarrassed expression,',
    //     desc:'每次她给我补习完功课，我都硬的不行不行的',
    //     adetailerPrompt:'',
    // },
    // {
    //     prompt:'score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,annoyed,anguish,gloom,arms up,otaku room,table,chair,medium breasts,cleavage,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,from above,',
    //     desc:'这天补习的时候，她一直说自己的脖子疼，可能是落枕了',
    //     adetailerPrompt:'',
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(embarrassed expression:1.2),looking away,otaku room,table,chair,sitting,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,\nBREAK\n 1man,man's face out of frame,(the man standing and grabbing shoulder and neck  from behind:1.3),white_shirt,pants,from above,`,
    //     desc:'我一听这不是给我机会吗，就殷勤的去给她按摩。',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(embarrassed expression:1.2),looking away,otaku room,table,chair,sitting,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,\nBREAK\n 1man,man's face out of frame,(the man standing and grabbing shoulder and neck  from behind:1.3),white_shirt,pants,from front`,
    //     desc:'换个角度',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(embarrassed expression:1.2),looking away,otaku room,table,chair,sitting,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,\nBREAK\n 1man,man's face out of frame,(the man standing and grabbing shoulder and neck  from behind:1.3),white_shirt,pants,from above, pov,`,
    //     desc:'再换个角度',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,surprise,shock,exclamation mark,looking away,otaku room,table,chair,sitting,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,\nBREAK\n 1man,man's face out of frame,(the man standing and grabbing shoulder and grabbing breast from behind:1.2),white_shirt,pants,from front,`,
    //     desc:'我趁机一把抓住那一团柔软，真的抓到了，她被吓了一跳',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,surprise,shock,exclamation mark,looking at viewer,otaku room,table,chair,sitting,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,(covering mouth),\nBREAK\n 1man,man's face out of frame,(the man standing and grabbing breast from behind:1.3),white_shirt,pants,from cover,`,
    //     desc:'她竟然自己捂上了嘴，是希望我继续吗？',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,surprise,shock,exclamation mark,looking at viewer,otaku room,table,chair,sitting,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,(covering mouth),leaking one breast,nipples, \nBREAK\n 1man,man's face out of frame,(the man standing and grabbing breast from behind:1.3),white_shirt,pants,from cover,`,
    //     desc:'那我就更加放肆了',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking away,otaku room,table,chair,sitting,((blush)),embarrass,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,leaking one breast,nipples, \nBREAK\n 1man,man's face out of frame,(the man standing and grabbing breast from behind:1.3),white_shirt,pants,from cover,`,
    //     desc:'她情绪缓和了很多，害羞脸红了起来',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking away,((otaku room)),table,chair,sitting,((blush)),embarrass,<lora:tiaowenqun_pony-000004:0.8:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,medium breasts,breasts apart,hanging breasts,bouncing breasts,(exposing breasts:1.1),nipples,(squeezing breasts:1.2),(deformed breasts), \nBREAK\n 1man,man's face out of frame,(the man standing and grabbing breast from behind:1.3),white_shirt,pants,<lora:orgasm_face_pony:0.3>,orgasm_face,`,
    //     desc:'慢慢的还渐入佳境',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(looking back),(otaku room),table,chair,((blush)),embarrass,leaning_forward,<lora:tiaowenqun_pony-000004:0.8:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,white panties,long legs,panty pull,exposing breasts,nipples,pussy,focus pussy,pussy juice, \nBREAK\n 1man,man's face out of frame,white_shirt,pants,fingering,<lora:orgasm_face_pony:0.3>,orgasm_face,`,
    //     desc:'抠她',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,(looking back),exclamation mark,indoor,table,((blush)),embarrass,leaning_forward,<lora:tiaowenqun_pony-000004:0.8:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,white panties,long legs,panty pull,exposing breasts,nipples,pussy,(penis on ass),penis up, \nBREAK\n 1man,man's face out of frame,white_shirt,pants,show penis,<lora:orgasm_face_pony:0.3>,orgasm_face,`,
    //     desc:'亮出我的工具',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,table,((blush)),annoyed,anguish,gloom,(exposing breasts:1.2),nipples,pussy,((on_side)),hand_between_legs,<lora:tiaowenqun_pony-000004:0.8:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,long legs,from above,`,
    //     desc:'她反应过来，阻止了我的进入，但我怎么可能放过这个机会',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,table,((blush)),annoyed,anguish,gloom,(exposing breasts:1.2),nipples,sitting,frustrated_brow,sigh,frustrated,tearing_up,<lora:tiaowenqun_pony-000004:0.8:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,from above,pov,`,
    //     desc:'我逼近她，她楚楚可怜的看着我,表示只要不进入，其他都可以',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,(blush),(((exposing breasts))),((nipples)),sitting:1.5,boy sits on top of female:1.5,nursing handjob:1.5,(breastfeeding handjob:1),((sucking breast)),grabbing breast,female giving handjob to male,<lora:tiaowenqun_pony-000004:0.7:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,<lora:orgasm_face_pony:0.3>,orgasm_face,from above,`,
    //     desc:'护士打手枪',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,table,((blush)),annoyed,anguish,gloom,(exposing breasts:1.3),nipples,sitting,frustrated_brow,sigh,frustrated,tearing_up,<lora:tiaowenqun_pony-000004:0.6:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress, \nBREAK\n 1man,man's face out of frame,(show penis),penis on face,from above,pov,`,
    //     desc:'强迫口',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},niangao,long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,((blush)),annoyed,anguish,gloom,(exposing breasts:1.3),((nipples)),((kneeling)),frustrated_brow,sigh,frustrated,tearing_up,<lora:tiaowenqun_pony-000004:0.6:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,head grab, \nBREAK\n 1man,man's face out of frame,((deepthroat)),((oral sex)),handjob,from side,from above,dynamic pose,`,
    //     desc:'口',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,table,((blush)),annoyed,anguish,gloom,(exposing breasts:1.3),nipples,sitting,frustrated_brow,sigh,frustrated,tearing_up,<lora:tiaowenqun_pony-000004:0.6:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress, \nBREAK\n 1man,man's face out of frame,(show penis),penis on face,facial,cum,cum_on_breasts,from above,pov,`,
    //     desc:'射在脸上',
    //     adetailerPrompt:``,
    // },
    // {
    //     prompt:`score_9,score_8_up,score_7_up,1girl,solo,{女主角},long hair,black hair,swept bangs,thin,slim,makeup,eye shadow,red lips,looking at viewer,indoor,table,((blush)),sitting,long legs,<lora:tiaowenqun_pony-000004:0.6:lbw=1,0,0,0,0,1,1,1,0,0,0,0>,tiaowenqun,bare shoulders,striped dress,strapless dress,short dress,tube dress,from cover,wariza,hands_on_own_thighs,legs_together,`,
    //     desc:'约定考的好之后可以进入',
    //     adetailerPrompt:``,
    // },
    

    
];

// const girlRoleList = [
//     {
//         name:'年糕',
//         loraPrompt:'<lora:niangao_pony:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,niangao,',
//         loraAdetailer:'<lora:niangao_pony:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,niangao,',
//     },
//     {
//         name:'孙雪宁',
//         loraPrompt:'<lora:sunxuening_pony:0.9:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,sunxuening,',
//         loraAdetailer:'<lora:sunxuening_pony:0.9:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,sunxuening,',
//     },
    
    // {
    //     name:'然然同学',
    //     loraPrompt:'<lora:ranran_pony:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, ranran,',
    //     loraAdetailer:'<lora:ranran_pony:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, ranran,',
    // },
    // {
    //     name:'粉红骡子',
    //     loraPrompt:'<lora:fenhongluozi_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, fenhongluozi,',
    //     loraAdetailer:'<lora:fenhongluozi_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, fenhongluozi,',
    // },

    // {
    //     name:'李丽欣',
    //     loraPrompt:'<lora:lilixin_pony:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, lilixin,',
    //     loraAdetailer:'<lora:lilixin_pony:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, lilixin,',
    // },
    // {
    //     name:'OU',
    //     loraPrompt:'<lora:ou_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,ou,',
    //     loraAdetailer:'<lora:ou_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,ou,',
    // },
    // {
    //     name:'丸糯本丸',
    //     loraPrompt:'<lora:wannuo_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,wannuo,',
    //     loraAdetailer:'<lora:wannuo_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,wannuo,',
    // },
    // {
    //     name:'蔡悦',
    //     loraPrompt:'<lora:caiyue_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, caiyue,',
    //     loraAdetailer:'<lora:caiyue_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, caiyue,',
    // },
    // {
    //     name:'陈晨公主',
    //     loraPrompt:'<lora:ccgongzhu_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, ccgongzhu,',
    //     loraAdetailer:'<lora:ccgongzhu_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, ccgongzhu,',
    // },
    // {
    //     name:'陈佳琪',
    //     loraPrompt:'<lora:chenjiaqi_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, chenjiaqi,',
    //     loraAdetailer:'<lora:chenjiaqi_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, chenjiaqi,',
    // },
    // {
    //     name:'小李娜',
    //     loraPrompt:'<lora:lina_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, lina,',
    //     loraAdetailer:'<lora:lina_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, lina,',
    // },
    // {
    //     name:'孙晓艳',
    //     loraPrompt:'<lora:sunxiaoyan_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, sunxiaoyan,',
    //     loraAdetailer:'<lora:sunxiaoyan_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, sunxiaoyan,',
    // },
    // {
    //     name:'孙珍妮',
    //     loraPrompt:'<lora:sunzhenni_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, sunzhenni,',
    //     loraAdetailer:'<lora:sunzhenni_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, sunzhenni,',
    // },
    // {
    //     name:'小迷彩',
    //     loraPrompt:'<lora:xiaomicai_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, xiaomicai,',
    //     loraAdetailer:'<lora:xiaomicai_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, xiaomicai,',
    // },
    // {
    //     name:'小鹿又饿了',
    //     loraPrompt:'<lora:xiaoluele_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, xiaoluele,',
    //     loraAdetailer:'<lora:xiaoluele_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, xiaoluele,',
    // },
    // {
    //     name:'月半琪琪',
    //     loraPrompt:'<lora:yuebanqiqi_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, yuebanqiqi,',
    //     loraAdetailer:'<lora:yuebanqiqi_pony-000004:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>, yuebanqiqi,',
    // },
    // {
    //     name:'张雅倩',
    //     loraPrompt:'<lora:zhangyaqian_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,zhangyaqian',
    //     loraAdetailer:'<lora:zhangyaqian_pony:1:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,zhangyaqian',
    // },
    
    // {
    //     name:'美杜莎',
    //     loraPrompt:'<lora:MEIDUSHA:0.3>',
    //     loraAdetailer:'<lora:MEIDUSHA:1>',
    // },
// ];

const loraList = ["aqian_pony-000002","badanmu_pony","bbjiang_pony","beibei_pony","caiyue_pony","ccgongzhu_pony","chener_pony","chenjiaqi_pony","chirouxiaobai_pony","chongzi_pony","duoduo_pony","enndme_pony","fanfan_pony-000003","feizhu_pony","fenhongluozi_pony-000004","fenhongshaonai_pony","fugui_pony","hanbaobei_pony","haochide_pony","haohaocifan_pony","huan00_pony","huangyi_pony","huasuihua_pony-000004","jialegejia_pony","jiangpeiyao_pony","jiaye_pony","jinyuju_pony-000003","jiuyu_pony","kenkenlanmei_pony","kiki_pony","liangshengdi_pony-000002","lidao_pony","lilixin_pony","lina_pony-000004","linlu_pony","linyan_pony","liuhuangzao_pony","liuxiening_pony","liuxiyu_pony","liuyajing_pony","liuyifei_pony-000003","longxia_pony-000003","luxiaoxi_pony","manman_pony","miki_pony","niangao_pony","niunaixiaozhang_pony","ou_pony","oxiaoo_pony","panbaixue_pony","panmin_pony-000004","pilele_pony","qanna_pony-000002","qianxiao_pony","qiii_pony","qingyan_pony","qiujiaogen_pony","ranran_pony-000002","ranran_pony","sanye_pony","shanhaiguanwu_pony-000003","shenmiao_pony","shenyujie_pony-v1","sona_pony","songxinran_pony","songzi_pony","sunxiaoyan_pony-000004","sunzhenni_pony-000004","taoziwei_pony","waiwai_pony","wangchuran_pony","wangsisi_pony","wangyiwen_pony","wangzainiunaitang_pony-000003","wannuo_pony-000004","weiwei_pony","wujian_pony-000002","xiaoluele_pony","xiaomaoduoyu_pony","xiaomicai_pony","xiaonvshen_pony","xiaoshendianxin_pony","xiaoshiqi_pony-000004","xiaoshua_pony","xiaowusu_pony","xiaowutongxue_pony","xiaoxiaoli_pony","xiaoyu_pony","xiaozhangyu_pony-000004","xiaozhu_pony","xiaozhu_v2_pony-000004","xinxin_pony-v1","xinyi_pony","xixi_pony","xuanbubai_pony","yaming_pony-000004","yangmiemie_pony-000004","yangmiemie_pony","yeyuanna_pony-000004","yizhimianyang_pony-000004","yuanyuan_pony","yuebanqiqi_pony-000004","yueliang_pony","yujun_pony-000004","yuni_pony","yuyujiu_pony","yy_pony","zhaizhaichaoren_pony","zhangyaqian_pony","zhiangzhang_pony","zhoushutong_pony-000004","zhuguan_pony","20241029_jinjia_pony","20241101_duliu_pony","20241101_jianjiacangcang_pony","20241101_surblue_pony","20241101_tiancaishaonv_pony","20241101_wuyaxiu_pony","20241101_xiaoman_pony","20241101_xiaotiancai_pony","20241101_yanyanhuo_pony","20241101_zongrui_pony","20241102_daxiaoqiao_pony","20241102_qiuyueliang_pony","20241102_xiaoxinxing_pony","20241103_beilun_pony","20241103_bobodaren_pony","20241103_chutianguangsi_pony","20241103_jiangbing_pony","20241103_linximuran_pony","20241103_miniwei_pony","20241103_yizhiyang_pony","20241103_zizhi_pony","20241104_jinkesi_pony","20241104_liuyi_pony","20241104_paixiaoxing_pony","20241104_yangsiyu_pony","20241104_yangtongtong_pony","20241104_yingying_pony","20241111_ltongtong_pony","20241111_maicaide_pony","20241111_wanruocaicai_pony","20241111_xiaojingzai_pony","20241111_xiaolei_pony","20241112_likejia_pony","20241112_linvshi_pony","20241112_nidemimi_pony","20241112_xiaopanglian_pony","20241112_xiaowudier_pony","20241112_yuyuanchibubao_pony","20241112_zhangyitong_pony","20241113_lixiaoli_pony","20241113_xiaoruankunkun_pony","20241116_dongmengmeng_pony","20241116_duohedounai_pony","20241116_facaitomato_pony","20241116_hexiaoshu_pony","20241116_jingdou_pony","20241116_liuliu_pony","20241116_meilegeying_pony","20241116_saisai_pony","20241116_sheshezaoqi_pony","20241116_shicaibushicai_pony","20241116_shubuzhi_pony","20241116_xiaodieshuibuxing_pony","20241116_xiaomangguo_pony","20241116_xiaoshuangyu_pony","20241116_xiaotouming_pony","20241116_xiaoyu_pony","20241116_ximeiquqi_pony","20241116_yuhan_pony","20241116_zhaoxiaoshuang_pony","20241116_zhegeyouyou_pony","20241116_zijing_pony","20241117_buzhimingmeishaonv_pony","20241117_fankundejunjun_pony","20241117_chunchun_pony","20241117_huzhien_pony","20241117_shalabusha_pony","20241117_shiyaoyaona_pony","20241117_shiyuanxiaohuang_pony","20241117_wanwan_pony","20241117_xianer_pony","20241117_xiaohuang_pony","20241117_yizemiaoer_pony","20241117_yi_pony","20241120_wangwangxianbei_pony","20241120_wenqing_pony","20241120_youyo_pony","20241120_yusuisui_pony","20241121_fanfan_pony","20241121_mumuzi_pony","20241121_weibaby_pony","20241121_xiaoruanmeimei_pony","20241121_yiliu_pony","20241123_chenyun_pony","20241123_crisle_pony","20241123_guaiyao_pony","20241123_jiangjin_pony","20241123_lilixiaobudian_pony","20241123_seiseijiang_pony","20241123_yiyiqianwei_pony","20241123_zhouer_pony","20241123_zz_aij_pony","20241127_chouchong_pony","20241127_rue_pony","20241127_shaoyao_pony","20241127_sour_pony","20241127_yin_pony","20241128_liuyutong_pony","20241128_shuixilan_pony","20241128_tiankiki_pony","20241128_yumaogou_pony"];

// const loraList = loraFileList.split(' ').map(item=>{
//     const list = item.split('/');
//     return list[list.length-1].replace('.png', '');
// });

// const loraList = ['xiaowusu_pony','jialegejia_pony','jiuyue_pony','zhaizhaichaoren_pony','panbaixue_pony','liuhuangzao_pony','zhuguan_pony', 'zhoushutong_pony-000004', 'zhiangzhang_pony', 'zhangyaqian_pony', 'yuyujiu_pony', 'yuni_pony', 'yujun_pony-000004', 'yuebanqiqi_pony-000004', 'yizhimianyang_pony-000004', 'yeyuanna_pony-000004', 'yangmiemie_pony-000004', 'yaming_pony-000004', 'xuanbubai_pony', 'xixi_pony', 'xinxin_pony-v1', 'xiaxingxing_pony', 'xiaozhu_v2_pony-000004', 'xiaozhu_pony', 'xiaozhangyu_pony-000004', 'xiaoyu_pony', 'xiaoyishimei_pony-000004', 'xiaoxiaoli_pony', 'xiaoshua_pony', 'xiaoshiqi_pony-000004', 'xiaoshendianxin_pony', 'xiaonvshen_pony', 'xiaomicai_pony', 'xiaomaoduoyu_pony', 'xiaoluele_pony', 'wujian_pony-000002', 'weiwei_pony', 'wannuo_pony-000004', 'wangzainiunaitang_pony-000003', 'wangyiwen_pony', 'wangchuran_pony', 'waiwai_pony', 'taoziwei_pony', 'sunzhenni_pony-000004', 'sunxuening_pony', 'sunxiaoyan_pony-000004', 'songzi_pony', 'shuibingyue_pony', 'shenyujie_pony-v1', 'shenmiao_pony', 'shanhaiguanwu_pony-000003', 'sanye_pony', 'ranran_pony', 'ranran_pony-000002', 'qiu_pony', 'qanna_pony-000002', 'pilele_pony', 'panmin_pony-000004', 'oxiaoo_pony', 'ou_pony', 'niunaixiaozhang_pony', 'niangao_pony', 'miki_pony', 'manman_pony', 'longxia_pony-000003', 'liuyifei_pony-000003', 'liuyajing_pony', 'liuxiyu_pony', 'liuxiening_pony', 'linyan_pony', 'linlu_pony', 'lina_pony-000004', 'lilixin_pony', 'liangshengdi_pony-000002', 'kiki_pony', 'kenkenlanmei_pony', 'jiuyu_pony', 'jinyuju_pony-000003', 'jiangpeiyao_pony', 'ibear_pony', 'hulianxin_pony', 'huasuihua_pony-000004', 'hanbaobei_pony', 'gemjia_pony', 'fugui_pony', 'fenhongshaonai_pony', 'fenhongluozi_pony-000004', 'feizhu_pony', 'fanfan_pony-000003', 'enndme_pony', 'duoduo_pony', 'chongzi_pony', 'chirouxiaobai_pony', 'chenjiaqi_pony', 'chener_pony', 'ccgongzhu_pony', 'caiyue_pony', 'bbjiang_pony', 'baiyangmeimei_pony-000004', 'Qiii_pony'];

const girlRoleList = loraList.map(item=>{
    return {
        name: item,
        loraPrompt:`<lora:${item}:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,`,
        loraAdetailer:`<lora:${item}:0.8:lbw=1,0,0,0,0,0,1,1,1,0,0,0>,`
    }
});

console.log(girlRoleList);

const girlRoleList1 = girlRoleList.slice(0,Math.floor(girlRoleList.length/4));
const girlRoleList2 = girlRoleList.slice(Math.floor(girlRoleList.length/4),Math.floor(girlRoleList.length/2));
const girlRoleList3 = girlRoleList.slice(Math.floor(girlRoleList.length/2),Math.floor(girlRoleList.length*0.75));
const girlRoleList4 = girlRoleList.slice(Math.floor(girlRoleList.length*0.75),girlRoleList.length);

console.log('girlRoleList1:', girlRoleList1.length);
console.log('girlRoleList2:', girlRoleList2.length);
console.log('girlRoleList3:', girlRoleList3.length);
console.log('girlRoleList4:', girlRoleList4.length);


export const getTeacherPromptList = ()=>{
    return commonPosPromptList;
}

export const getTeacherGirlRoleList = ()=>{
    return girlRoleList3;
}
