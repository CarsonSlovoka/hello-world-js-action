import * as core from '@actions/core'
import * as github from '@actions/github'

try {
    const noteMsg = core.getInput('note')
    const author = core.getInput('author')
    console.log(`${author}: ${noteMsg}!`)
    const time = new Date().toTimeString()
    core.setOutput("status", `${time}:ok!`)
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
} catch (error: any) {
    core.setFailed(error.message)
}
