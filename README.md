# TsTemplateGenerator
This is a command line interface that automates the pesky task of creating a typescript project structure with every new project.

## Installation 
```bash
npm install -g tsgentr
```
## Usage
### **Help**
By typing command below the CLI will output all the available Arguments and Options.
```bash
tsgentr -h
Arguments:
  foldername  Name of folder to create

Options:
  -i, --init  NPM init will be run for you if option is specified
  -h, --help  display help for command
```
### **Argument**
A required argument of the folder name you want to create is needed for the CLI to run. A path should not be placed for the argument; Navigate to the folder where you want to create the project and type command below.(Note: quotation aren't needed)
```bash
tsgentr "foldername"
```
## **Options**
### **Init**
If you want the CLI to run the command of "npm init" for you then this can be done by typing the following.
```bash
tsgentr "foldername" -i
```
```bash
tsgentr "foldername" --init
```
