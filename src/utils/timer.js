// Timer utility — countdown with warning thresholds

export class Timer {
  constructor({ totalSeconds, onTick, onWarning, onDanger, onExpire }) {
    this.totalSeconds = totalSeconds;
    this.remaining = totalSeconds;
    this.onTick = onTick;
    this.onWarning = onWarning;
    this.onDanger = onDanger;
    this.onExpire = onExpire;
    this.interval = null;
    this.running = false;
    this.warningSent = false;
    this.dangerSent = false;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.interval = setInterval(() => this._tick(), 1000);
  }

  pause() {
    this.running = false;
    clearInterval(this.interval);
    this.interval = null;
  }

  resume() {
    this.start();
  }

  setRemaining(seconds) {
    this.remaining = seconds;
  }

  _tick() {
    this.remaining--;

    if (this.remaining <= 0) {
      this.remaining = 0;
      this.pause();
      this.onTick?.(this.remaining);
      this.onExpire?.();
      return;
    }

    // Warning at 10 minutes
    if (this.remaining <= 600 && !this.warningSent) {
      this.warningSent = true;
      this.onWarning?.();
    }

    // Danger at 5 minutes
    if (this.remaining <= 300 && !this.dangerSent) {
      this.dangerSent = true;
      this.onDanger?.();
    }

    this.onTick?.(this.remaining);
  }

  getFormatted() {
    const h = Math.floor(this.remaining / 3600);
    const m = Math.floor((this.remaining % 3600) / 60);
    const s = this.remaining % 60;
    const mm = String(m).padStart(2, '0');
    const ss = String(s).padStart(2, '0');
    if (h > 0) {
      return `${String(h).padStart(2, '0')}:${mm}:${ss}`;
    }
    return `00:${mm}:${ss}`;
  }

  getState() {
    if (this.remaining <= 300) return 'danger';
    if (this.remaining <= 600) return 'warning';
    return 'normal';
  }

  destroy() {
    this.pause();
  }
}
