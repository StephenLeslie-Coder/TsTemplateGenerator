var shell = require('shelljs')
import * as fs from "fs"


export const init= (path:string)=>{
    shell.exec(`cd ${path} && npm init --yes`,{silent:true})
}