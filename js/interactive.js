/**
 * Darul Suffah Online Academy - Interactive Learning Engine
 * Gamified Quizzes, Arabic Canvas Tracing Studio, Worksheets & Rewards
 */

const InteractiveModule = {
  activeQuiz: null,
  activeQuizIndex: 0,
  activeQuizScore: 0,
  activeQuizAnswers: [],
  canvasCtx: null,
  isTracing: false,
  traceColor: "#C9A24E",
  traceLineWidth: 12,
  currentTraceLetter: TRACING_LETTERS[0],

  // --- AUDIO SYNTHESIS & SOUND EFFECTS (Web Audio API) ---
  playSound(type) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'incorrect') {
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'celebrate') {
        // Arpeggio
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.connect(g);
          g.connect(ctx.destination);
          o.frequency.value = freq;
          g.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.1);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.25);
          o.start(ctx.currentTime + idx * 0.1);
          o.stop(ctx.currentTime + idx * 0.1 + 0.25);
        });
      }
    } catch (e) {
      console.log("Audio not supported or allowed", e);
    }
  },

  speakArabic(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  },

  // --- QUIZ SYSTEM ---
  startQuiz(quizId) {
    const quiz = store.academicData.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    this.activeQuiz = quiz;
    this.activeQuizIndex = 0;
    this.activeQuizScore = 0;
    this.activeQuizAnswers = [];

    const container = document.getElementById('quiz-active-container');
    if (!container) return;

    container.classList.remove('hidden');
    document.getElementById('quiz-list-container')?.classList.add('hidden');
    this.renderCurrentQuestion();
  },

  renderCurrentQuestion() {
    const quiz = this.activeQuiz;
    const q = quiz.questions[this.activeQuizIndex];
    const totalQ = quiz.questions.length;
    const progressPct = Math.round(((this.activeQuizIndex) / totalQ) * 100);

    const html = `
      <div class="bg-white rounded-2xl border border-emerald-900/10 shadow-xl p-6 sm:p-8">
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div>
            <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-1">
              ${quiz.category}
            </span>
            <h3 class="text-xl font-bold text-gray-900">${quiz.title}</h3>
          </div>
          <div class="text-right">
            <span class="text-sm font-medium text-gray-500">Question ${this.activeQuizIndex + 1} of ${totalQ}</span>
            <div class="w-28 bg-gray-200 rounded-full h-2 mt-1">
              <div class="bg-amber-500 h-2 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
            </div>
          </div>
        </div>

        <!-- Question Prompt -->
        <div class="mb-8">
          ${q.arabicSnippet ? `
            <div class="bg-emerald-900 text-amber-300 rounded-xl p-6 text-center mb-6 shadow-inner relative group">
              <span class="text-5xl font-arabic font-bold inline-block cursor-pointer transition hover:scale-110" onclick="InteractiveModule.speakArabic('${q.arabicSnippet}')" title="Click to listen">
                ${q.arabicSnippet}
              </span>
              <div class="text-xs text-emerald-200 mt-2 flex items-center justify-center gap-1">
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i> Click Arabic text to listen pronunciation
              </div>
            </div>
          ` : ''}
          <h4 class="text-lg font-semibold text-gray-800 leading-relaxed">${q.prompt}</h4>
        </div>

        <!-- Options -->
        <div class="space-y-3 mb-8" id="quiz-options-wrapper">
          ${q.options.map((opt, idx) => `
            <button 
              type="button" 
              onclick="InteractiveModule.selectAnswer(${idx})"
              class="quiz-option-btn w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition flex items-center justify-between group focus:outline-none"
              id="opt-btn-${idx}"
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center font-bold text-sm text-gray-600 transition">
                  ${String.fromCharCode(65 + idx)}
                </span>
                <span class="font-medium text-gray-800 text-base">${opt}</span>
              </div>
              <span class="feedback-icon hidden"></span>
            </button>
          `).join('')}
        </div>

        <!-- Feedback Box -->
        <div id="quiz-feedback-box" class="hidden mb-6 p-4 rounded-xl text-sm leading-relaxed"></div>

        <!-- Action Bar -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <button 
            type="button" 
            onclick="InteractiveModule.exitQuiz()" 
            class="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center gap-1.5"
          >
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Quizzes
          </button>
          
          <button 
            id="quiz-next-btn"
            type="button" 
            disabled
            onclick="InteractiveModule.nextQuestion()"
            class="px-6 py-2.5 bg-emerald-800 text-white font-medium rounded-xl opacity-50 cursor-not-allowed hover:bg-emerald-900 transition flex items-center gap-2"
          >
            <span>Next Question</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;

    document.getElementById('quiz-active-container').innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  },

  selectAnswer(selectedIdx) {
    const q = this.activeQuiz.questions[this.activeQuizIndex];
    const isCorrect = selectedIdx === q.correctIndex;
    const optionButtons = document.querySelectorAll('.quiz-option-btn');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const nextBtn = document.getElementById('quiz-next-btn');

    // Disable all options
    optionButtons.forEach(btn => btn.disabled = true);

    const chosenBtn = document.getElementById(`opt-btn-${selectedIdx}`);
    const correctBtn = document.getElementById(`opt-btn-${q.correctIndex}`);

    if (isCorrect) {
      this.playSound('correct');
      chosenBtn.classList.remove('border-gray-200');
      chosenBtn.classList.add('border-emerald-600', 'bg-emerald-50', 'text-emerald-900');
      feedbackBox.className = "p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm";
      feedbackBox.innerHTML = `<strong>MashaAllah, Correct!</strong> ${q.explanation || ''}`;
      this.activeQuizScore += 1;
    } else {
      this.playSound('incorrect');
      chosenBtn.classList.remove('border-gray-200');
      chosenBtn.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-900');
      correctBtn.classList.add('border-emerald-500', 'bg-emerald-50');
      feedbackBox.className = "p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm";
      feedbackBox.innerHTML = `<strong>Incorrect.</strong> ${q.explanation || ''}`;
    }

    feedbackBox.classList.remove('hidden');
    nextBtn.disabled = false;
    nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');

    if (this.activeQuizIndex === this.activeQuiz.questions.length - 1) {
      nextBtn.innerHTML = `<span>Complete Quiz & See Results</span> <i data-lucide="check-circle" class="w-4 h-4"></i>`;
      if (window.lucide) window.lucide.createIcons();
    }
  },

  nextQuestion() {
    this.activeQuizIndex++;
    if (this.activeQuizIndex < this.activeQuiz.questions.length) {
      this.renderCurrentQuestion();
    } else {
      this.finishQuiz();
    }
  },

  finishQuiz() {
    const totalQ = this.activeQuiz.questions.length;
    const pct = Math.round((this.activeQuizScore / totalQ) * 100);
    const points = Math.round((this.activeQuizScore / totalQ) * (this.activeQuiz.pointsAwarded || 50));

    this.playSound('celebrate');

    // Persist submission
    store.recordSubmission({
      studentId: "stu-01",
      studentName: "Zayd Ahmad",
      activityType: "quiz",
      activityId: this.activeQuiz.id,
      activityTitle: this.activeQuiz.title,
      score: pct,
      pointsEarned: points,
      teacherFeedback: pct >= 80 ? "Superb understanding! Keep up the blessed effort." : "Good effort. Review Makharij and retry to achieve 100%."
    });

    const html = `
      <div class="bg-white rounded-2xl border border-emerald-900/10 shadow-xl p-8 text-center max-w-lg mx-auto">
        <div class="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="award" class="w-10 h-10"></i>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">Quiz Completed!</h3>
        <p class="text-sm text-gray-500 mb-6">${this.activeQuiz.title}</p>

        <div class="grid grid-cols-2 gap-4 bg-emerald-50 rounded-xl p-4 mb-6">
          <div>
            <div class="text-2xl font-bold text-emerald-900">${pct}%</div>
            <div class="text-xs text-emerald-700 font-medium">Final Accuracy</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-amber-600">+${points} pts</div>
            <div class="text-xs text-amber-700 font-medium">Points Earned</div>
          </div>
        </div>

        <p class="text-sm text-gray-600 mb-6 leading-relaxed">
          ${pct >= 80 
            ? "MashaAllah! Excellent performance. Your score has been added to your student academic record and your teacher has been notified."
            : "Alhamdulillah for your effort! Consistent practice leads to mastery. You can retry this quiz anytime to polish your knowledge."}
        </p>

        <div class="flex flex-col sm:flex-row gap-3">
          <button 
            type="button" 
            onclick="InteractiveModule.startQuiz('${this.activeQuiz.id}')"
            class="flex-1 py-3 px-4 border border-emerald-800 text-emerald-800 hover:bg-emerald-50 rounded-xl font-medium transition"
          >
            Retry Quiz
          </button>
          <button 
            type="button" 
            onclick="InteractiveModule.exitQuiz()"
            class="flex-1 py-3 px-4 bg-emerald-800 text-white hover:bg-emerald-900 rounded-xl font-medium transition"
          >
            Back to Learning Hub
          </button>
        </div>
      </div>
    `;

    document.getElementById('quiz-active-container').innerHTML = html;
    if (window.lucide) window.lucide.createIcons();

    // Trigger dashboard refresh
    if (window.App) window.App.refreshStats();
  },

  exitQuiz() {
    this.activeQuiz = null;
    document.getElementById('quiz-active-container')?.classList.add('hidden');
    document.getElementById('quiz-list-container')?.classList.remove('hidden');
  },

  // --- ARABIC LETTER TRACING CANVAS STUDIO ---
  initCanvas() {
    const canvas = document.getElementById('arabic-trace-canvas');
    if (!canvas) return;

    this.canvasCtx = canvas.getContext('2d');
    this.resizeCanvas(canvas);
    this.renderTraceLetter();

    // Mouse events
    canvas.onmousedown = (e) => this.startStroke(e, canvas);
    canvas.onmousemove = (e) => this.drawStroke(e, canvas);
    window.onmouseup = () => this.endStroke();

    // Touch events for tablets / smartphones
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.startStroke(touch, canvas);
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.drawStroke(touch, canvas);
    }, { passive: false });

    canvas.addEventListener('touchend', () => this.endStroke());
  },

  resizeCanvas(canvas) {
    // Set actual pixel dimensions to match CSS display width
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width || 400;
    canvas.height = 360;
  },

  selectLetter(letterId) {
    const item = TRACING_LETTERS.find(l => l.id === letterId);
    if (item) {
      this.currentTraceLetter = item;
      this.clearCanvas();
      this.renderTraceLetter();
      document.getElementById('trace-letter-title').textContent = `${item.name} (${item.letter})`;
      document.getElementById('trace-letter-makhraj').textContent = item.makhraj;
    }
  },

  renderTraceLetter() {
    const canvas = document.getElementById('arabic-trace-canvas');
    if (!canvas || !this.canvasCtx) return;

    const ctx = this.canvasCtx;
    const l = this.currentTraceLetter;

    // Background guide
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Subtle center baseline
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(30, canvas.height * 0.65);
    ctx.lineTo(canvas.width - 30, canvas.height * 0.65);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw large dotted Arabic letter template in background
    ctx.save();
    ctx.font = 'bold 160px "Scheherazade New", "Amiri", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#E5E7EB';
    ctx.fillText(l.letter, canvas.width / 2, canvas.height / 2);
    ctx.restore();
  },

  startStroke(e, canvas) {
    this.isTracing = true;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = this.canvasCtx;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.traceColor;
    ctx.lineWidth = this.traceLineWidth;
  },

  drawStroke(e, canvas) {
    if (!this.isTracing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = this.canvasCtx;
    ctx.lineTo(x, y);
    ctx.stroke();
  },

  endStroke() {
    this.isTracing = false;
  },

  setBrushColor(color) {
    this.traceColor = color;
  },

  setBrushWidth(width) {
    this.traceLineWidth = width;
  },

  clearCanvas() {
    this.renderTraceLetter();
  },

  saveCompletedTracing() {
    const canvas = document.getElementById('arabic-trace-canvas');
    if (!canvas) return;

    this.playSound('celebrate');
    const points = 25;

    // Record submission
    store.recordSubmission({
      studentId: "stu-01",
      studentName: "Zayd Ahmad",
      activityType: "tracing",
      activityId: this.currentTraceLetter.id,
      activityTitle: `Arabic Calligraphy Tracing: ${this.currentTraceLetter.name} (${this.currentTraceLetter.letter})`,
      score: 100,
      pointsEarned: points,
      teacherFeedback: "Beautiful handwriting stroke! Practice joining letters next."
    });

    // Provide download option
    const link = document.createElement('a');
    link.download = `Darul-Suffah-Tracing-${this.currentTraceLetter.name}.png`;
    link.href = canvas.toDataURL();
    link.click();

    alert(`MashaAllah! Your handwriting of "${this.currentTraceLetter.name}" has been downloaded and submitted to your teacher for review (+${points} points).`);
    if (window.App) window.App.refreshStats();
  },

  // --- CERTIFICATE OF ACHIEVEMENT GENERATOR ---
  generateCertificate(studentName = "Zayd Ahmad", courseName = "Noorani Qaida & Basic Tajweed") {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;

    const canvas = document.getElementById('cert-canvas');
    const ctx = canvas.getContext('2d');

    // 1200 x 850 High Resolution Certificate
    canvas.width = 1200;
    canvas.height = 850;

    // Background Warm Ivory
    ctx.fillStyle = '#F8F5ED';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Elegant Double Gold & Emerald Borders
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#0F3B36';
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#C9A24E';
    ctx.strokeRect(45, 45, canvas.width - 90, canvas.height - 90);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#E6C76A';
    ctx.strokeRect(52, 52, canvas.width - 104, canvas.height - 104);

    // Bismillah Calligraphy Heading
    ctx.font = '36px "Amiri", "Traditional Arabic", serif';
    ctx.fillStyle = '#0F3B36';
    ctx.textAlign = 'center';
    ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 600, 120);

    // Academy Title
    ctx.font = 'bold 38px "Playfair Display", Georgia, serif';
    ctx.fillStyle = '#0A2623';
    ctx.fillText('DARUL SUFFAH ONLINE ACADEMY', 600, 190);

    ctx.font = 'italic 18px "Inter", sans-serif';
    ctx.fillStyle = '#C9A24E';
    ctx.fillText('Learn Quran. Understand Islam. Build Character.', 600, 225);

    // Certificate Award Banner
    ctx.font = 'bold 44px "Cinzel", "Playfair Display", serif';
    ctx.fillStyle = '#0F3B36';
    ctx.fillText('CERTIFICATE OF ACADEMIC ACHIEVEMENT', 600, 310);

    ctx.font = '18px "Inter", sans-serif';
    ctx.fillStyle = '#4B5563';
    ctx.fillText('This official recognition is honorably presented to', 600, 370);

    // Student Name
    ctx.font = 'bold 48px "Playfair Display", serif';
    ctx.fillStyle = '#C9A24E';
    ctx.fillText(studentName, 600, 440);

    // Decorative underline under name
    ctx.beginPath();
    ctx.moveTo(350, 460);
    ctx.lineTo(850, 460);
    ctx.strokeStyle = '#C9A24E';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Body text
    ctx.font = '20px "Inter", sans-serif';
    ctx.fillStyle = '#374151';
    ctx.fillText(`for exemplary diligence, vocal accuracy, and successful completion of the milestones in`, 600, 520);

    ctx.font = 'bold 28px "Playfair Display", serif';
    ctx.fillStyle = '#0F3B36';
    ctx.fillText(courseName, 600, 570);

    // Date & Verification
    const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    ctx.font = '16px "Inter", sans-serif';
    ctx.fillStyle = '#6B7280';
    ctx.fillText(`Awarded on: ${today} | Verified Academy Record ID: DS-CERT-${Date.now().toString().slice(-6)}`, 600, 640);

    // Signatures
    ctx.beginPath();
    ctx.moveTo(200, 750);
    ctx.lineTo(450, 750);
    ctx.moveTo(750, 750);
    ctx.lineTo(1000, 750);
    ctx.strokeStyle = '#9CA3AF';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = 'bold 16px "Inter", sans-serif';
    ctx.fillStyle = '#0F3B36';
    ctx.fillText('Director of Academics', 325, 775);
    ctx.fillText('Lead Quran Instructor', 875, 775);

    ctx.font = '14px "Inter", sans-serif';
    ctx.fillStyle = '#6B7280';
    ctx.fillText('Darul Suffah Online Academy', 325, 795);
    ctx.fillText('Ijazah & Tajweed Department', 875, 795);

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  },

  downloadCertificateImage() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Darul-Suffah-Certificate-Zayd-Ahmad.png`;
    link.href = canvas.toDataURL();
    link.click();
  },

  closeCertificate() {
    const modal = document.getElementById('certificate-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }
};
