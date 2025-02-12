import LoggerServices from './logger-services.js';

class Logger extends LoggerServices {
  type(mes: any): void {
    this.bConsole(mes, 'brightWhite');
  }

  mes(mes: any): void {
    this.bConsole(mes, 'brightMagenta');
  }

  info(mes: any): void {
    this.bConsole(mes, 'brightBlue');
  }

  success(mes: any): void {
    this.bConsole(mes, 'brightGreen');
  }

  warn(mes: any): void {
    this.bConsole(mes, 'brightYellow');
  }

  error(mes: any): void {
    this.bConsole(mes, 'brightRed');
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

export default new Logger();