'use strict';

var __createBinding = (undefined && undefined.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (undefined && undefined.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (undefined && undefined.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
// import * as github from '@actions/github' // 裝了這個項目，node_modules還會衍伸出很多額外的項目，會變得有點大，差不多多了5MB
try {
    const noteMsg = core.getInput('note');
    const author = core.getInput('author');
    console.log(`${author}: ${noteMsg}!`);
    const time = new Date().toTimeString();
    core.setOutput("status", `${time}:ok!`);
    /* 這可以看到上傳者的一些基本訊息: 如果不是很在意就可以省略
    author{email,name,username}, committer{email,name,username}, message, timestamp, url, ...
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
     */
}
catch (error) {
    core.setFailed(error.message);
}
