import LoggerServices from './logger-services.js';
declare class Logger extends LoggerServices {
    type(mes: any): this;
    mes(mes: any): this;
    info(mes: any): this;
    success(mes: any): this;
    warn(mes: any): this;
    error(mes: any): this;
    typeBg(mes: any): this;
    mesBg(mes: any): this;
    infoBg(mes: any): this;
    successBg(mes: any): this;
    warnBg(mes: any): this;
    errorBg(mes: any): this;
    oneType(mes: any): this;
    oneMes(mes: any): this;
    oneInfo(mes: any): this;
    oneSuccess(mes: any): this;
    oneWarn(mes: any): this;
    oneError(mes: any): this;
    typeNoTime(mes: any): this;
    mesNoTime(mes: any): this;
    infoNoTime(mes: any): this;
    successNoTime(mes: any): this;
    warnNoTime(mes: any): this;
    errorNoTime(mes: any): this;
}
export default Logger;
