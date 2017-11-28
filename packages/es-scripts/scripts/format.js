const path = require('path');
const spawn = require('cross-spawn');
const args = require('minimist')(process.argv.slice(2));

const { resolveBin } = require('../utils');

const write = '--write';
const singleQuotes = '--single-quote';
const files = args.path ? `${path.resolve(args.path)}/**/*.js` : './**/*.js';

const result = spawn.sync(resolveBin('prettier'), [singleQuotes, write, files], { stdio: 'ignore' });

process.exit(result.status);
