import LoggerServices from './logger-services.js';

class Logger extends LoggerServices {
  #typeColor = 'brightWhite';
  #mesColor = 'brightMagenta';
  #infoColor = 'brightBlue';
  #successColor = 'brightGreen';
  #warnColor = 'brightYellow';
  #errorColor = 'brightRed';

  type(mes: any): this {
    this.bConsole(mes, this.#typeColor);

    return this;
  }

  mes(mes: any): this {
    this.bConsole(mes, this.#mesColor);

    return this;
  }

  info(mes: any): this {
    this.bConsole(mes, this.#infoColor);

    return this;
  }

  success(mes: any): this {
    this.bConsole(mes, this.#successColor);

    return this;
  }

  warn(mes: any): this {
    this.bConsole(mes, this.#warnColor);

    return this;
  }

  error(mes: any): this {
    this.bConsole(mes, this.#errorColor);

    return this;
  }

  // Вывод сообщения с background-ом
  typeBg(mes: any): this {
    this.bConsoleBg(mes, this.#typeColor);

    return this;
  }

  mesBg(mes: any): this {
    this.bConsoleBg(mes, this.#mesColor);

    return this;
  }

  infoBg(mes: any): this {
    this.bConsoleBg(mes, this.#infoColor);

    return this;
  }

  successBg(mes: any): this {
    this.bConsoleBg(mes, this.#successColor);

    return this;
  }

  warnBg(mes: any): this {
    this.bConsoleBg(mes, this.#warnColor);

    return this;
  }

  errorBg(mes: any): this {
    this.bConsoleBg(mes, this.#errorColor);

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
    this.bConsole(mes, this.#typeColor, true);

    return this;
  }

  mesNoTime(mes: any): this {
    this.bConsole(mes, this.#mesColor, true);

    return this;
  }

  infoNoTime(mes: any): this {
    this.bConsole(mes, this.#infoColor, true);

    return this;
  }

  successNoTime(mes: any): this {
    this.bConsole(mes, this.#successColor, true);

    return this;
  }

  warnNoTime(mes: any): this {
    this.bConsole(mes, this.#warnColor, true);

    return this;
  }

  errorNoTime(mes: any): this {
    this.bConsole(mes, this.#errorColor, true);

    return this;
  }
}

export default Logger;