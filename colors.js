const colors = {
  error: "\x1b[31m", // red
  red: "\x1b[31m",
  warning: "\x1B[33m", // yellow
  yellow: "\x1B[33m",
  success: "\x1B[32m", // green
  green: "\x1B[32m",
  blue: "\x1B[34m",
  pink: "\x1B[35m",
  magenta: "\x1B[35m",
  default: "\x1B[0m", // reset
  reset: "\x1B[0m",
  info: "\x1B[36m",
  cyan: "\x1B[36m",
  invisible: "\x1B[30m",
  black: "\x1B[30m",

  berror: "\x1b[41m", // red
  bred: "\x1b[41m",
  bwarning: "\x1B[43m", // yellow
  byellow: "\x1B[43m",
  bsuccess: "\x1B[42m", // green
  bgreen: "\x1B[42m",
  bblue: "\x1B[44m",
  bpink: "\x1B[45m",
  bmagenta: "\x1B[45m",
  binfo: "\x1B[46m",
  bcyan: "\x1B[46m",
  binvisible: "\x1B[40m",
  bblack: "\x1B[40m",
};

module.exports = new Proxy(colors, {
  get(colors, color) {
    if (color in colors) {
      return colors[color];
    }
    return colors.default;
  },
});
