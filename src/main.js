// CIS-DF Exam Simulator — Main Application Controller
import { questions as bank1Questions, bankMeta as bank1Meta } from './data/questions-bank1.js';
import { questions as bank2Questions, bankMeta as bank2Meta } from './data/questions-bank2.js';
import { questions as bank3Questions, bankMeta as bank3Meta } from './data/questions-bank3.js';
import { storage } from './utils/storage.js';
import { Timer } from './utils/timer.js';
import { shuffle, generateAccessCode } from './utils/shuffle.js';
import { registerSW } from 'virtual:pwa-register';

// Polyfill for Drag and Drop on Mobile devices (iOS/Android)
import { polyfill } from "mobile-drag-drop";
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";
import "mobile-drag-drop/default.css";

polyfill({
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

window.addEventListener('touchmove', function() {}, {passive: false});

// Register Service Worker for offline PWA support
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload to update?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App is ready to work offline');
  }
});


const app = document.getElementById('app');
const banks = {
  bank1: { meta: bank1Meta, questions: bank1Questions },
  bank2: { meta: bank2Meta, questions: bank2Questions },
  bank3: { meta: bank3Meta, questions: bank3Questions },
};

let state = {
  screen: 'home', // home | exam | results
  homeTab: 'exams', // exams | history
  selectedBank: null,
  currentQuestion: 0,
  answers: {},       // { questionId: answer }
  flags: new Set(),
  timer: null,
  accessCode: '',
  timerState: 'normal',
  showReview: false,
  showQuestionList: false,
  examStartTime: null,
  examEndTime: null,
  dragState: {},     // for drag-and-drop: { questionId: { source: target } }
  results: null,
  historyBankFilter: 'all',
  showConfirm: false,
};

// ── SVG Icons ──
const icons = {
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  flagFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
};

// ── Render Router ──
function render() {
  switch (state.screen) {
    case 'home':
      renderHome();
      break;
    case 'exam':
      renderExam();
      break;
    case 'results':
      renderResults();
      break;
  }
}

