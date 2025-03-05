# Scrapy logger

English | [Русский](./README.ru.md) 

This is a simple logger. Now there are a lot of different loggers, but they are all lackluster. From time to time I do web scraping. One way or another, I spend quite a lot of time in the console, and I would like to properly see the data that I collect. The second reason: all the logic that I saw was not configured the way I wanted. They either displayed the time or did not display it. Few loggers have grouping, you collect data from the page, display it, and the collected information from the page is merged, which is not convenient. I would like to somehow differentiate the collected data. This library is designed to work in a terminal and cannot be used in a browser. For this logger to work, you need version "node.js" 18 or higher (I have version 18.18.0).

## Installation

To install logger you need to type in the console:

```js
npm install --save-dev scrapy-logger
```

Logger is connected in the following way:

```js
import logger from 'scrapy-logger';
```

Naturally, you need to add the following line to “package.json”:

```js
"type": "module",
```

If you prefer "commonJS" modules, then my library is connected in the following way:

```js
const logger = require('scrapy-logger/lib/cjs/scrapy-logger.cjs');
```

## Basic methods

In order to understand how logger works, just look at the following [code](https://github.com/maksimkaJCHK/scrapy-logger/tree/main/examples/eng). A description of the main commands is below:

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
logger.enableBg()
  .success('Some message')
  .disableBg();
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

## Grouping methods

If we collect page-by-page information, then when it is displayed in the terminal, it merges, it makes sense to group it. This is done in the following way.

```js
logger.group('Group title');
logger.type('Typical message example');
logger.info('Example information message');
logger.mes('Simple message example');
logger.success('Successful message example');
logger.warn('Example warning');
logger.error('Example error');
logger.endGroup();
```

The starting point for grouping messages is the "logger.group" method, and the end point is the "logger.endGroup()" method. Everything between these methods will be displayed in the terminal with a slight indentation.

If we need to add indentation between groups, then the following method is used for this:

```js
logger.space();
```

This method adds an empty line in the terminal.

## Output messages on one line.

Some people don't like to display all the information in the terminal. For example, we collect information from a website, there are about 1000 pages, and there is no point in displaying all the information. It makes sense to display information only from the page that we are currently processing. The following methods are used for this:

```js
logger.oneType('Some kind of message')
```

Typical message, message color will be white.

```js
logger.oneInfo('Some message')
```

An example of an information message, the color will be bright blue.

```js
logger.oneMes('Some message')
```

An example of a simple message, its color will be bright magenta.

```js
logger.oneSuccess('Some message')
```

An example of a successful message, its color will be bright green.

```js
logger.oneWarn('Some message')
```

An example of a warning, its color will be bright yellow.

```js
logger.oneError('Some kind of message')
```

An example of an error message, its color will be bright red.

These methods are based on:

```js
console.clear();
```

All console output above this method will be deleted. And everything below will remain accordingly. In order to see how it works, I advise you to look at the following [code](https://github.com/maksimkaJCHK/scrapy-logger/blob/main/examples/eng/example-one-in-row.js).

## Switching theme

I love bright colors and the logger comes with a bright theme enabled by default. I admit that this will not suit everyone, so below I describe how to switch the topic.

```js
logger.changeTheme();
```

This method switches the theme from flashy to normal and back again.

```js
logger.brightTheme();
```

This method includes a vibrant theme.

```js
logger.ordinaryTheme();
```

This method includes a regular theme.

## Getting time

Imagine this situation: a spider is collecting data, and suddenly some error occurs. Very often a situation arises that errors need to be recorded in logs, and it is desirable that errors are recorded in logs in the same way as they are displayed in the terminal. To make it easier to navigate them. In order to avoid the need to generate time again, you can use the following method:

```js
const time = logger.bTimePeriod();
```

The "time" variable will contain the time in the same format as it is displayed by my layer. After this method, other methods cannot be called. It returns the time, not the library instance.

```js
logger.bTimePeriod()
  .space()
  .typeNoTime('Some kind of message.');
// There will be an error
```

This call will produce an error.

```js
const time = logger.bTimePeriod();

logger.space()
  .typeNoTime('Some kind of message.');
// You can call something else
```

With such a call everything will go fine. It is quite natural that if we do something like this, the time will not be displayed:

```js
logger.disableTime()
  .disableDate();
// Or
logger.disableTimePeriod();

const time = logger.bTimePeriod();
```

## Code examples

```js
logger.space();
logger.typeNoTime('Messages without grouping');
logger.space();

logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');

logger
  .space()
  .typeNoTime('I turn on the display of the full year (logger.enableFullYear())')
  .space();

logger.enableFullYear();
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');

logger.space()
  .typeNoTime('I turn off the full year display (logger.disableFullYear())')
  .space();

logger.disableFullYear();
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');

logger.space()
  .typeNoTime('Below are grouped messages')
  .space();

logger.group('Example messages');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableTime();

logger.group('Example of a message without time (logger.disableTime())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableDate();

logger.group('Example message without date (logger.disableDate())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableTime();

logger.group('I turn on the time (logger.enableTime())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableDate();

logger.group('I include the date (logger.enableDate())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableTimePeriod();

logger.group('I disable the time period (logger.disableTimePeriod())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableTimePeriod();

logger.group("I include the time period (logger.enableTimePeriod())");
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableBg();

logger.group('I turn on the background (logger.enableBg())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableBg();

logger.group("I turn off the background (logger.disableBg())");
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();

logger.group("Example of messages with background");
logger.typeBg('Example of a typical message (logger.typeBg())');
logger.infoBg('Example of an information message (logger.infoBg())');
logger.mesBg('Example of a simple message (logger.mesBg())');
logger.successBg('Example of a successful message (logger.successBg())');
logger.warnBg('Warning example (logger.warnBg())');
logger.errorBg('Error example (logger.errorBg())');
logger.endGroup();

logger.space();

logger.group("Example of messages without time period");
logger.typeNoTime('Example of a typical message (logger.typeNoTime())');
logger.infoNoTime('Example of an information message (logger.infoNoTime())');
logger.mesNoTime('Example of a simple message (logger.mesNoTime())');
logger.successNoTime('Example of a successful message (logger.successNoTime())');
logger.warnNoTime('Warning example (logger.warnNoTime())');
logger.errorNoTime('Error example (logger.errorNoTime())');
logger.endGroup();

logger.changeTheme();

logger.space()
  .space()
  .space()
  .typeNoTime('Below is a regular theme, not bright (logger.changeTheme())')

logger.space();
logger.typeNoTime('Messages without grouping');
logger.space();

logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');

logger
  .space()
  .typeNoTime('I turn on the display of the full year (logger.enableFullYear())')
  .space();

logger.enableFullYear();
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');

logger.space()
  .typeNoTime('I turn off the full year display (logger.disableFullYear())')
  .space();

logger.disableFullYear();
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');

logger.space()
  .typeNoTime('Below are grouped messages')
  .space();

logger.group('Example messages');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableTime();

logger.group('Example of a message without time (logger.disableTime())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableDate();

logger.group('Example message without date (logger.disableDate())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableTime();

logger.group('I turn on the time (logger.enableTime())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableDate();

logger.group('I include the date (logger.enableDate())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableTimePeriod();

logger.group('I disable the time period (logger.disableTimePeriod())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableTimePeriod();

logger.group("I include the time period (logger.enableTimePeriod())");
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.enableBg();

logger.group('I turn on the background (logger.enableBg())');
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();
logger.disableBg();

logger.group("I turn off the background (logger.disableBg())");
logger.type('Example of a typical message (logger.type())');
logger.info('Example of an information message (logger.info())');
logger.mes('Example of a simple message (logger.mes())');
logger.success('Example of a successful message (logger.success())');
logger.warn('Warning example (logger.warn())');
logger.error('Error example (logger.error())');
logger.endGroup();

logger.space();

logger.group("Example of messages with background");
logger.typeBg('Example of a typical message (logger.typeBg())');
logger.infoBg('Example of an information message (logger.infoBg())');
logger.mesBg('Example of a simple message (logger.mesBg())');
logger.successBg('Example of a successful message (logger.successBg())');
logger.warnBg('Warning example (logger.warnBg())');
logger.errorBg('Error example (logger.errorBg())');
logger.endGroup();

logger.space();

logger.group("Example of messages without time period");
logger.typeNoTime('Example of a typical message (logger.typeNoTime())');
logger.infoNoTime('Example of an information message (logger.infoNoTime())');
logger.mesNoTime('Example of a simple message (logger.mesNoTime())');
logger.successNoTime('Example of a successful message (logger.successNoTime())');
logger.warnNoTime('Warning example (logger.warnNoTime())');
logger.errorNoTime('Error example (logger.errorNoTime())');
logger.endGroup();
```