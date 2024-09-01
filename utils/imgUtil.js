const fs = require('fs');


export const img2Base64 = (imgPath) =>{
    // 读取图片文件
    const imageBuffer = fs.readFileSync(imgPath);
    // 将Buffer转为Base64
    const base64Image = imageBuffer.toString('base64');
    return base64Image;
}

