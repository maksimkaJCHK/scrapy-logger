declare class LoggerServices {
    #private;
    space(): this;
    clear(): this;
    group(nameGroup?: string): this;
    endGroup(): this;
    disableBg(): this;
    enableBg(): this;
    disableFullYear(): this;
    enableFullYear(): this;
    disableTime(): this;
    enableTime(): this;
    disableDate(): this;
    enableDate(): this;
    disableTimePeriod(): this;
    enableTimePeriod(): this;
    bTimePeriod(): string;
    protected bConsoleBg(mes: any, color: string, isTimePeriod?: boolean): void;
    protected bConsole(mes: any, color: string, isTimePeriod?: boolean): void;
}
export default LoggerServices;
