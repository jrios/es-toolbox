const path = require('path');
const spawn = require('cross-spawn');
const args = require('minimist')(process.argv.slice(2));

const { resolveBin } = require('../utils');

const config = ['--config', path.join(__dirname, '../config/eslintrc.js')];
const lintPath = args.path ? args.path : '.';

const result = spawn.sync(resolveBin('eslint'), [...config, '--fix', lintPath], { stdio: 'inherit' });

process.exit(result.status);
