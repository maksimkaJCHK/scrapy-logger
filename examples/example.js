import logger from '../lib/ts-logger.js';

logger.disableTimePeriod().type('Сообщения без группировки').enableTimePeriod();

logger.space();
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');

logger.space();
logger.type('Включаю отображение полного года ( logger.enableFullYear() )');
logger.space();

logger.enableFullYear();
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример предупреждения');
logger.warn('Пример Пример предупреждения');
logger.error('Пример ошибки');

logger.space();
logger.type('Отключаю отображение полного года ( logger.disableFullYear() )');
logger.space();

logger.disableFullYear();
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');

logger.space();
logger.type('Ниже идут сгруппированные сообщения');
logger.space();

logger.group('Пример сообщений');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.disableTime();

logger.group('Пример сообщени без времени ( logger.disableTime() )');
logger.space();

logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.space();
logger.disableDate();

logger.group('Пример сообщени без даты ( logger.disableDate() )');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.enableTime();

logger.group('Включаю время ( logger.enableTime() )');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.enableDate();
logger.space();

logger.group('Включаю дату ( logger.enableDate() )');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.disableTimePeriod();
logger.space();

logger.group('Отключаю период ( logger.disableTimePeriod() )');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.enableTimePeriod();
logger.space();

logger.group("Включаю период ( logger.enableTimePeriod() )");
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.enableBg();
logger.space();

logger.group('Включаю bg ( logger.enableBg() )');
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();

logger.disableBg();
logger.space();

logger.group("Отключаю bg ( logger.disableBg() )");
logger.type('Пример типового сообщения');
logger.info('Пример информационного сообщения');
logger.mes('Пример простого сообщения');
logger.success('Пример успешного сообщения');
logger.warn('Пример предупреждения');
logger.error('Пример ошибки');
logger.endGroup();