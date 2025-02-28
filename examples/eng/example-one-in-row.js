import logger from '../../lib/scrapy-logger.js';

const delayF = (delay = 400) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

const oneInRow = async () => {
  let count = 0;

  logger.disableDate();

  while (count <= 10) {
    logger.oneMes(`The counter value is ${count}.`);

    count++;
    await delayF(1_000);
  }

  logger.oneSuccess('Счетчик закончился');
}

oneInRow();