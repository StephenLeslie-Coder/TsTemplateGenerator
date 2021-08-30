let foldername='/major'

import * as fs from "fs"
fs.readFile("src/config/tsconfig.txt",{encoding: 'utf-8'},(err,data)=>{
    
    fs.writeFile('tsconfig.json',data,(err=>{
        if (err) console.log(err);
        
    }))
    
})

// console.log(fs.mkdirSync('/Users/stephenleslie/Documents/Projects/major'))
