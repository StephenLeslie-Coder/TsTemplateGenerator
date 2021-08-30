"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTsConfig = void 0;
var fs = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var file = path_1.default.join(__dirname, '../config/tsconfig.txt');
var generateTsConfig = function (path) {
    // console.log(process.cwd());
    return new Promise(function (resolve, reject) {
        //Read tsconfig template
        fs.readFile(file, { encoding: 'utf-8' }, function (err, data) {
            if (err)
                reject(err);
            //Attempt to create and write template data to tsconfig.json
            fs.writeFile(path + "/tsconfig.json", data, (function (err) {
                if (err)
                    reject(err);
                resolve(true);
            }));
        });
    });
};
exports.generateTsConfig = generateTsConfig;
//fs.readFileSync("src/config/typescriptTemp.txt")
