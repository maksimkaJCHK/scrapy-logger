import logger from '../lib/ts-logger.js';

logger.space();
logger.typeNoTime('Сообщения без группировки');
logger.space();

logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');

logger
  .space()
  .typeNoTime('Включаю отображение полного года (logger.enableFullYear())')
  .space();

logger.enableFullYear();
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример предупреждения');
logger.warn('Пример Пример предупреждения');
logger.error('Пример ошибки');

logger.space()
  .typeNoTime('Отключаю отображение полного года (logger.disableFullYear())')
  .space();

logger.disableFullYear();
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');

logger.space()
  .typeNoTime('Ниже идут сгруппированные сообщения')
  .space();

logger.group('Пример сообщений');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.disableTime();

logger.group('Пример сообщени без времени (logger.disableTime())');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.disableDate();

logger.group('Пример сообщени без даты (logger.disableDate())');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.enableTime();

logger.group('Включаю время (logger.enableTime())');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.enableDate();

logger.group('Включаю дату (logger.enableDate())');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.disableTimePeriod();

logger.group('Отключаю временной период (logger.disableTimePeriod())');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.enableTimePeriod();

logger.group("Включаю временной период (logger.enableTimePeriod())");
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.enableBg();

logger.group('Включаю bg (logger.enableBg())');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.disableBg();

logger.group("Отключаю bg (logger.disableBg())");
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();