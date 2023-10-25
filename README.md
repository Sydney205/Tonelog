# Tonelog 🌈

A lightweight, user-friendly color logging package for your node projects.

## Features 🚀

- Easily add colored log messages to your code.
- Customize log message formatting.
- Supports various log levels (info, warning, error, etc.).
- Beautiful, colorful output for enhanced readability.

## Installation 📦

You can install this package using npm:

```bash
npm install tonelog
```

## Usage 🤓
Require the package in your node project:

```js
const tonelog = require("tonelog")
```

## Available Log Levels 📊
The function takes in two parameters, the level and the log message: tonelog(level, message)

- success
```js
tonelog('success', 'Success message')
```
- error
```js
tonelog('error', 'error message')
```
- warning
```js
tonelog('warning', 'warning message')
```
- info
```js
tonelog('info', 'info message')
```
- blue
```js
tonelog('blue', 'This log is on color blue')
```
- pink
```js
tonelog('pink', 'Logging is fun')
```
- invisible
```js
tonelog('invisible', 'Invisible logging')
```

Other colors are shown below:

```js
tonelog('red', 'red log')
```
```js
tonelog('green', 'green log')
```
```js
tonelog('magenta', 'magenta log')
```
```js
tonelog('cyan', 'cyan log')
```
```js
tonelog('yellow', 'yellow log')
```

You can also log text with a background color, by just adding 'b' before the color name:

```js
tonelog('bred', 'red background')
```
```js
tonelog('berror', 'error with red background')
```
```js
tonelog('byellow', 'yellow background')
```

### This project is licensed under the MIT License. See the [LICENSE file](https://github.com/Sydney205/tonelog/LICENSED.md) for details.]

### Author 📝
- [**Sydney205 🐱‍🚀**](https://github.com/Sydney205)

Feel free to contribute, report issues, or provide feedback! Enjoy beautiful colorful logging in your Nodejs projects! 🎨
