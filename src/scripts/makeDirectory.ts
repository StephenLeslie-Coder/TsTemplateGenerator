import * as fs from "fs"

export const createDirectory = (path:string):Promise<boolean>=>{

    return new Promise((resolve, reject) => {
        //Check if directory already exist
        if(fs.existsSync(path)){
            resolve(true)
        }

        try{

        //try to make directory if it doesnt exist
        fs.mkdirSync(path)

        resolve(true)
        
        }catch(error){
            reject(error)

        }
            
        })
    

}