/**
 * @module tonelog
 */


const { colors, addColor, logLevels } = require("./styles");

/**
 * Creating a color log object with methods for all color.
 * @returns { Object } - Color log methods.
 */
const colorLog = () => {
  const colorList = {};

  for (const color in colors) {
    colorList[color] = (message) => {
      return addColor(color, message);
    };
  }

  return colorList;
};

const tone = colorLog();



/**
 * Adds the current timestamp to the provided message.
 * @param { string } message - The log message.
 * @returns { string } - The log message with a timestamp.
 */
const useTimestamp = (message) => {
  let timestamp = new Date().toLocaleTimeString();
  return `${tone.bright_white(`[${timestamp}]`)} - ${message}`;
};



/**
 * Creating a log method for different log levels.
 * @returns { Object } - Log methods for each level.
 */
const createLevelLog = () => {
  let Options = {};

  logLevels.forEach((level) => {
    Options[level] = (message) => {
      const msgColor = addColor(level, message); // Coloring the message according to it's level
      return `${tone[`bg_${level}`](` ${level.toUpperCase()} `)} ${msgColor}`;
    };
  });

  return Options;
};

const toneLevel = createLevelLog();



/**
 * Typing effect on logging.
 * @param { string[] } strings - Array of strings to type.
 * @param { number } [delay=1000] - Delay before starting to type.
 * @param { number } [typeSpeed=50] - Speed of typing characters.
 * @param { number } [backspaceSpeed=50] - Speed of backspacing characters.
 * @returns { Promise } - Promise resolved when typing is complete.
 */
const typed = (
  strings = [],
  delay = 1000,
  typeSpeed = 50,
  backspaceSpeed = 50
) => {
  return new Promise((resolve) => {
    let index = 0;

    const startTyping = () => {
      if (index < strings.length) {
        const string = strings[index];
        let counter = 0;

        setTimeout(() => {
          // Typing
          const typeInterval = setInterval(() => {
            process.stdout.write(string[counter]);
            counter++;

            if (counter == string.length) {
              clearInterval(typeInterval);

              // Checking if it's the last string
              if (index < strings.length - 1) {
                // Start backspacing
                setTimeout(() => {
                  const backspaceInterval = setInterval(() => {
                    process.stdout.write("\b \b");
                    counter--;

                    if (counter == 0) {
                      clearInterval(backspaceInterval);

                      // Moving on to the next string
                      index++;
                      startTyping();
                    }
                  }, backspaceSpeed);
                }, delay);
              } else {
                // Resolve immediately for the last string
                resolve();
                console.log("");
              }
            }
          }, typeSpeed);
        }, delay);
      } else {
        // Resolve if there are no strings to type
        resolve();
      }
    };

    // Start typing the first string
    startTyping();
  });
};

/**
 * Logs a message with a specified color.
 * @type {Function}
 * @param {string} color - The color of the log message.
 * @param {string} message - The log message.
 */
function tonelog(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

module.exports = {
  tone,
  toneLevel,
  useTimestamp,
  typed,
  tonelog,
};
