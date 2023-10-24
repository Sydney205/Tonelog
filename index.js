const colors = require("./colors");

const tonelog = (level, message) => {
    console.log(`${colors[level]}${message}${colors.default}`);
};

module.exports = tonelog;
