const path = require('path');
const args = require('minimist')(process.argv.slice(2));

let config = require('../config/jest-config');
const pkgJson = path.join(process.cwd(), 'package.json');
const possibleConfigOptions = require(pkgJson);

const hasArg = argument => args[argument] !== undefined;

config = hasArg('report') ? Object.assign({}, config, { testResultsProcessor: "jest-teamcity-reporter" }) : config;
config = hasArg('cover') ? Object.assign({}, config, { collectCoverage: true }) : config;

const jestConfig = possibleConfigOptions.jest !== undefined ?
                   Object.assign({}, config, possibleConfigOptions.jest) :
                   config;

const configArguments = ['--config', JSON.stringify(jestConfig)];

const watch = hasArg('watch') ? '--watch' : '';

require('jest').run([watch, ...configArguments]);
