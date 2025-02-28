# Ts-logger

[English](./README.md) | Русский

Это простенький логер. Сейчас существует очень много разных логеров, но все они тусклые. Периодически я занимаюсь веб-скрапингом. Так или иначе, но я в консоли провожу достаточно много времени, и мне бы хотелось нормально видеть данные которые я собираю. Вторая причина, все логеры которые я видел не настраивались так, как мне хотелось. Они или отображали время, или не отображали его. Мало какие логеры имеют группировку, ты собираешь данные со страницы, выводишь их, и собранная информация со страницы у тебя сливается, что не удобно. Хотелось бы как-то различать собранные данные. Данная библиотека предназначена для работы в терминале, и использовать её в браузере не получится. Для работы данного логера нужен "node.js" 18 версии или выше (у меня стоит версия 18.18.0).

## Установка

Для установки логера нужно набрать в консоли:

```js
npm install --save-dev ts-logger
```

Подключение логера осуществляется следующим способом:

```js
import logger from 'ts-logger';
```

Естественно, что в "package.json" нужно добавить следующую строчку:

```js
"type": "module",
```

Если вы предпочитаете "сommonJS" модули, то тогда моя библиотека подключается следующим способом:

```js
const logger = require('ts-logger/lib/cjs/ts-logger.js');
```

## Основные методы

