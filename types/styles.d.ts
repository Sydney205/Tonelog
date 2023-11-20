declare module "tonelog" {
  export interface ColorFunctions {
    (message: string): string;
    error: ColorFunctions;
    warning: ColorFunctions;
    success: ColorFunctions;
    info: ColorFunctions;
    reset: ColorFunctions;
    red: ColorFunctions;
    green: ColorFunctions;
    yellow: ColorFunctions;
    blue: ColorFunctions;
    purple: ColorFunctions;
    cyan: ColorFunctions;
    gray: ColorFunctions;
    white: ColorFunctions;
    black: ColorFunctions;
    bright_red: ColorFunctions;
    bright_green: ColorFunctions;
    bright_yellow: ColorFunctions;
    bright_blue: ColorFunctions;
    bright_purple: ColorFunctions;
    bright_cyan: ColorFunctions;
    bright_white: ColorFunctions;
    bg_success: ColorFunctions;
    bg_info: ColorFunctions;
    bg_warning: ColorFunctions;
    bg_error: ColorFunctions;
    bg_black: ColorFunctions;
    bg_red: ColorFunctions;
    bg_green: ColorFunctions;
    bg_yellow: ColorFunctions;
    bg_blue: ColorFunctions;
    bg_purple: ColorFunctions;
    bg_cyan: ColorFunctions;
    bg_white: ColorFunctions;
    orange: ColorFunctions;
    pink: ColorFunctions;
    sky_blue: ColorFunctions;
    brown: ColorFunctions;
    teal: ColorFunctions;
    lavender: ColorFunctions;
    maroon: ColorFunctions;
    olive: ColorFunctions;
    indigo: ColorFunctions;
    gold: ColorFunctions;
    silver: ColorFunctions;
    turquoise: ColorFunctions;
    coral: ColorFunctions;
    lilac: ColorFunctions;
    mint_green: ColorFunctions;
    mustard: ColorFunctions;
    salmon: ColorFunctions;
    chocolate_brown: ColorFunctions;
    pale_pink: ColorFunctions;
    deep_purple: ColorFunctions;
  }

  export interface logLevels {
    (message: string): string;
    success: logLevels;
    info: logLevels;
    warning: logLevels;
    error: logLevels;
  }
}
