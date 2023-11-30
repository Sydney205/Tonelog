declare module "tonelog" {
/**
   * Color and log levels interface
   */
  interface ColorMethods {
    [key: string]: (message: string) => string;
  }
  interface LogLevelMethods {
    [key: string]: (message: string) => string;
  }

  interface StringFunction {
    (message: string): string;
  }

  /**
   * Tone object with color methods
   */
  const tone: ColorMethods & {
    error: StringFunction;
    warning: StringFunction;
    success: StringFunction;
    info: StringFunction;
    reset: StringFunction;
    red: StringFunction;
    green: StringFunction;
    yellow: StringFunction;
    blue: StringFunction;
    purple: StringFunction;
    cyan: StringFunction;
    gray: StringFunction;
    white: StringFunction;
    bright_red: StringFunction;
    bright_green: StringFunction;
    bright_yellow: StringFunction;
    bright_blue: StringFunction;
    bright_purple: StringFunction;
    bright_cyan: StringFunction;
    bright_white: StringFunction;
    bg_success: StringFunction;
    bg_info: StringFunction;
    bg_warning: StringFunction;
    bg_error: StringFunction;
    bg_black: StringFunction;
    bg_red: StringFunction;
    bg_green: StringFunction;
    bg_yellow: StringFunction;
    bg_blue: StringFunction;
    bg_purple: StringFunction;
    bg_cyan: StringFunction;
    bg_white: StringFunction;
    orange: StringFunction;
    pink: StringFunction;
    sky_blue: StringFunction;
    brown: StringFunction;
    teal: StringFunction;
    lavender: StringFunction;
    maroon: StringFunction;
    olive: StringFunction;
    indigo: StringFunction;
    gold: StringFunction;
    silver: StringFunction;
    turquoise: StringFunction;
    coral: StringFunction;
    lilac: StringFunction;
    mint_green: StringFunction;
    mustard: StringFunction;
    salmon: StringFunction;
    chocolate_brown: StringFunction;
    pale_pink: StringFunction;
    deep_purple: StringFunction;
  };

  /**
   * toneLevels object with log levels
   */
  const toneLevel: LogLevelMethods & {
    success: StringFunction;
    info: StringFunction;
    warning: StringFunction;
    error: StringFunction;
  };

  const typed: (
    strings?: any[],
    delay?: number | undefined,
    typeSpeed?: number | undefined,
    backspaceSpeed?: number | undefined
  ) => Promise<any>;

  const useTimestamp: (message: any) => string;

  function tonelog(color: any, message: any): void;
}
