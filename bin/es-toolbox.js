#!/usr/bin/env node

const path = require('path');
const spawn = require('cross-spawn');

function attemptResolve(...args) {
  try {
    return require.resolve(...args);
  } catch (error) {
    return null;
  }
}

const [executor, ignoredBin, script, ...args] = process.argv;
const relativeScriptPath = path.join(__dirname, '../scripts', script);
const scriptPath = attemptResolve(relativeScriptPath);

const result = spawn.sync('node', [scriptPath, ...args], {
  stdio: 'inherit'
});

if (result.signal) {
  if (result.signal === 'SIGKILL') {
      console.warn('The process ended before the script could be completed');
  } else if (result.signal === 'SIGTERM') {
      console.warn('The process ended beffore the script could be completed');
  }
  process.exit(1);
}
process.exit(result.status);
