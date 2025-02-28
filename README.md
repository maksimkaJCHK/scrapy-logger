# Ts-logger

English | [Русский](./README.ru.md) 

This is a simple logger. Now there are a lot of different loggers, but they are all lackluster. From time to time I do web scraping. One way or another, I spend quite a lot of time in the console, and I would like to properly see the data that I collect. The second reason: all the logic that I saw was not configured the way I wanted. They either displayed the time or did not display it. Few loggers have grouping, you collect data from the page, display it, and the collected information from the page is merged, which is not convenient. I would like to somehow differentiate the collected data. This library is designed to work in a terminal and cannot be used in a browser. For this logger to work, you need version "node.js" 18 or higher (I have version 18.18.0).

## Installation

To install logger you need to type in the console:

```js
npm install --save-dev ts-logger
```

Logger is connected in the following way:

```js
import logger from 'ts-logger';
```

Naturally, you need to add the following line to “package.json”:

```js
"type": "module",
```

If you prefer "commonJS" modules, then my library is connected in the following way:

```js
const logger = require('ts-logger/lib/cjs/ts-logger.js');
```

## Basic methods

In order to understand how logger works, just look at the following [code](https://github.com/maksimkaJCHK/ts-logger/tree/main/examples/eng). A description of the main commands is below:

```js
logger.type('some kind of message')
```

A typical message, the message color will be white.

```js
logger.info('some kind of message')
```

An example of an information message, the color will be bright blue.

```js
logger.mes('some message')
```

An example of a simple message, its color will be bright magenta.

```js
logger.success('some message')
```

An example of a successful message, its color will be bright green.

```js
logger.warn('some kind of message')
```

An example of a warning, its color will be bright yellow.

```js
logger.error('some kind of message')
```

Аn example of an error message, its color will be bright red.

Very often a situation arises when one message needs to be highlighted more clearly than all the others. Initially, in order to highlight one message in the background, I did this:

```js
// Turn on the background
logger.enableBg();
logger.success('Some message');
logger.disableBg();
// Disable it
```

Naturally, this is not convenient, in the end I came to the conclusion that it is easier to write appropriate methods for this.

```js
logger.typeBg('Example of a typical message');
```

Typical message, background will be white.

```js
logger.infoBg('Example information message');
```

An example of an informational message, the background will be bright blue.

```js
logger.mesBg('Simple message example');
```

An example of a simple message, its background will be bright magenta.

```js
logger.successBg('Success message example');
```

An example of a successful message, its background will be bright green.

```js
logger.warnBg('Warning example');
```

An example of a warning, its background will be bright yellow.

```js
logger.errorBg('Error example');
```

An example of an error message, its background will be bright red.

Typically, when all the data has been collected, you need to display statistics on this data in the console. Naturally, statistics on this data should be without time. Previously, I turned off and then turned on the time in the following way:

```js
// Disable display of time interval
logger.disableTimePeriod();
logger.success('Some message');
logger.enableTimePeriod()
// Turn on the display of the time interval
```

As you might guess, this is not convenient, so I wrote the corresponding methods for this:

```js
logger.typeNoTime('Example of a typical message');
```

A typical message without a time period, its color will be white.

```js
logger.infoNoTime('Example information message');
```

An example of an information message without a time period, its color will be bright blue.

```js
logger.mesNoTime('Simple message example');
```

An example of a simple message without a time period, its color will be bright magenta.

```js
logger.successNoTime('Successful message example');
```

An example of a successful message without a time period, its color will be bright green.

```js
logger.warnNoTime('Warning example');
```

An example of a warning without a time period, its color will be bright yellow.

```js
logger.errorNoTime('Error example');
```

An example of an error message without a time period, its color will be bright red.

## Fine tuning

By default, my logger displays the date in the following format:

```js
20:20:56 02.26.25
```

In order to display the year in full you need:

```js
logger.enableFullYear();
```

The messages in this case will look like this:

```js
20:20:56 02.26.2025
```

In order to display messages as before, you need to enter:

```js
logger.disableFullYear();
```

There are some tasks for which there is no point in displaying the date, for example, we know for sure that it will end in a few hours. To turn off the date you need to:

```js
logger.disableDate();
```

If we want to turn it on again, we need to enter:

```js
logger.enableDate();
```

It is logical that if it is possible to turn off or turn on the date, then you need to be able to turn on or turn off the time. To turn off the time you need to enter:

```js
logger.disableTime();
```

To enable time, you need to enter:

```js
logger.enableTime();
```

If we completely need to disable both time and date, then we need to enter:

```js
logger.disableTimePeriod();
```

To enable time and date, you need to enter:

```js
logger.enableTimePeriod();
```

If we want all our messages to be highlighted, then we need to enter:

```js
logger.enableBg();
```

If we need to turn off message highlighting, then we need to enter:

```js
logger.disableBg();
```