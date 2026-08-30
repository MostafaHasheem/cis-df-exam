// Storage utility — localStorage wrapper for exam data persistence

const STORAGE_PREFIX = 'cisdf_';

export const storage = {
  get(key) {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write failed:', e);
    }
  },

  remove(key) {
    localStorage.removeItem(STORAGE_PREFIX + key);
  },

  // Attempt history
  getAttempts(bankId) {
    return this.get(`attempts_${bankId}`) || [];
  },

  saveAttempt(bankId, attempt) {
    const attempts = this.getAttempts(bankId);
    attempts.unshift(attempt); // newest first
    this.set(`attempts_${bankId}`, attempts);
  },

  // In-progress exam state (auto-save)
  saveExamState(state) {
    this.set('exam_in_progress', state);
  },

  getExamState() {
    return this.get('exam_in_progress');
  },

  clearExamState() {
    this.remove('exam_in_progress');
  },
};
