import logger from '../../lib/ts-logger.js';

const delayF = (delay = 400) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

const oneInRow = async () => {
  let count = 0;

  logger.disableDate();

  while (count <= 10) {
    logger.oneMes(`Значение счетчика равно ${count}.`);

    count++;
    await delayF(1_000);
  }

  logger.oneSuccess('Счетчик закончился');
}

oneInRow();