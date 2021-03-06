const colors = require('colors/safe')

module.exports.log = (x) => {
  console.log(colors.white(x))
}

module.exports.ok = (x) => {
  console.log(colors.green(x))
}

module.exports.error = (x) => {
  console.log(colors.red(x))
}

module.exports.warn = (x) => {
  console.log(colors.yellow(x))
}

module.exports.debug = (x) => {
  if (share.config.debug) {
    console.log(colors.magenta(x))
  }
}

const share = require('../share')
