/* some comment */
const fs = require('fs');

const fileExists = (p /*string*/) => fs.existsSync(p);

/* Why are we doing this??? */
const BLOCK_COMMENT_START = '/*';
/* It doesn't matter /* if we nest starts */
const BLOCK_COMMENT_END = '*/';

const inFile = (filepath /* filepath is of the type string */) => {
    const RE = new RegExp(/(\/\*.*\*\/)/, "gm");
    if (fileExists(filepath)) {
        try {
            const data = fs.readFileSync(filepath).toString();
            const matches = data.match(RE);
            return matches || [];
        } catch (e) {
            throw new Error(e.message);
        }
    }
};

module.exports = {
    inFile
};