// ──────────────────────────────────────────────
// HOME SCREEN
// ──────────────────────────────────────────────
function renderHome() {
  const allAttempts = [
    ...storage.getAttempts('bank1').map(a => ({ ...a, bankId: 'bank1' })),
    ...storage.getAttempts('bank2').map(a => ({ ...a, bankId: 'bank2' })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredAttempts = state.historyBankFilter === 'all'
    ? allAttempts
    : allAttempts.filter(a => a.bankId === state.historyBankFilter);

  app.innerHTML = `
    <div class="home-screen">
      <div class="home-header">
        <div class="home-logo">
          <img src="sn-university-logo.svg" alt="ServiceNow University" />
          <span class="home-logo-text">Exam Simulator</span>
        </div>
        <div class="home-nav">
          <button class="home-nav-btn ${state.homeTab === 'exams' ? 'active' : ''}" data-tab="exams">Exams</button>
          <button class="home-nav-btn ${state.homeTab === 'history' ? 'active' : ''}" data-tab="history">History ${allAttempts.length > 0 ? `(${allAttempts.length})` : ''}</button>
        </div>
      </div>

      <div class="home-content">
        <div class="home-hero">
          <h1>CIS — Discovery Fundamentals</h1>
          <p>Practice exam simulator with timed sessions, drag-and-drop matching, score tracking, and detailed review.</p>
        </div>

        ${state.homeTab === 'exams' ? `
          <div class="exam-cards">
            ${renderExamCard('bank1', bank1Meta)}
            ${renderExamCard('bank2', bank2Meta)}
          </div>
        ` : `
          <div class="history-section">
            <h2>${icons.clock} Attempt History</h2>
            <div style="display:flex;gap:8px;margin-bottom:20px;">
              <button class="home-nav-btn ${state.historyBankFilter === 'all' ? 'active' : ''}" data-filter="all" style="padding:6px 16px;font-size:13px;">All</button>
              <button class="home-nav-btn ${state.historyBankFilter === 'bank1' ? 'active' : ''}" data-filter="bank1" style="padding:6px 16px;font-size:13px;">Practice Exam</button>
              <button class="home-nav-btn ${state.historyBankFilter === 'bank2' ? 'active' : ''}" data-filter="bank2" style="padding:6px 16px;font-size:13px;">Sample Exam</button>
            </div>
            ${filteredAttempts.length === 0 ? `
              <div class="history-empty">No attempts yet. Start an exam to see your history here.</div>
            ` : `
              <table class="history-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Exam</th>
                    <th>Score</th>
                    <th>Correct</th>
                    <th>Time</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  ${filteredAttempts.map((a, i) => `
                    <tr data-attempt-idx="${i}" data-bank="${a.bankId}">
                      <td>${new Date(a.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                      <td>${a.bankId === 'bank1' ? 'Practice Exam' : 'Sample Exam'}</td>
                      <td><strong>${a.scorePercent}%</strong></td>
                      <td>${a.correctCount}/${a.totalQuestions}</td>
                      <td>${a.timeTaken}</td>
                      <td><span class="score-badge ${a.passed ? 'pass' : 'fail'}">${a.passed ? 'PASS' : 'FAIL'}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            `}
          </div>
        `}
      </div>
    </div>
  `;

  // Event listeners
  app.querySelectorAll('.home-nav-btn[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.homeTab = btn.dataset.tab;
      render();
    });
  });

  app.querySelectorAll('.home-nav-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.historyBankFilter = btn.dataset.filter;
      render();
    });
  });

  app.querySelectorAll('.btn-start').forEach(btn => {
    btn.addEventListener('click', () => startExam(btn.dataset.bank));
  });

  app.querySelectorAll('.btn-history').forEach(btn => {
    btn.addEventListener('click', () => {
      state.homeTab = 'history';
      state.historyBankFilter = btn.dataset.bank;
      render();
    });
  });

  // Click on history row to view results
  app.querySelectorAll('.history-table tbody tr').forEach(tr => {
    tr.addEventListener('click', () => {
      const bankId = tr.dataset.bank;
      const idx = parseInt(tr.dataset.attemptIdx);
      const attempts = [
        ...storage.getAttempts('bank1').map(a => ({ ...a, bankId: 'bank1' })),
        ...storage.getAttempts('bank2').map(a => ({ ...a, bankId: 'bank2' })),
        ...storage.getAttempts('bank3').map(a => ({ ...a, bankId: 'bank3' })),
      ].sort((a, b) => new Date(b.date) - new Date(a.date));
      const filtered = state.historyBankFilter === 'all'
        ? attempts
        : attempts.filter(a => a.bankId === state.historyBankFilter);
      if (filtered[idx]) {
        state.results = filtered[idx];
        state.selectedBank = filtered[idx].bankId;
        state.screen = 'results';
        render();
      }
    });
  });
}

function renderExamCard(bankId, meta) {
  const attempts = storage.getAttempts(bankId);
  const bestScore = attempts.length > 0 ? Math.max(...attempts.map(a => a.scorePercent)) : null;

  return `
    <div class="exam-card">
      <span class="exam-card-badge ${bankId === 'bank2' ? 'bank2' : (bankId === 'bank3' ? 'bank3' : '')}">${bankId === 'bank1' ? 'Bank 1' : (bankId === 'bank2' ? 'Bank 2' : 'Bank 3')}</span>
      <h3>${meta.title}</h3>
      <p>${meta.description}</p>
      <div class="exam-card-stats">
        <div class="exam-card-stat">
          <span class="exam-card-stat-value">${meta.totalQuestions}</span>
          <span class="exam-card-stat-label">Questions</span>
        </div>
        <div class="exam-card-stat">
          <span class="exam-card-stat-value">${meta.timeLimitMinutes}m</span>
          <span class="exam-card-stat-label">Time Limit</span>
        </div>
        <div class="exam-card-stat">
          <span class="exam-card-stat-value">${meta.passingScore}%</span>
          <span class="exam-card-stat-label">Pass Score</span>
        </div>
        ${bestScore !== null ? `
          <div class="exam-card-stat">
            <span class="exam-card-stat-value" style="color:${bestScore >= meta.passingScore ? 'var(--sn-green)' : '#ef5350'}">${bestScore}%</span>
            <span class="exam-card-stat-label">Best Score</span>
          </div>
        ` : ''}
      </div>
      <div class="exam-card-actions">
        <button class="btn-start" data-bank="${bankId}">Start Exam</button>
        ${attempts.length > 0 ? `<button class="btn-history" data-bank="${bankId}">History (${attempts.length})</button>` : ''}
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// EXAM LOGIC
// ──────────────────────────────────────────────
function startExam(bankId) {
  const bank = banks[bankId];
  state.screen = 'exam';
  state.selectedBank = bankId;
  state.currentQuestion = 0;
  state.answers = {};
  state.flags = new Set();
  state.dragState = {};
  
  // Pre-shuffle sources for drag-match questions
  bank.questions.forEach(q => {
    if (q.type === 'drag-match') {
      q.shuffledSources = shuffle([...q.sources]);
    }
  });

  state.accessCode = generateAccessCode();
  state.timerState = 'normal';
  state.showReview = false;
  state.showQuestionList = false;
  state.examStartTime = Date.now();
  state.showConfirm = false;

  // Initialize timer
  if (state.timer) state.timer.destroy();
  state.timer = new Timer({
    totalSeconds: bank.meta.timeLimitMinutes * 60,
    onTick: (remaining) => {
      updateTimerDisplay();
      // Auto-save every 30 seconds
      if (remaining % 30 === 0) autoSaveExam();
    },
    onWarning: () => {
      state.timerState = 'warning';
    },
    onDanger: () => {
      state.timerState = 'danger';
    },
    onExpire: () => {
      submitExam();
    },
  });

  state.timer.start();
  render();
}

function autoSaveExam() {
  storage.saveExamState({
    bankId: state.selectedBank,
    currentQuestion: state.currentQuestion,
    answers: state.answers,
    flags: [...state.flags],
    dragState: state.dragState,
    remaining: state.timer?.remaining,
    startTime: state.examStartTime,
  });
}

function updateTimerDisplay() {
  const timerEl = document.querySelector('.timer-value');
  if (!timerEl || !state.timer) return;
  timerEl.textContent = state.timer.getFormatted();
  timerEl.className = 'timer-value ' + state.timer.getState();
}

function getQuestions() {
  return banks[state.selectedBank].questions;
}

function getCurrentQuestion() {
  return getQuestions()[state.currentQuestion];
}

function isAnswered(qId) {
  if (state.dragState[qId] && Object.keys(state.dragState[qId]).length > 0) return true;
  return state.answers[qId] !== undefined;
}

// ──────────────────────────────────────────────
// EXAM SCREEN RENDER
// ──────────────────────────────────────────────
function renderExam() {
  const questions = getQuestions();
  const q = getCurrentQuestion();
  const totalQ = questions.length;

  app.innerHTML = `
    <div class="exam-screen">
      <!-- Header -->
      <header class="exam-header">
        <div class="header-left">
          <div class="header-logo">
            <img src="sn-university-logo.svg" alt="ServiceNow University" />
          </div>
        </div>
        <div class="header-center">
          <!-- Removed recording and access code per user request -->
        </div>
        <div class="header-right">
          <div class="header-timer">
            <span class="timer-label">Time Remaining:</span>
            <span class="timer-value ${state.timerState}">${state.timer.getFormatted()}</span>
            <div class="timer-recording-dot"></div>
          </div>
        </div>
      </header>

      <!-- Sidebar -->
      <nav class="exam-sidebar">
        <div class="sidebar-icon" title="Settings">${icons.settings}</div>
        <div class="sidebar-icon ${state.showQuestionList ? 'active' : ''}" id="sidebar-list" title="Question List">${icons.list}</div>
        <div class="sidebar-icon" title="Chat">${icons.chat}</div>
        <div class="sidebar-icon" title="Notes">${icons.edit}</div>
        <div class="sidebar-icon" title="Info">${icons.info}</div>
        <div class="sidebar-icon" title="Help">${icons.help}</div>
      </nav>

      <!-- Main Content -->
      <main class="exam-content">
        <div class="question-header">
          <div class="question-number">
            <span class="q-check ${isAnswered(q.id) ? 'visible' : ''}">${icons.check}</span>
            Question ${state.currentQuestion + 1} of ${totalQ}
          </div>
          <button class="flag-btn ${state.flags.has(q.id) ? 'flagged' : ''}" id="flag-btn">
            ${state.flags.has(q.id) ? icons.flagFilled : icons.flag}
            Flag for Review
          </button>
        </div>

        <div class="question-instruction">${q.instruction}</div>

        <div class="question-body">
          <div class="question-text">${q.text}</div>
          ${q.type === 'drag-match' ? renderDragMatch(q) : renderMCQ(q)}
        </div>
      </main>

      <!-- Footer -->
      <footer class="exam-footer">
        <div class="footer-left">
          <button class="btn-review" id="btn-review">Review</button>
        </div>
        <div class="footer-right">
          <button class="btn-back" id="btn-back" ${state.currentQuestion === 0 ? 'disabled' : ''}>Back</button>
          <button class="btn-next" id="btn-next">${state.currentQuestion === totalQ - 1 ? 'Finish' : 'Next'}</button>
        </div>
      </footer>

      ${state.showQuestionList ? renderQuestionListPanel() : ''}
      ${state.showReview ? renderReviewOverlay() : ''}
      ${state.showConfirm ? renderConfirmDialog() : ''}
    </div>
  `;

  bindExamEvents();
}

// ── MCQ Renderer ──
function renderMCQ(q) {
  const isMulti = q.type === 'multi';
  const currentAnswer = state.answers[q.id];

  return `
    <div class="mcq-options">
      ${q.options.map((opt, i) => {
        const letter = opt.charAt(0);
        let selected = false;
        if (isMulti && Array.isArray(currentAnswer)) {
          selected = currentAnswer.includes(letter);
        } else {
          selected = currentAnswer === letter;
        }

        return `
          <div class="mcq-option ${selected ? 'selected' : ''}" data-letter="${letter}" data-idx="${i}">
            <div class="${isMulti ? 'mcq-checkbox' : 'mcq-radio'}"></div>
            <span class="mcq-option-text">${opt}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── Drag-and-Drop Renderer ──
function renderDragMatch(q) {
  const placements = state.dragState[q.id] || {};
  const placedSources = new Set(Object.keys(placements));

  // Determine targets list
  const targets = q.targets;
  // Build reverse map: target -> placed source
  const targetToSource = {};
  for (const [src, tgt] of Object.entries(placements)) {
    targetToSource[tgt] = src;
  }

  return `
    <div class="drag-match-container">
      <div class="drag-source-panel">
        ${(q.shuffledSources || q.sources).map((src, i) => `
          <div class="drag-item ${placedSources.has(src) ? 'placed' : ''}"
               draggable="${placedSources.has(src) ? 'false' : 'true'}"
               data-source="${src}"
               data-source-idx="${i}">
            <div class="drag-handle">
              <div class="drag-dots-col">
                ${[0,1,2,3,4].map(() => '<div class="drag-dots-row"><div class="drag-handle-dot"></div><div class="drag-handle-dot"></div></div>').join('')}
              </div>
            </div>
            <span>${src}</span>
          </div>
        `).join('')}
      </div>
      <div class="drag-answer-panel">
        <h4>Answer Area</h4>
        <div class="drag-target-rows">
          ${targets.map((tgt, i) => {
            const placedSource = targetToSource[tgt];
            return `
              <div class="drag-target-row">
                <div class="drop-zone ${placedSource ? 'filled' : ''}"
                     data-target="${tgt}"
                     data-target-idx="${i}">
                  ${placedSource || 'Drop here...'}
                </div>
                <div class="drag-target-label">${tgt}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ── Question List Panel ──
function renderQuestionListPanel() {
  const questions = getQuestions();
  return `
    <div class="question-list-panel">
      <div class="question-list-header">All Questions (${questions.length})</div>
      <div class="question-list-body">
        ${questions.map((q, i) => `
          <div class="question-list-item ${i === state.currentQuestion ? 'active' : ''}" data-qidx="${i}">
            <div class="question-list-dot ${isAnswered(q.id) ? 'answered' : ''} ${state.flags.has(q.id) ? 'flagged' : ''}"></div>
            <span>Question ${i + 1}</span>
            ${state.flags.has(q.id) ? '<span style="margin-left:auto;color:#ff9800;font-size:12px;">⚑</span>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── Review Overlay ──
function renderReviewOverlay() {
  const questions = getQuestions();
  const answeredCount = questions.filter(q => isAnswered(q.id)).length;
  const flaggedCount = state.flags.size;

  return `
    <div class="review-overlay" id="review-overlay">
      <div class="review-panel">
        <div class="review-panel-header">
          <h3>Question Review</h3>
          <button class="review-close-btn" id="review-close">✕</button>
        </div>
        <div class="review-legend">
          <div class="review-legend-item"><div class="review-legend-dot answered"></div>Answered</div>
          <div class="review-legend-item"><div class="review-legend-dot flagged"></div>Flagged</div>
          <div class="review-legend-item"><div class="review-legend-dot unanswered"></div>Unanswered</div>
          <div class="review-legend-item"><div class="review-legend-dot current"></div>Current</div>
        </div>
        <div class="review-grid">
          ${questions.map((q, i) => {
            const answered = isAnswered(q.id);
            const flagged = state.flags.has(q.id);
            const current = i === state.currentQuestion;
            return `<button class="review-q-btn ${answered ? 'answered' : ''} ${flagged ? 'flagged' : ''} ${current ? 'current' : ''}" data-qidx="${i}">${i + 1}</button>`;
          }).join('')}
        </div>
        <div class="review-panel-footer">
          <span class="review-stats">${answeredCount}/${questions.length} answered · ${flaggedCount} flagged</span>
          <button class="btn-submit-exam" id="btn-submit-from-review">Submit Exam</button>
        </div>
      </div>
    </div>
  `;
}

// ── Confirm Dialog ──
function renderConfirmDialog() {
  const questions = getQuestions();
  const unanswered = questions.filter(q => !isAnswered(q.id)).length;
  return `
    <div class="confirm-overlay">
      <div class="confirm-dialog">
        <h3>Submit Exam?</h3>
        <p>${unanswered > 0 ? `You have <strong>${unanswered} unanswered question${unanswered > 1 ? 's' : ''}</strong>. ` : ''}Once submitted, you cannot change your answers. Are you sure you want to submit?</p>
        <div class="confirm-actions">
          <button class="btn-confirm-cancel" id="confirm-cancel">Cancel</button>
          <button class="btn-confirm-submit" id="confirm-submit">Submit</button>
        </div>
      </div>
    </div>
  `;
}

// ── Event Bindings ──
function bindExamEvents() {
  const q = getCurrentQuestion();

  // MCQ option clicks
  app.querySelectorAll('.mcq-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const letter = opt.dataset.letter;
      if (q.type === 'multi') {
        let current = state.answers[q.id] || [];
        if (!Array.isArray(current)) current = [];
        if (current.includes(letter)) {
          current = current.filter(l => l !== letter);
        } else {
          current.push(letter);
        }
        state.answers[q.id] = current.length > 0 ? current.sort() : undefined;
        if (state.answers[q.id] === undefined) delete state.answers[q.id];
      } else {
        state.answers[q.id] = letter;
      }
      renderExamContent();
    });
  });

  // Drag and drop
  if (q.type === 'drag-match') {
    bindDragDrop(q);
  }

  // Flag
  document.getElementById('flag-btn')?.addEventListener('click', () => {
    if (state.flags.has(q.id)) {
      state.flags.delete(q.id);
    } else {
      state.flags.add(q.id);
    }
    renderExamContent();
  });

  // Navigation
  document.getElementById('btn-back')?.addEventListener('click', () => {
    if (state.currentQuestion > 0) {
      state.currentQuestion--;
      renderExamContent();
    }
  });

  document.getElementById('btn-next')?.addEventListener('click', () => {
    const questions = getQuestions();
    if (state.currentQuestion < questions.length - 1) {
      state.currentQuestion++;
      renderExamContent();
    } else {
      // Last question — show confirm
      state.showConfirm = true;
      render();
    }
  });

  // Review
  document.getElementById('btn-review')?.addEventListener('click', () => {
    state.showReview = true;
    render();
  });

  // Review overlay
  document.getElementById('review-close')?.addEventListener('click', () => {
    state.showReview = false;
    render();
  });

  document.getElementById('review-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'review-overlay') {
      state.showReview = false;
      render();
    }
  });

  // Review grid clicks
  app.querySelectorAll('.review-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentQuestion = parseInt(btn.dataset.qidx);
      state.showReview = false;
      render();
    });
  });

  // Submit from review
  document.getElementById('btn-submit-from-review')?.addEventListener('click', () => {
    state.showReview = false;
    state.showConfirm = true;
    render();
  });

  // Confirm dialog
  document.getElementById('confirm-cancel')?.addEventListener('click', () => {
    state.showConfirm = false;
    render();
  });

  document.getElementById('confirm-submit')?.addEventListener('click', () => {
    submitExam();
  });

  // Sidebar question list toggle
  document.getElementById('sidebar-list')?.addEventListener('click', () => {
    state.showQuestionList = !state.showQuestionList;
    render();
  });

  // Question list item clicks
  app.querySelectorAll('.question-list-item').forEach(item => {
    item.addEventListener('click', () => {
      state.currentQuestion = parseInt(item.dataset.qidx);
      renderExamContent();
    });
  });

  // Click filled drop zone to remove placement
  app.querySelectorAll('.drop-zone.filled').forEach(zone => {
    zone.addEventListener('click', () => {
      const target = zone.dataset.target;
      const placements = state.dragState[q.id] || {};
      // Find which source maps to this target
      for (const [src, tgt] of Object.entries(placements)) {
        if (tgt === target) {
          delete placements[src];
          break;
        }
      }
      state.dragState[q.id] = { ...placements };
      renderExamContent();
    });
  });
}

function renderExamContent() {
  // Re-render only the content area for smoother transitions
  render();
}

// ── Drag and Drop Logic ──
function bindDragDrop(q) {
  const items = app.querySelectorAll('.drag-item[draggable="true"]');
  const zones = app.querySelectorAll('.drop-zone:not(.filled)');

  let draggedSource = null;

  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      draggedSource = item.dataset.source;
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggedSource);
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      draggedSource = null;
      app.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
    });
  });

  zones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const source = e.dataTransfer.getData('text/plain');
      const target = zone.dataset.target;

      if (!state.dragState[q.id]) state.dragState[q.id] = {};

      // Remove any existing placement for this source
      delete state.dragState[q.id][source];

      // Remove any other source placed on this target
      for (const [src, tgt] of Object.entries(state.dragState[q.id])) {
        if (tgt === target) {
          delete state.dragState[q.id][src];
          break;
        }
      }

      state.dragState[q.id][source] = target;
      renderExamContent();
    });
  });
}

