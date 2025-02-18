import LoggerServices from './logger-services.js';

class Logger extends LoggerServices {
  type(mes: any): this {
    this.bConsole(mes, 'brightWhite');

    return this;
  }

  mes(mes: any): this {
    this.bConsole(mes, 'brightMagenta');

    return this;
  }

  info(mes: any): this {
    this.bConsole(mes, 'brightBlue');

    return this;
  }

  success(mes: any): this {
    this.bConsole(mes, 'brightGreen');

    return this;
  }

  warn(mes: any): this {
    this.bConsole(mes, 'brightYellow');

    return this;
  }

  error(mes: any): this {
    this.bConsole(mes, 'brightRed');

    return this;
  }

  // Вывод сообщения с background-ом
  typeBg(mes: any): this {
    this.bConsoleBg(mes, 'brightWhite');

    return this;
  }

  mesBg(mes: any): this {
    this.bConsoleBg(mes, 'brightMagenta');

    return this;
  }

  infoBg(mes: any): this {
    this.bConsoleBg(mes, 'brightBlue');

    return this;
  }

  successBg(mes: any): this {
    this.bConsoleBg(mes, 'brightGreen');

    return this;
  }

  warnBg(mes: any): this {
    this.bConsoleBg(mes, 'brightYellow');

    return this;
  }

  errorBg(mes: any): this {
    this.bConsoleBg(mes, 'brightRed');

    return this;
  }

  // Вывод сообщения в одну строку
  oneType(mes: any): this {
    this.clear();
    this.type(mes);

    return this;
  }

  oneMes(mes: any): this {
    this.clear();
    this.mes(mes);

    return this;
  }

  oneInfo(mes: any): this {
    this.clear();
    this.info(mes);

    return this;
  }

  oneSuccess(mes: any): this {
    this.clear();
    this.success(mes);

    return this;
  }

  oneWarn(mes: any): this {
    this.clear();
    this.warn(mes);

    return this;
  }

  oneError(mes: any): this {
    this.clear();
    this.error(mes);

    return this;
  }

  // Вывод сообщения без времени
  typeNoTime(mes: any): this {
    this.bConsole(mes, 'brightWhite', true);

    return this;
  }

  mesNoTime(mes: any): this {
    this.bConsole(mes, 'brightMagenta', true);

    return this;
  }

  infoNoTime(mes: any): this {
    this.bConsole(mes, 'brightBlue', true);

    return this;
  }

  successNoTime(mes: any): this {
    this.bConsole(mes, 'brightGreen', true);

    return this;
  }

  warnNoTime(mes: any): this {
    this.bConsole(mes, 'brightYellow', true);

    return this;
  }

  errorNoTime(mes: any): this {
    this.bConsole(mes, 'brightRed', true);

    return this;
  }
}

export default Logger;