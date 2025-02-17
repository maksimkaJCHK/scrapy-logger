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
    protected bConsole(mes: any, color: string): void;
}
export default LoggerServices;
