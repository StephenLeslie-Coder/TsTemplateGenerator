"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var shell = require('shelljs');
var init = function (path) {
    shell.exec("cd " + path + " && npm init --yes", { silent: true });
};
exports.init = init;
