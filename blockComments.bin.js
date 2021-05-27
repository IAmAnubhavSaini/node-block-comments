#!/usr/bin/env node

const {inFile} = require('./index');
const {join} = require('path');

const fileName = join(__dirname, process.argv[2] || './index.js');
console.log(fileName);

console.log(inFile(fileName).map(c => `\t${c}`).join('\n'));