Для того, чтобы понять как работает логер, достаточно посмотреть следующий [код](https://github.com/maksimkaJCHK/ts-logger/tree/main/examples/rus). Описание основных команд находится ниже:

```js
logger.type('Какое-то сообщение')
```

Типовое сообщение, цвет сообщения будет белым.

```js
logger.info('Какое-то сообщение')
```

Пример информационного сообщения, цвет будет ярко-синим.

```js
logger.mes('Какое-то сообщение')
```

Пример простого сообщения, его цвет будет яркий магента.

```js
logger.success('Какое-то сообщение')
```

Пример успешного сообщения, его цвет будет ярко-зелёным.

```js
logger.warn('Какое-то сообщение')
```

Пример предупреждения, его цвет будет якро-жёлтым.

```js
logger.error('Какое-то сообщение')
```

Пример сообщения об ошибки, его цвет будет ярко красным.

Очень часто возникает такая ситуация, что одно сообщение нужно ярче выделить, чем все остальные. Первоначально, для того, чтобы выделить фоном одно сообщения, я делал так:

```js
// Включаю background
logger.enableBg();
logger.success('Какое-то сообщение');
logger.disableBg();
// Отключаю его
```

Естественно, что это не удобно, в итоге я пришёл к выводу, что проще написать соответствующие методы для этого.

```js
logger.typeBg('Пример типового сообщения');
```

Типовое сообщение, background будет белым.

```js
logger.infoBg('Пример информационного сообщения');
```

Пример информационного сообщения, background будет ярко-синим.

```js
logger.mesBg('Пример простого сообщения');
```

Пример простого сообщения, его background будет яркий магента.

```js
logger.successBg('Пример успешного сообщения');
```

Пример успешного сообщения, его background будет ярко-зелёным.

```js
logger.warnBg('Пример предупреждения');
```

Пример предупреждения, его background будет якро-жёлтым.

```js
logger.errorBg('Пример ошибки');
```

Пример сообщения об ошибки, его background будет ярко красным.

Обычно, когда все данные собраны, нужно отобразить в консоли статистику по этим данным. Естественно статистика по этим данным должна быть без времени. Раньше я отключал, а потом включал время следующим способом:

```js
// Отключаю отображение временного интервала
logger.disableTimePeriod();
logger.success('Какое-то сообщение');
logger.enableTimePeriod()
// Включаю отображение временного интервала
```

Как не трудно догадаться, это не удобно, поэтому я написал для этоо соответствующие методы:

```js
logger.typeNoTime('Пример типового сообщения');
```

Типовое сообщение без временного периода, его цвет будет белым.

```js
logger.infoNoTime('Пример информационного сообщения');
```

Пример информационного сообщения без временного периода, его цвет будет ярко-синим.

```js
logger.mesNoTime('Пример простого сообщения');
```

Пример простого сообщения без временного периода, его цвет будет яркий магента.

```js
logger.successNoTime('Пример успешного сообщения');
```

Пример успешного сообщения без временного периода, его цвет будет ярко-зелёным.

```js
logger.warnNoTime('Пример предупреждения');
```

Пример предупреждения без временного периода, его цвет будет ярко-жёлтым.

```js
logger.errorNoTime('Пример ошибки');
```

Пример сообщения об ошибки без временного периода, его цвет будет ярко красным.

## Точная настройка

По умолчаню логер отображает дату в следующем формате:

```js
20:20:56  26.02.25
```

Для того, чтобы отображать год полностью, нужно:

```js
logger.enableFullYear();
```

Сообщения в таком случае будут выглядеть так:

```js
20:20:56  26.02.2025
```

Для того, чтобы отображать сообщения как раньше, нужно:

```js
logger.disableFullYear();
```

Есть некоторые задачи, для которых нет смысла отображать дату, к примеру, мы точно знаем, что она закончится за несколько часов. Для отключения даты нужно:

```js
logger.disableDate();
```

Если же мы снова хотим её включить, то нужно:

```js
logger.enableDate();
```

Логично, что если возможно отключать, или включать дату, то нужно иметь возможность включать, или отключать время. Для отключения времени нужно:

```js
logger.disableTime();
```

Для включения времени, нужно:

```js
logger.enableTime();
```

Если нам нужно полностью отключить и время и дату, то нужно:

```js
logger.disableTimePeriod();
```

Для включения времени и даты, нужно:

```js
logger.enableTimePeriod();
```

Если мы хотим, чтобы все наши сообщения были с подсветкой, то нужно ввести:

```js
logger.enableBg();
```

Если нам нужно отключить подсветку сообщений, то нужно:

```js
logger.disableBg();
```

## Методы группировки

Если мы собираем постраничную информацию, то при ее выводе в терминале, она сливается, имеет смысл ее сгруппировать. Это делается следующим способом.

```js
logger.group('Заголовок для группы');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();
```

Началом для группировки сообщений слушит метод "logger.group", а концом служит метод "logger.endGroup()". Всё, что находится между этими методами, будет отображаться в терминале с небольшим отступом.

Если нам нужно добавить отступ между группами, то для этого служит следующим метод:

```js
logger.space();
```

Этот метода добавляет пустую строку в терминале.

## Вывод сообщений в одну строку.

Некторорым людям не нравится отображать всю информацию в терминале. К примеру мы собираем информацию, с сайта, там около 1000 страниц, и нет смысла выводить всю информацию. Имеет смысл вывести информацию только с той страницы, которую мы обрабатываем в данный момент. Для этого служат следующие методы:

```js
logger.oneType('Какое-то сообщение')
```

Типовое сообщение, цвет сообщения будет белым.

```js
logger.oneInfo('Какое-то сообщение')
```

Пример информационного сообщения, цвет будет ярко-синим.

```js
logger.oneMes('Какое-то сообщение')
```

Пример простого сообщения, его цвет будет яркий магента.

```js
logger.oneSuccess('Какое-то сообщение')
```

Пример успешного сообщения, его цвет будет ярко-зелёным.

```js
logger.oneWarn('Какое-то сообщение')
```

Пример предупреждения, его цвет будет якро-жёлтым.

```js
logger.oneError('Какое-то сообщение')
```

Пример сообщения об ошибки, его цвет будет ярко красным.

В основе данных методов лежит:

```js
console.clear();
```

Весь вывод в консоль, который будет находиться выше этого метода будет удален. А все, что ниже соответственно останется. Для того, чтобы посмотреть как это работает я советую посмотреть следующий [код](https://github.com/maksimkaJCHK/ts-logger/blob/main/examples/rus/example-one-in-row.js).

## Примеры кода

```js
logger.space();
logger.typeNoTime('Сообщения без группировки');
logger.space();

logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');

logger
  .space()
  .typeNoTime('Включаю отображение полного года (logger.enableFullYear())')
  .space();

logger.enableFullYear();
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');

logger.space()
  .typeNoTime('Отключаю отображение полного года (logger.disableFullYear())')
  .space();

logger.disableFullYear();
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');

logger.space()
  .typeNoTime('Ниже идут сгруппированные сообщения')
  .space();

logger.group('Пример сообщений');
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.disableTime();

logger.group('Пример сообщени без времени (logger.disableTime())');
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.disableDate();

logger.group('Пример сообщени без даты (logger.disableDate())');
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.enableTime();

logger.group('Включаю время (logger.enableTime())');
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.enableDate();

logger.group('Включаю дату (logger.enableDate())');
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.disableTimePeriod();

logger.group('Отключаю временной период (logger.disableTimePeriod())');
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.enableTimePeriod();

logger.group("Включаю временной период (logger.enableTimePeriod())");
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.enableBg();

logger.group('Включаю background (logger.enableBg())');
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();
logger.disableBg();

logger.group("Отключаю background (logger.disableBg())");
logger.type('Пример типового сообщения (logger.type())');
logger.info('Пример информационного сообщения (logger.info())');
logger.mes('Пример простого сообщения (logger.mes())');
logger.success('Пример успешного сообщения (logger.success())');
logger.warn('Пример предупреждения (logger.warn())');
logger.error('Пример ошибки (logger.error())');
logger.endGroup();

logger.space();

logger.group("Пример сообщений с background-ом");
logger.typeBg('Пример типового сообщения (logger.typeBg())');
logger.infoBg('Пример информационного сообщения (logger.infoBg())');
logger.mesBg('Пример простого сообщения (logger.mesBg())');
logger.successBg('Пример успешного сообщения (logger.successBg())');
logger.warnBg('Пример предупреждения (logger.warnBg())');
logger.errorBg('Пример ошибки (logger.errorBg())');
logger.endGroup();

logger.space();

logger.group("Пример сообщений без временного периода");
logger.typeNoTime('Пример типового сообщения (logger.typeNoTime())');
logger.infoNoTime('Пример информационного сообщения (logger.infoNoTime())');
logger.mesNoTime('Пример простого сообщения (logger.mesNoTime())');
logger.successNoTime('Пример успешного сообщения (logger.successNoTime())');
logger.warnNoTime('Пример предупреждения (logger.warnNoTime())');
logger.errorNoTime('Пример ошибки (logger.errorNoTime())');
logger.endGroup();
```