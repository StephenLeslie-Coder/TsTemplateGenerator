import * as fs from "fs"
import path from "path"
let file = path.join(__dirname,'../config/tsconfig.txt')


export const generateTsConfig= (path:string):Promise<boolean>=>{
    // console.log(process.cwd());
    
    
    return new Promise ((resolve,reject)=>{
        //Read tsconfig template
        fs.readFile(file,{encoding: 'utf-8'},(err,data)=>{
            if(err) reject(err)
            
            
            //Attempt to create and write template data to tsconfig.json
                fs.writeFile(`${path}/tsconfig.json`,data,(err=>{
                    if (err) reject(err)
                    
                    
                    resolve(true)
                }))
            
        })
    })
}
//fs.readFileSync("src/config/typescriptTemp.txt")