// ──────────────────────────────────────────────
// SUBMIT & SCORING
// ──────────────────────────────────────────────
function submitExam() {
  if (state.timer) state.timer.destroy();
  state.examEndTime = Date.now();
  storage.clearExamState();

  const questions = getQuestions();
  const meta = banks[state.selectedBank].meta;
  let correctCount = 0;
  const wrongQuestions = [];

  questions.forEach(q => {
    const isCorrect = checkAnswer(q);
    if (isCorrect) {
      correctCount++;
    } else {
      wrongQuestions.push({
        id: q.id,
        text: q.text.substring(0, 150) + (q.text.length > 150 ? '...' : ''),
        fullText: q.text,
        type: q.type,
        yourAnswer: getAnswerDisplay(q),
        correctAnswer: getCorrectDisplay(q),
      });
    }
  });

  const scorePercent = Math.round((correctCount / questions.length) * 100);
  const timeTakenMs = state.examEndTime - state.examStartTime;
  const timeTakenMinutes = Math.floor(timeTakenMs / 60000);
  const timeTakenSeconds = Math.floor((timeTakenMs % 60000) / 1000);
  const timeTaken = `${timeTakenMinutes}m ${timeTakenSeconds}s`;

  const attempt = {
    date: new Date().toISOString(),
    scorePercent,
    correctCount,
    totalQuestions: questions.length,
    timeTaken,
    passed: scorePercent >= meta.passingScore,
    wrongQuestions,
    bankId: state.selectedBank,
    bankTitle: meta.title,
  };

  storage.saveAttempt(state.selectedBank, attempt);

  state.results = attempt;
  state.screen = 'results';
  state.showConfirm = false;
  state.showReview = false;
  render();
}

