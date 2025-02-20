# Ts-logger

English | [Русский](./README.ru.md) 

This is a simple logger. Now there are a lot of different loggers, but they are all lackluster. From time to time I do web scraping. One way or another, I spend quite a lot of time in the console, and I would like to properly see the data that I collect. The second reason: all the logic that I saw was not configured the way I wanted. They either displayed the time or did not display it. Few loggers have grouping, you collect data from the page, display it, and the collected information from the page is merged, which is not convenient. I would like to somehow differentiate the collected data. This library is designed to work in a terminal and cannot be used in a browser. For this logger to work, you need "node.js" version 18 (I have version 18.18.0).

To install my logger you need to type in the console:

```js
npm install --save-dev ts-logger
```

My logger is connected in the following way:

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