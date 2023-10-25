const colors = require("./colors");

const tonelog = (level, message) => {
  console.log(`${colors[level]}${message}${colors.reset}`);
};

module.exports = tonelog;
