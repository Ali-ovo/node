const fs = require('fs')

const reader = fs.createReadStream('./foo.txt')
const writer = fs.createWriteStream('./bar.txt')

reader.pipe(writer)
writer.close()