/* some comment */
const fs = require('fs')

const fileExists = filepath => fs.existsSync(filepath)

const BLOCK_COMMENT_START = '/*'
const BLOCK_COMMENT_END = '*/'

const inFile = (filepath) => {
  /* @TODO */
}

module.exports = {
  inFile
}
