const { colors, addColor, logLevels } = require("./styles");

// using color Log
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

// Using Timestamp
const useTimestamp = (message) => {
  let timestamp = new Date().toLocaleTimeString();
  return `${tone.bright_white(`[${timestamp}]`)} - ${message}`;
};

// create Log levels
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

// Typing effect
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

// Old Style
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
