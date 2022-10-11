import * as core from '@actions/core'
// import * as github from '@actions/github' // 裝了這個項目，node_modules還會衍伸出很多額外的項目，會變得有點大，差不多多了5MB

try {
    const noteMsg = core.getInput('note')
    const author = core.getInput('author')
    console.log(`${author}: ${noteMsg}!`)
    const time = new Date().toTimeString()
    core.setOutput("status", `${time}:ok!`)
    /* 這可以看到上傳者的一些基本訊息: 如果不是很在意就可以省略
    author{email,name,username}, committer{email,name,username}, message, timestamp, url, ...
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
     */
} catch (error: any) {
    core.setFailed(error.message)
}
