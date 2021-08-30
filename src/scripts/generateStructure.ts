import * as fs from "fs"


export const structureDirectory= (path:string)=>{
    try{
        fs.mkdirSync(path+'/doc')
        fs.mkdirSync(path+'/dist')
        fs.mkdirSync(path+'/src')
        fs.mkdirSync(path+'/src/test')
        fs.mkdirSync(path+'/src/util')
        fs.mkdirSync(path+'/src/lib')
        console.log("Everything was successful");
    }catch(error){

        console.log("An error occured: Could not generate directory");
        console.log("Error:",error);
        

    }
        

}