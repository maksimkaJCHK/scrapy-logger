import logger from '../../lib/scrapy-logger.js';

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