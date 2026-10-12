/**
 * Procedural Web Audio API Sound Engine
 * Generates binaural beats (Gamma 40Hz for focus, Alpha 10Hz for calm),
 * Tibetan singing bowl completion chimes, and tactile acoustic micro-clicks.
 * 100% client-side, zero external MP3 assets required.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isAmbiencePlaying: boolean = false;
  private ambienceMode: 'gamma' | 'alpha' | 'zen' = 'gamma';
  private masterGain: GainNode | null = null;
  private ambienceGain: GainNode | null = null;
  private oscLeft: OscillatorNode | null = null;
  private oscRight: OscillatorNode | null = null;
  private pinkNoiseNode: AudioNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.7, this.ctx.currentTime);
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getIsAmbiencePlaying(): boolean {
    return this.isAmbiencePlaying;
  }

  public getAmbienceMode(): 'gamma' | 'alpha' | 'zen' {
    return this.ambienceMode;
  }

  /**
   * Tactile click sound for UI buttons & card swipes
   */
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  /**
   * Tibetan singing bowl harmonic chime for concept completion
   */
  public playBell() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      // Singing bowl harmonic frequencies (Fundamental + overtones)
      const frequencies = [288, 576, 864, 1152];
      const gains = [0.25, 0.12, 0.06, 0.03];

      frequencies.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(gains[idx], now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 3.3);
      });
    } catch {
      // ignore
    }
  }

  /**
   * Ambient focus generator: Gamma 40Hz (cognitive focus) or Alpha 10Hz (calm state)
   */
  public toggleAmbience(mode?: 'gamma' | 'alpha' | 'zen') {
    this.initContext();
    if (mode) this.ambienceMode = mode;

    if (this.isAmbiencePlaying) {
      this.stopAmbience();
    } else {
      this.startAmbience();
    }
    return this.isAmbiencePlaying;
  }

  public setAmbienceMode(mode: 'gamma' | 'alpha' | 'zen') {
    this.ambienceMode = mode;
    if (this.isAmbiencePlaying) {
      this.stopAmbience();
      this.startAmbience();
    }
  }

  public startAmbience() {
    if (!this.ctx || !this.masterGain) this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.stopAmbience(); // ensure cleanup

    this.ambienceGain = this.ctx.createGain();
    this.ambienceGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.ambienceGain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 1.5);
    this.ambienceGain.connect(this.masterGain);

    const baseCarrier = 216; // Sacred sound carrier Hz
    let beatOffset = 40; // 40 Hz Gamma

    if (this.ambienceMode === 'alpha') {
      beatOffset = 10; // 10 Hz Alpha
    } else if (this.ambienceMode === 'zen') {
      beatOffset = 6; // Theta 6 Hz deep peace
    }

    // Left channel
    this.oscLeft = this.ctx.createOscillator();
    this.oscLeft.type = 'sine';
    this.oscLeft.frequency.setValueAtTime(baseCarrier, this.ctx.currentTime);

    // Right channel
    this.oscRight = this.ctx.createOscillator();
    this.oscRight.type = 'sine';
    this.oscRight.frequency.setValueAtTime(baseCarrier + beatOffset, this.ctx.currentTime);

    const merger = this.ctx.createChannelMerger(2);
    this.oscLeft.connect(merger, 0, 0);
    this.oscRight.connect(merger, 0, 1);

    merger.connect(this.ambienceGain);

    this.oscLeft.start();
    this.oscRight.start();

    this.isAmbiencePlaying = true;
  }

  public stopAmbience() {
    if (this.ambienceGain && this.ctx) {
      this.ambienceGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        try {
          if (this.oscLeft) {
            this.oscLeft.stop();
            this.oscLeft.disconnect();
            this.oscLeft = null;
          }
          if (this.oscRight) {
            this.oscRight.stop();
            this.oscRight.disconnect();
            this.oscRight = null;
          }
          if (this.ambienceGain) {
            this.ambienceGain.disconnect();
            this.ambienceGain = null;
          }
        } catch {
          // ignore
        }
      }, 500);
    }
    this.isAmbiencePlaying = false;
  }
}

export const audioEngine = new AudioEngine();
