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

Other colors are shown below:

```js
tonelog('blue', 'red log')
```
```js
tonelog('cyan', 'green log')
```
```js
tonelog('purple', 'magenta log')
```

You can also log text with a background color:

```js
tonelog('bg_red', 'red background')
```
```js
tonelog('bg_yellow', 'yellow background')
```
```js
tonelog('bg_green', 'green background')
```

## All colors Available 🎨:

### Semantic names:
- error
- warning
- success
- info
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

#### This project is licensed under the MIT License. See the [LICENSE file](./LICENSED.md) for details.

### Author 📝
- [**Sydney205 🐱‍🚀**](https://github.com/Sydney205)

Feel free to contribute, report issues, or provide feedback! Enjoy beautiful colorful logging in your Nodejs projects! 🎨
