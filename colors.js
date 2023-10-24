const colors = {
  // Semantic color names
  error: "\x1B[31m",
  warning: "\x1B[33m", // yellow
  success: "\x1B[32m", // green
  info: "\x1B[36m",
  reset: "\x1B[0m", // white

  // Major colors
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  purple: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m",

  // Bright colors
  bright_red: "\x1B[91m",
  bright_green: "\x1B[92m",
  bright_yellow: "\x1B[93m",
  bright_blue: "\x1B[94m",
  bright_purple: "\x1B[95m",
  bright_cyan: "\x1B[96m",
  bright_white: "\x1B[97m",

  // Background colors
  bg_black: "\x1B[40m",
  bg_red: "\x1B[41m",
  bg_green: "\x1B[42m",
  bg_yellow: "\x1B[43m",
  bg_blue: "\x1B[44m",
  bg_purple: "\x1B[45m",
  bg_cyan: "\x1B[46m",
  bg_white: "\x1B[47m",

  // Special colors[1]
  orange: "\x1B[38;5;208m",
  pink: "\x1B[38;5;205m",
  sky_blue: "\x1B[38;5;117m",
  brown: "\x1B[38;5;130m",
  teal: "\x1B[38;5;51m",
  lavender: "\x1B[38;5;99m",
  maroon: "\x1B[38;5;208m",
  olive: "\x1B[38;5;100m",
  indigo: "\x1B[38;5;54m",
  gold: "\x1B[38;5;220m",
  silver: "\x1B[38;5;7m",

  // Special colors[2]
  turquoise: "\x1B[38;5;80m",
  coral: "\x1B[38;5;203m",
  lilac: "\x1B[38;5;183m",
  mint_green: "\x1B[38;5;156m",
  mustard: "\x1B[38;5;214m",
  salmon: "\x1B[38;5;209m",
  chocolate_brown: "\x1B[38;5;52m",
  pale_pink: "\x1B[38;5;211m",
  deep_purple: "\x1B[38;5;53m",

  invisible: "\x1B[30m",
};

module.exports = new Proxy(colors, {
  get(colors, color) {
    if (color in colors) {
      return colors[color];
    }
    return colors.default;
  },
});