function checkAnswer(q) {
  if (q.type === 'drag-match') {
    const placements = state.dragState[q.id] || {};
    const correct = q.correctAnswer;
    // Check each correct mapping
    for (const [src, tgt] of Object.entries(correct)) {
      if (placements[src] !== tgt) return false;
    }
    return Object.keys(correct).length === Object.keys(placements).length;
  }

  const answer = state.answers[q.id];
  if (answer === undefined) return false;

  if (q.type === 'multi') {
    if (!Array.isArray(answer) || !Array.isArray(q.correctAnswer)) return false;
    return JSON.stringify([...answer].sort()) === JSON.stringify([...q.correctAnswer].sort());
  }

  return answer === q.correctAnswer;
}

function getAnswerDisplay(q) {
  if (q.type === 'drag-match') {
    const placements = state.dragState[q.id] || {};
    if (Object.keys(placements).length === 0) return 'Not answered';
    return Object.entries(placements).map(([s, t]) => `${s} → ${t}`).join('; ');
  }
  const answer = state.answers[q.id];
  if (!answer) return 'Not answered';
  if (Array.isArray(answer)) return answer.join(', ');
  return answer;
}

function getCorrectDisplay(q) {
  if (q.type === 'drag-match') {
    return Object.entries(q.correctAnswer).map(([s, t]) => `${s} → ${t}`).join('; ');
  }
  if (Array.isArray(q.correctAnswer)) return q.correctAnswer.join(', ');
  return q.correctAnswer;
}

