const path = require('path');
const spawn = require('cross-spawn');
const { resolveBin } = require('../utils');

const write = '--write';
const singleQuotes = '--single-quote';
const files = "./**/*.js";

const result = spawn.sync(resolveBin('prettier'), [singleQuotes, write, files], { stdio: 'ignore' });

process.exit(result.status);
