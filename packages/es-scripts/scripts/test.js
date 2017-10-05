const path = require('path');
const watch = process.argv.slice(2).includes('--watch') ? '--watch' : '';
const pkgJson = path.join(process.cwd(), 'package.json');

const knownConfig = require('../config/jest-config');
const possibleConfigOptions = require(pkgJson);

const jestConfig = possibleConfigOptions.jest !== undefined ?
               Object.assign({}, knownConfig, possibleConfigOptions.jest) :
               knownConfig;

const config = ['--config', JSON.stringify(jestConfig)];

require('jest').run([watch, ...config]);
