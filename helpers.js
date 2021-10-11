function successfullMessage(msg) {
    return "✅ *Draik_bot*:  ```" + msg + "```"
}

function errorMessage(msg) {
    return "🛑 *Draik_bot*:  ```" + msg + "```"
}

function infoMessage(msg) {
    return "• *Draik_bot :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}