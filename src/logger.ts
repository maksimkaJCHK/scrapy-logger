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

  typeBg(mes: any): void {
    this.enableBg();
    this.bConsole(mes, 'brightWhite');
    this.disableBg();
  }

  mesBg(mes: any): void {
    this.enableBg();
    this.bConsole(mes, 'brightMagenta');
    this.disableBg();
  }

  infoBg(mes: any): void {
    this.enableBg();
    this.bConsole(mes, 'brightBlue');
    this.disableBg();
  }

  successBg(mes: any): void {
    this.enableBg();
    this.bConsole(mes, 'brightGreen');
    this.disableBg();
  }

  warnBg(mes: any): void {
    this.enableBg();
    this.bConsole(mes, 'brightYellow');
    this.disableBg();
  }

  errorBg(mes: any): void {
    this.enableBg();
    this.bConsole(mes, 'brightRed');
    this.disableBg();
  }

  oneMes(mes: any): void {
    this.clear();
    this.mes(mes);
  }

  oneSuccess(mes: any): void {
    this.clear();
    this.success(mes);
  }

  oneType(mes: any): void {
    this.clear();
    this.type(mes);
  }

  oneWarn(mes: any): void {
    this.clear();
    this.warn(mes);
  }

  oneError(mes: any): void {
    this.clear();
    this.error(mes);
  }
}

export default Logger;