


console.log("Is This Working?");

class Clock {
  constructor() {
    const dateObject = new Date();
    this.hours = dateObject.getHours();
    this.minutes = dateObject.getMinutes();
    this.seconds = dateObject.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;

    if (this.seconds > 59) {
      this.minutes++;
      this.seconds = 0;
    }

    if (this.minutes > 59) {
      this.hours++;
      this.minutes = 0;
    }

    this.printTime();
  }
}

let clock = new Clock();
