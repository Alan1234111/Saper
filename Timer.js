import { UI } from "./UI.js";

export class Timer extends UI {
  #element = null;
  numberOfSeconds = 0;
  #maxNumberOfSeconds = 999;
  #timerInterval = null;

  init() {
    this.#element = this.getElement(this.UiSelectors.timer);
  }

  startTimer() {
    this.#timerInterval = setInterval(() => {
      this.#updateTimer();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.#timerInterval);
  }

  #updateTimer() {
    this.numberOfSeconds++;
    this.numberOfSeconds <= this.#maxNumberOfSeconds
      ? this.#setTimerValue(this.numberOfSeconds)
      : this.stopTimer();
  }

  #setTimerValue(value) {
    this.#element.textContent = value;
  }
}
