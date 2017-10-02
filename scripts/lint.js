const path = require('path');
const spawn = require('cross-spawn');
const { resolveBin } = require('../utils');

const config = ['--config', path.join(__dirname, '../config/eslintrc.js')];
const filesToApply = ['.'];

const result = spawn.sync(resolveBin('eslint'), [...config, '--fix', ...filesToApply], { stdio: 'inherit' });

process.exit(result.status);
