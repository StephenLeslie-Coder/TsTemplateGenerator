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
Object.defineProperty(exports, "__esModule", { value: true });
exports.structureDirectory = void 0;
var fs = __importStar(require("fs"));
var structureDirectory = function (path) {
    try {
        fs.mkdirSync(path + '/doc');
        fs.mkdirSync(path + '/dist');
        fs.mkdirSync(path + '/src');
        fs.mkdirSync(path + '/src/test');
        fs.mkdirSync(path + '/src/util');
        fs.mkdirSync(path + '/src/lib');
        console.log("Everything was successful");
    }
    catch (error) {
        console.log("An error occured: Could not generate directory");
        console.log("Error:", error);
    }
};
exports.structureDirectory = structureDirectory;
