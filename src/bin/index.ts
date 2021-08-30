#!/usr/bin/env node
import { Command } from 'commander';
import { createDirectory, generateTsConfig, structureDirectory,init } from "../scripts";

const program = new Command()

program.option("-i, --init","NPM init will be run for you if option is specified")
//Creates a folder with the name passed
program.argument('<foldername>','Name of folder to create')
.action((foldername)=>{
     let absolutePath = process.cwd()+'/'+foldername
     createDirectory(absolutePath).then(async (flag)=>{
          if(flag){
               try{
                    let success = await generateTsConfig(absolutePath)
                    if(success){
                         structureDirectory(absolutePath)
                    }
                    if(options.init) init(absolutePath)
               }catch(error){
                    console.log("An error occured:",error);
                    
               }
          }
     })
     
    
})

let options = program.opts()
program.parse(process.argv)
//console.log(options);


