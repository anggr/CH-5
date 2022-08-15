const fs = require('fs')

const retreiveAllData = () => {
    return JSON.parse(fs.readFileSync('./user.json', 'utf-8'))
}

module.exports = {
    retreiveAllData
}