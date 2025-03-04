import LoggerServices from './logger-services.js';

class Logger extends LoggerServices {
  // Яркие цвета
  #typeColor = 'brightWhite';
  #mesColor = 'brightMagenta';
  #infoColor = 'brightBlue';
  #successColor = 'brightGreen';
  #warnColor = 'brightYellow';
  #errorColor = 'brightRed';

  // Обычные цвета
  #typeOrdinaryColor = 'white';
  #mesOrdinaryColor = 'magenta';
  #infoOrdinaryColor = 'blue';
  #successOrdinaryColor = 'green';
  #warnOrdinaryColor = 'yellow';
  #errorOrdinaryColor = 'red';

  #theme = 'bright';

  #bTheme(brightColor: string, ordinaryColor: string) {
    return this.#theme === 'bright' ? brightColor : ordinaryColor;
  }

  changeTheme(): this {
    const isBright = (this.#theme === 'bright');
    this.#theme =  isBright ? 'ordinary' : 'bright';

    return this;
  }

  type(mes: any): this {
    const color = this.#bTheme(this.#typeColor, this.#typeOrdinaryColor);
    this.bConsole(mes, color);

    return this;
  }

  mes(mes: any): this {
    const color = this.#bTheme(this.#mesColor, this.#mesOrdinaryColor);
    this.bConsole(mes, color);

    return this;
  }

  info(mes: any): this {
    const color = this.#bTheme(this.#infoColor, this.#infoOrdinaryColor);
    this.bConsole(mes, color);

    return this;
  }

  success(mes: any): this {
    const color = this.#bTheme(this.#successColor, this.#successOrdinaryColor);
    this.bConsole(mes, color);

    return this;
  }

  warn(mes: any): this {
    const color = this.#bTheme(this.#warnColor, this.#warnOrdinaryColor);
    this.bConsole(mes, color);

    return this;
  }

  error(mes: any): this {
    const color = this.#bTheme(this.#errorColor, this.#errorOrdinaryColor);
    this.bConsole(mes, color);

    return this;
  }

  // Вывод сообщения с background-ом
  typeBg(mes: any): this {
    const color = this.#bTheme(this.#typeColor, this.#typeOrdinaryColor);
    this.bConsoleBg(mes, color);

    return this;
  }

  mesBg(mes: any): this {
    const color = this.#bTheme(this.#mesColor, this.#mesOrdinaryColor);
    this.bConsoleBg(mes, color);

    return this;
  }

  infoBg(mes: any): this {
    const color = this.#bTheme(this.#infoColor, this.#infoOrdinaryColor);
    this.bConsoleBg(mes, color);

    return this;
  }

  successBg(mes: any): this {
    const color = this.#bTheme(this.#successColor, this.#successOrdinaryColor);
    this.bConsoleBg(mes, color);

    return this;
  }

  warnBg(mes: any): this {
    const color = this.#bTheme(this.#warnColor, this.#warnOrdinaryColor);
    this.bConsoleBg(mes, color);

    return this;
  }

  errorBg(mes: any): this {
    const color = this.#bTheme(this.#errorColor, this.#errorOrdinaryColor);
    this.bConsoleBg(mes, color);

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
    const color = this.#bTheme(this.#typeColor, this.#typeOrdinaryColor);
    this.bConsole(mes, color, true);

    return this;
  }

  mesNoTime(mes: any): this {
    const color = this.#bTheme(this.#mesColor, this.#mesOrdinaryColor);
    this.bConsole(mes, color, true);

    return this;
  }

  infoNoTime(mes: any): this {
    const color = this.#bTheme(this.#infoColor, this.#infoOrdinaryColor);
    this.bConsole(mes, color, true);

    return this;
  }

  successNoTime(mes: any): this {
    const color = this.#bTheme(this.#successColor, this.#successOrdinaryColor);
    this.bConsole(mes, color, true);

    return this;
  }

  warnNoTime(mes: any): this {
    const color = this.#bTheme(this.#warnColor, this.#warnOrdinaryColor);
    this.bConsole(mes, color, true);

    return this;
  }

  errorNoTime(mes: any): this {
    const color = this.#bTheme(this.#errorColor, this.#errorOrdinaryColor);
    this.bConsole(mes, color, true);

    return this;
  }
}

export default Logger;