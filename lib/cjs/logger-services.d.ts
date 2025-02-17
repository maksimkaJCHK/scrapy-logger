declare class LoggerServices {
    #private;
    space(): void;
    clear(): void;
    group(nameGroup?: string): void;
    endGroup(): void;
    disableBg(): void;
    enableBg(): void;
    disableFullYear(): void;
    enableFullYear(): void;
    disableTime(): void;
    enableTime(): void;
    disableDate(): void;
    enableDate(): void;
    disableTimePeriod(): void;
    enableTimePeriod(): void;
    bTimePeriod(): string;
    protected bConsole(mes: any, color: string): void;
}
export default LoggerServices;
