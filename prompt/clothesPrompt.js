const clothesPromptList = [
    {
        prompt:'backless outfit',
        desc:'露背装',
    },{
        prompt:'serafuku',
        desc:'日式水手服',
    },{
        prompt:'sailor dress',
        desc:'水手服',
    },{
        prompt:'underboob cutout, super short jeans',
        desc:'下切胸口',
    },{
        prompt:'back cutout, super short jeans',
        desc:'后背切口',
    },{
        prompt:'heart cutout, dress',
        desc:'心型切口',
    },{
        prompt:'off-shoulder sweater, super short jeans',
        desc:'露肩毛衣',
    },{
        prompt:'turtleneck sweater, super short jeans',
        desc:'高领毛衣',
    },{
        prompt:'sweater dress',
        desc:'毛衣连身裙',
    },{
        prompt:'halter dress',
        desc:'绕颈连身裙',
    },{
        prompt:'backless dress',
        desc:'露背连身裙',
    },{
        prompt:'tank top, super short jeans',
        desc:'背心',
    },{
        prompt:'chiffon dress',
        desc:'雪纺连衣裙',
    },{
        prompt:'strapless leotard, super short jeans',
        desc:'无肩带紧身衣',
    },{
        prompt:'leotard, super short jeans',
        desc:'紧身衣',
    },{
        prompt:'china dress',
        desc:'旗袍',
    },{
        prompt:'cheongsam',
        desc:'旗袍',
    },{
        prompt:'gym_uniform',
        desc:'运动制服'
    },{
        prompt:'see-through:evening dress',
        desc:'透明晚礼服'
    },{
        prompt: 'shoulder cutout',
        desc: '肩膀切口'
    },{
        prompt:'collared shirt, super short jeans',
        desc:'高领衬衫',
    },{
        prompt:'volleyball uniform',
        desc:'排球服',
    },{
        prompt:'sportswear',
        desc:'运动服',
    },{
        prompt:'competition swimsuit',
        desc:'竞赛泳衣',
    },{
        prompt:'string bikini',
        desc:'系绳比基尼',
    },{
        prompt:'Miko clothing',
        desc:'巫女服',
    },{
        prompt:'poncho, super short jeans',
        desc:'小披风',
    },{
        prompt:'space suit',
        desc:'宇航服',
    },{
        prompt:'latex_bodysuit',
        desc:'乳胶衣',
    },{
        prompt:'lab coat',
        desc:'实验袍',
    },{
        prompt:'casual wear',
        desc:'休闲服(素上衣、牛仔裤)',
    },{
        prompt:'summer long skirt',
        desc:'夏日长裙',
    },{
        prompt:'convenience store uniforms',
        desc:'便利店工作服',
    },{
        prompt:'thong leotard',
        desc:'丁字紧身衣',
    },{
        prompt:'ribbed sweater',
        desc:'罗纹毛衣',
    },{
        prompt:'crop top, super short jeans',
        desc:'露腹短上衣',
    },{
        prompt:'racing suit',
        desc:'赛车服',
    },{
        prompt:'nurse',
        desc:'护士',
    },{
        prompt:'business suit',
        desc:'西装',
    },{
        prompt:'bathrobe',
        desc:'浴袍',
    },{
        prompt:'Maid dress',
        desc:'女仆装',
    },{
        prompt:'over coat',
        desc:'大衣',
    },{
        prompt:'trench_coat',
        desc:'战壕风衣',
    },{
        prompt:'evening dress',
        desc:'晚礼服',
    },{
        prompt:'combat suit',
        desc:'战斗服',
    },{
        prompt:'strapless tank top, navel cutout, super short jeans',
        desc:'抹胸',
    },{
        prompt:'fishnet top, super short jeans',
        desc:'网纹衣',
    },{
        prompt:'spider web print',
        desc:'蛛网纹路',
    },{
        prompt:'eather jacket, super short jeans',
        desc:'皮夹克',
    },{
        prompt:'pajamas',
        desc:'睡衣',
    },{
        prompt:'nightgown',
        desc:'睡衣2',
    },
]

const selfClothesList = [
    {
        prompt:'((bare shoulders)),lace dress,(lace skirt),tight dress,(tube top:1.2),(sleeveless:1.2),(short dress:1.2),blue dress',
        desc:'蓝色包臀裙',
    },{
        prompt: 'tube top,red camisole,skinny jeans,low waist,navel exposed',
        desc:'红色吊带，牛仔裤',
    },{
        prompt:'((bare shoulders)),cotton silk fabric dress,pleat patterns on the dress,(tube top),(sleeveless),(short dress),red dress',
        desc: '红色绵绸连衣裙'
    },{
        prompt:'white kitten pattern T-shirt,slim fit T-shirt,(long sleeves),bare shoulders,wide neckline,(low collar),(show collarbone:1.2),white kitten pattern shorts,girdle,white long stockings,top does not reach the waist',
        desc: '露肩长袖T，超短裤，白丝袜'
    },{
        prompt:'black super short jacket,black tube top,exposed belly button,abdominal,(black low rise shorts),buttons on the pants',
        desc:'黑色外套，抹胸，低腰短裤'
    },{
        prompt:'silver camisole dress,tube top,(sleeveless),(short dress:1.2),bare shoulders,tight short dress,sequins',
        desc:'银色亮片连衣裙'
    },{
        prompt:'(light yellow tube top),lace strapless tube top,white short sleeves,white lace sleeves,off-shoulders,belly button exposed,black low-waisted denim trousers,(exposed hip joint)',
        desc:'黄色蕾丝抹胸，牛仔裤'
    },{
        prompt:'(black one-shoulder T-shirt:1.4),black T-shirt,(ultra-short sleeves),large neckline,white cargo shorts,short shorts,white belt,(exposing the navel)',
        desc:'黑色露肩T恤，白色超短工装裤'
    },{
        prompt:'Black and white striped long-sleeved shirt,top zipper,large neckline,collarbone,low collar,off-shoulders,belly button exposed,red shorts',
        desc:'条纹上衣，红色热裤'
    }
]
export const getClothesList = ()=>{
    return clothesPromptList;
}

export const getSelfClothesList = ()=>{
    return selfClothesList;
}

export const getRandomClothes = ()=>{

}