<h1 align="center" style="font-weight: bold; font-size: 4rem; margin-right: 1rem;">T<span style="font-size: 3rem; color: #f65;">⚙</span>nelog <span style="font-weight: 100; font-size: 2rem">2.0.1</span></h1>

A Lightweight color logging package for Nodejs.

## Features 🚀

- 🌈 Beautifully add colors and background colors log messages.
- 🕒 Display current timestamp of log message.
- 📊 Supports log levels (success, info, warning, error).
- ⚡ Typing effect on logging.

## Installation 📦

Install tonelog using npm:<br>

```bash
npm i tonelog
```

<br>

## Important Info:

 <span style="color: yellow;">Warning!.</span> Tonelog has recently undergone a major refactor: **version ^2.0.0.**

The code below which worked on older versions like 1.1.7 downwards is now deprecated.

```js
const tonelog = require("tonelog");

tonelog("error", "This function is now deprecated");
```
But you could still use the "tonelog" function on recent versions, you'll have to require "tonelog" as a function.
```js
const { tonelog } = require("tonelog")
```

<br>

## How to use... 🤓

### 1. Adding tone colors to log message

```js
const { tone } = require("tonelog");

console.log(tone.cyan("This is a cyan colored message"));
console.log(tone.bright_cyan("This is a bright cyan colored message"));
console.log(tone.bg_cyan("This is a background cyan colored message"));
```

### Output:

![code output](docs/img/Capture.PNG)

## Available colors 🎨:

### Semantic names:

- success
- info
- warning
- error
- reset

### Major colors

- red
- green
- yellow
- blue
- purple
- cyan
- white

### Bright colors

- bright_red
- bright_green
- bright_yellow
- bright_blue
- bright_purple
- bright_cyan
- bright_white

### Background colors

- bg_black
- bg_red
- bg_green
- bg_yellow
- bg_blue
- bg_purple
- bg_cyan
- bg_white

### Special colors [1]

- orange
- pink
- sky_blue
- brown
- teal
- lavender
- maroon
- olive
- indigo
- gold
- silver

### Special colors [2]

- turquoise
- coral
- lilac
- mint_green
- mustard
- salmon
- chocolate_brown
- pale_pink
- deep_purple
  <br>
  <br>

### 2. Using timestamp
Add timestamp to log message with "**UseTimestamp**".

```js
const { useTimestamp } = require("tonelog");

console.log(useTimestamp("A log message with the current timestamp"));
```

### Output:

![code output](./docs/img/Capture2.PNG)

<br>

### 3. Log Level
Logging message according to it's level

```js
const { toneLevel } = require("tonelog");

console.log(toneLevel.error("This is an error level log message"));
```

### Output:

![code output](./docs/img/Capture3.PNG)

### Log Levels 📊:
Log levels supported by tonelog.
- success
- info
- warning
- error

<br>

### Add timestamp with the log level

Make your log message more descriptive by adding timestamp with log level

```js
const { useTimestamp, toneLevel } = require("tonelog");

console.log(useTimestamp(toneLevel.success("Success message")));
```

### Output:

![code output](./docs/img/Capture4.PNG)

<br>

### 4. Typing effect on logging

"typed" function simulates a typing effect on the terminal or console, as a cool way to log messages.

This function takes in 4 parameters which are: strings, delay, typespeed and backspeed.

```js
const { typed } = require("tonelog");

const myArray = [
  "This is the first string on the array",
  "This is the second string on the array",
  "This is the third string on the array",
];

typed(
    myArray, // Strings: Array of strings to type.
    1000, // Delay: Duration before starting to type.
    70, // Typespeed: Speed of typing characters in miliseconds.
    50 // Backspeed: Speed of backspacing characters in miliseconds.
```
<br>

- To log a message after typing is complete... <br>It is recommended to use "typed" inside of an async function as shown below.

```js
const { typed } = require("tonelog");

const typing = async () => {
  const myArray = [
    "This is the first string on the array",
    "This is the second string on the array",
    "This is the third string on the array",
  ];

  // Typing...
  await typed(myArray, 1000, 70, 50);
  console.log("Typing is complete");
};

// Call the function
typing();
```

**Alternatively you can use ".finally() or .then()" methods:**
- Since the "typed" function return a promise, using ".finally() or .then()" is a also great way to handle this.

```js
const { typed } = require("tonelog");

const myArray = [
  "This is the first string",
  "This is the second string",
  "This is the third string",
];

typed(myArray, 1000, 70, 50).finally(() => {
  console.log("Typing is complete");
});
```
**The same goes with ".then()"**

<br>

### Author 📝

- [**Sydney205**](https://github.com/Sydney205)

### Collaborators

- [**Sydney205**](https://github.com/Sydney205)
- [**Emmo00**](https://github.com/Emmo00)

<br>

**Help make <span style="color: #f65; font-weight:bold;">Tonelog</span> better.**
<br>
_If there is a feature you wish to add, please send us a pull request; Feel free to contribute, report issues, or provide feedback!
<br>
<br>
Enjoy logging with Tonelog!_ 🎨

<br>

# License

Copyright &copy; 2023 Dieke Sydney. Licensed under the [MIT License](LICENSE).
