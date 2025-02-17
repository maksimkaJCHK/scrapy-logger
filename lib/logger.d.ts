import LoggerServices from './logger-services.js';
declare class Logger extends LoggerServices {
    type(mes: any): this;
    mes(mes: any): this;
    info(mes: any): this;
    success(mes: any): this;
    warn(mes: any): this;
    error(mes: any): this;
    typeBg(mes: any): void;
    mesBg(mes: any): void;
    infoBg(mes: any): void;
    successBg(mes: any): void;
    warnBg(mes: any): void;
    errorBg(mes: any): void;
    oneMes(mes: any): void;
    oneSuccess(mes: any): void;
    oneType(mes: any): void;
    oneWarn(mes: any): void;
    oneError(mes: any): void;
}
export default Logger;
