class LoggerServices {
  #isTime = true;
  #isDate = true;
  #isFullYear = false;
  #isBg = false;

  #colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    fg: {
      black: "\x1b[30m",
      red: "\x1b[31m",
      brightRed: "\x1b[91m",
      green: "\x1b[32m",
      brightGreen: "\x1b[92m",
      yellow: "\x1b[33m",
      brightYellow: "\x1b[93m",
      blue: "\x1b[34m",
      brightBlue: "\x1b[94m",
      magenta: "\x1b[35m",
      brightMagenta: "\x1b[95m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",
      brightWhite: "\x1b[97m",
      gray: "\x1b[90m",
      crimson: "\x1b[38m"
    },
    bg: {
      black: "\x1b[40m",
      red: "\x1b[41m",
      brightRed: "\x1b[101m",
      green: "\x1b[42m",
      brightGreen: "\x1b[102m",
      yellow: "\x1b[43m",
      brightYellow: "\x1b[103m",
      blue: "\x1b[44m",
      brightBlue: "\x1b[104m",
      magenta: "\x1b[45m",
      brightMagenta: "\x1b[105m",
      cyan: "\x1b[46m",
      white: "\x1b[47m",
      brightWhite: "\x1b[107m",
      gray: "\x1b[100m",
      crimson: "\x1b[48m"
    }
  }

  space(): this {
    console.log();

    return this;
  }

  clear(): this {
    console.clear();

    return this;
  }

  group(nameGroup: string = ''): this {
    console.group(nameGroup);

    return this;
  }

  endGroup(): this {
    console.groupEnd();

    return this;
  }

  disableBg(): this {
    this.#isBg = false;

    return this;
  }

  enableBg(): this {
    this.#isBg = true;

    return this;
  }

  disableFullYear(): this {
    this.#isFullYear = false;

    return this;
  }

  enableFullYear(): this {
    this.#isFullYear = true;

    return this;
  }

  disableTime(): this {
    this.#isTime = false;

    return this;
  }

  enableTime(): this {
    this.#isTime = true;

    return this;
  }

  disableDate(): this {
    this.#isDate = false;

    return this;
  }

  enableDate(): this {
    this.#isDate = true;

    return this;
  }

  disableTimePeriod(): this {
    this.#isDate = false;
    this.#isTime = false;

    return this;
  }

  enableTimePeriod(): this {
    this.#isDate = true;
    this.#isTime = true;

    return this;
  }

  // Для построения времени
  #bNumb(numb: number): string {
    return (numb < 10) ? '0' + numb : `${numb}`;
  }

  #bDate(date: Date): string {
    const day = this.#bNumb(date.getDate());
    const month = this.#bNumb(date.getMonth() + 1);
    const fullYear = date.getFullYear();

    const year = this.#isFullYear ? fullYear : String(fullYear).slice(2);

    return `${day}.${month}.${year}`;
  }

  #bTime(date: Date): string {
    const hours = this.#bNumb(date.getHours());
    const min = this.#bNumb(date.getMinutes());
    const sec = this.#bNumb(date.getSeconds());

    return `${hours}:${min}:${sec}`;
  }

  bTimePeriod(): string {
    const cDate = new Date();
    let sTime = '';
    let sDate = '';

    if (this.#isDate) sDate = this.#bDate(cDate)
    if (this.#isTime) sTime = this.#bTime(cDate);
    if (this.#isTime && this.#isDate) return `${sTime}  ${sDate}  `;
    if (this.#isTime) return `${sTime}  `;
    if (this.#isDate) return `${sDate}  `;

    return '';
  }

  // Для правильного вывода консоли
  #bConsoleText(mes: any, color: string): void {
    const colorTxt = this.#colors.fg[color];

    if (!this.#isTime && !this.#isDate) {
      console.log(
        colorTxt,
        mes,
        this.#colors.reset
      );
    } else {
      console.log(
        colorTxt,
        this.bTimePeriod(),
        mes,
        this.#colors.reset
      );
    }
  }

  #bConsoleBg(mes: any, color: string): void {
    const isWhiteColorArr = [
      'brightBlue',
      'brightRed',
      'brightMagenta'
    ];

    const typeColor = isWhiteColorArr.includes(color)
      ? 'brightWhite'
      : 'black';

    const colorTxt = this.#colors.fg[typeColor];
    const colorBg = this.#colors.bg[color];

    if (!this.#isTime && !this.#isDate) {
      console.log(
        colorBg,
        colorTxt,
        mes,
        this.#colors.reset
      );
    } else {
      console.log(
        colorBg,
        colorTxt,
        this.bTimePeriod(),
        mes,
        this.#colors.reset
      );
    }
  }

  protected bConsole(mes: any, color: string): void {
    this.#isBg
      ? this.#bConsoleBg(mes, color)
      : this.#bConsoleText(mes, color);
  }
}

export default LoggerServices;