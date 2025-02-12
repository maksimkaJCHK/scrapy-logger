import LoggerServices from './logger-services.js';
declare class Logger extends LoggerServices {
    type(mes: any): void;
    mes(mes: any): void;
    info(mes: any): void;
    success(mes: any): void;
    warn(mes: any): void;
    error(mes: any): void;
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
declare const _default: Logger;
export default _default;
