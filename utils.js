const path = require('path');
const fs = require('fs');
const which = require('which');

function resolveBin(moduleName, {executable = moduleName, cwd = process.cwd()} = {}) {
  let pathFromWhich;
  try {
    pathFromWhich = fs.realpathSync(which.sync(executable));
  } catch (err) {
    // could not be found, try resolving local version of module
  }
  try {
    const modulePkgPath = require.resolve(`${moduleName}/package.json`);
    const modulePkgDir = path.dirname(modulePkgPath);
    const { bin } = require(modulePkgPath);
    const binPath = typeof bin === 'string' ? bin : bin[executable];
    const fullPathToBin = path.join(modulePkgDir, binPath);
    if (fullPathToBin === pathFromWhich) {
      return executable;
    }
    return fullPathToBin.replace(cwd, '.');
  } catch (error) {
    if (pathFromWhich) {
      return executable;
    }
    throw error;
  }
}

module.exports = {
  resolveBin
}
