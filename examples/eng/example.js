import logger from '../../lib/scrapy-logger.js';

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