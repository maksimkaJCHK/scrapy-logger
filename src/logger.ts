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

  #bColor(brightColor: string, ordinaryColor: string) {
    return this.#theme === 'bright' ? brightColor : ordinaryColor;
  }

  #consoleMix(mes: any, typeColor: string, ordinaryColor: string, typeConsole?: 'bg' | 'noTime'): void {
    const color = this.#bColor(typeColor, ordinaryColor);

    if (typeConsole === undefined) {
      this.bConsole(mes, color);
    }

    if (typeConsole === 'bg') {
      this.bConsoleBg(mes, color);
    }

    if (typeConsole === 'noTime') {
      this.bConsole(mes, color, false);
    }
  }

  changeTheme(): this {
    const isBright = (this.#theme === 'bright');
    this.#theme =  isBright ? 'ordinary' : 'bright';

    return this;
  }

  brightTheme(): this {
    this.#theme =  'bright';

    return this;
  }

  ordinaryTheme(): this {
    this.#theme =  'ordinary';

    return this;
  }

  type(mes: any): this {
    this.#consoleMix(mes, this.#typeColor, this.#typeOrdinaryColor);

    return this;
  }

  mes(mes: any): this {
    this.#consoleMix(mes, this.#mesColor, this.#mesOrdinaryColor);

    return this;
  }

  info(mes: any): this {
    this.#consoleMix(mes, this.#infoColor, this.#infoOrdinaryColor);

    return this;
  }

  success(mes: any): this {
    this.#consoleMix(mes, this.#successColor, this.#successOrdinaryColor);

    return this;
  }

  warn(mes: any): this {
    this.#consoleMix(mes, this.#warnColor, this.#warnOrdinaryColor);

    return this;
  }

  error(mes: any): this {
    this.#consoleMix(mes, this.#errorColor, this.#errorOrdinaryColor);

    return this;
  }

  // Вывод сообщения с background-ом
  typeBg(mes: any): this {
    this.#consoleMix(mes, this.#typeColor, this.#typeOrdinaryColor, 'bg');

    return this;
  }

  mesBg(mes: any): this {
    this.#consoleMix(mes, this.#mesColor, this.#mesOrdinaryColor, 'bg');

    return this;
  }

  infoBg(mes: any): this {
    this.#consoleMix(mes, this.#infoColor, this.#infoOrdinaryColor, 'bg');

    return this;
  }

  successBg(mes: any): this {
    this.#consoleMix(mes, this.#successColor, this.#successOrdinaryColor, 'bg');

    return this;
  }

  warnBg(mes: any): this {
    this.#consoleMix(mes, this.#warnColor, this.#warnOrdinaryColor, 'bg');

    return this;
  }

  errorBg(mes: any): this {
    this.#consoleMix(mes, this.#errorColor, this.#errorOrdinaryColor, 'bg');

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
    this.#consoleMix(mes, this.#typeColor, this.#typeOrdinaryColor, 'noTime');

    return this;
  }

  mesNoTime(mes: any): this {
    this.#consoleMix(mes, this.#mesColor, this.#mesOrdinaryColor, 'noTime');

    return this;
  }

  infoNoTime(mes: any): this {
    this.#consoleMix(mes, this.#infoColor, this.#infoOrdinaryColor, 'noTime');

    return this;
  }

  successNoTime(mes: any): this {
    this.#consoleMix(mes, this.#successColor, this.#successOrdinaryColor, 'noTime');

    return this;
  }

  warnNoTime(mes: any): this {
    this.#consoleMix(mes, this.#warnColor, this.#warnOrdinaryColor, 'noTime');

    return this;
  }

  errorNoTime(mes: any): this {
    this.#consoleMix(mes, this.#errorColor, this.#errorOrdinaryColor, 'noTime');

    return this;
  }
}

export default Logger;