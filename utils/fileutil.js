import fs from 'fs';

export const saveBase64Image = (filepath, base64) => {
    const dataBuffer = Buffer.from(base64, 'base64');
    return new Promise((res, rej)=>{
        fs.writeFile(filepath, dataBuffer, (err)=>{
            if(err){
                rej(err);
            }else{
                res(filepath);
            }
        })
    });

}