const colors = require("./colors");

const tonelog = (level, message) => {
  if (level == "success") {
    console.log(`${colors.success}${message}${colors.default}`);
  } else if (level == "error") {
    console.log(`${colors.error}${message}${colors.default}`);
  } else if (level == "warning") {
    console.log(`${colors.warning}${message}${colors.default}`);
  } else if (level == "blue") {
    console.log(`${colors.blue}${message}${colors.default}`);
  } else if (level == "light-blue") {
    console.log(`${colors.lightBlue}${message}${colors.default}`);
  } else if (level == "pink") {
    console.log(`${colors.pink}${message}${colors.default}`);
  } else if (level == "invisible") {
    console.log(`${colors.invisible}${message}${colors.default}`);
  } else {
    console.log(`${colors.default}${message}`);
  }
};

module.exports = tonelog;