// ──────────────────────────────────────────────
// RESULTS SCREEN
// ──────────────────────────────────────────────
function renderResults() {
  const r = state.results;
  if (!r) { state.screen = 'home'; render(); return; }

  const meta = banks[r.bankId]?.meta || bank1Meta;
  const showWrong = true;

  app.innerHTML = `
    <div class="results-screen">
      <div class="results-container">
        <div class="results-header">
          <img src="sn-university-logo.svg" alt="ServiceNow University" />
          <div class="results-score-circle ${r.passed ? 'pass' : 'fail'}">
            <span class="results-score-value">${r.scorePercent}%</span>
            <span class="results-score-label">Score</span>
          </div>
          <div class="results-verdict ${r.passed ? 'pass' : 'fail'}">${r.passed ? '🎉 Passed!' : 'Not Passed'}</div>
          <p class="results-subtitle">${r.bankTitle || meta.title} · ${r.totalQuestions} questions · Passing: ${meta.passingScore}%</p>
        </div>

        <div class="results-stats">
          <div class="results-stat-card">
            <div class="results-stat-value" style="color:var(--sn-green)">${r.correctCount}</div>
            <div class="results-stat-label">Correct</div>
          </div>
          <div class="results-stat-card">
            <div class="results-stat-value" style="color:#ef5350">${r.wrongQuestions.length}</div>
            <div class="results-stat-label">Incorrect</div>
          </div>
          <div class="results-stat-card">
            <div class="results-stat-value">${r.totalQuestions}</div>
            <div class="results-stat-label">Total</div>
          </div>
          <div class="results-stat-card">
            <div class="results-stat-value">${r.timeTaken}</div>
            <div class="results-stat-label">Time Taken</div>
          </div>
        </div>

        ${r.wrongQuestions.length > 0 ? `
          <div class="results-wrong-section">
            <div class="results-wrong-header">
              <h3>❌ Incorrect Answers (${r.wrongQuestions.length})</h3>
            </div>
            <div class="results-wrong-list">
              ${r.wrongQuestions.map((wq, i) => `
                <div class="results-wrong-item">
                  <div class="results-wrong-q-num">Question ${wq.id}</div>
                  <div class="results-wrong-q-text">${wq.fullText || wq.text}</div>
                  <div class="results-answer-row">
                    <span class="results-your-answer">Your answer: <strong>${wq.yourAnswer}</strong></span>
                    <span class="results-correct-answer">Correct: <strong>${wq.correctAnswer}</strong></span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="results-actions">
          <button class="btn-retake" id="btn-retake">Retake Exam</button>
          <button class="btn-home" id="btn-go-home">Back to Home</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-retake')?.addEventListener('click', () => {
    startExam(r.bankId || state.selectedBank);
  });

  document.getElementById('btn-go-home')?.addEventListener('click', () => {
    state.screen = 'home';
    state.results = null;
    render();
  });
}

// ── Initialize ──
try {
  render();
} catch (error) {
  document.body.innerHTML = `<div style="color:red; padding:20px; font-family:monospace; background:white; position:fixed; top:0; left:0; right:0; bottom:0; z-index:9999;">
    <h2>Application Error</h2>
    <p>${error.message}</p>
    <pre>${error.stack}</pre>
  </div>`;
  console.error(error);
}
