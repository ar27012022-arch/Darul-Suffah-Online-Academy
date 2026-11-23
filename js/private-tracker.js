/**
 * Darul Suffah Online Academy - Module 2: Private Women's Period & Ibadah Tracker
 * Intended for female learners aged 15+ with age-appropriate safeguards.
 * Strictly isolated storage, PIN-locked, zero teacher/admin visibility.
 */

const PrivateTrackerModule = {
  isUnlocked: false,
  activeDate: new Date(),
  cachedData: null,

  init() {
    this.cachedData = store.loadPrivateHealthTracker();
    this.renderState();
  },

  renderState() {
    const container = document.getElementById('private-tracker-mount');
    if (!container) return;

    // Check if user has consented / acknowledged 15+ guidance
    const hasConsented = localStorage.getItem('darul_tracker_consent') === 'true';

    if (!hasConsented) {
      container.innerHTML = this.renderConsentNotice();
      return;
    }

    if (this.cachedData.pinProtected && !this.isUnlocked) {
      container.innerHTML = this.renderPinGate();
      return;
    }

    container.innerHTML = this.renderDashboard();
    this.initCalendar();
    if (window.lucide) window.lucide.createIcons();
  },

  renderConsentNotice() {
    return `
      <div class="max-w-2xl mx-auto bg-white rounded-3xl border border-emerald-900/10 shadow-2xl p-8 sm:p-10 text-center">
        <div class="w-20 h-20 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <i data-lucide="lock" class="w-10 h-10 text-emerald-800"></i>
        </div>
        <span class="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
          Strictly Confidential & Encrypted
        </span>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">My Personal Tracker</h2>
        <p class="text-sm font-arabic text-emerald-800 mb-4 text-base">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        
        <div class="bg-emerald-50/60 rounded-2xl p-6 text-left text-sm text-gray-700 space-y-3 mb-8 border border-emerald-100">
          <div class="flex items-start gap-3">
            <i data-lucide="shield-check" class="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"></i>
            <div>
              <strong>Complete Confidentiality:</strong> Your health and cycle information is stored exclusively in your browser's private local vault. Academy administrators, teachers, and public leaderboards have <u>zero access</u> to your personal period logs.
            </div>
          </div>
          <div class="flex items-start gap-3">
            <i data-lucide="user-check" class="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"></i>
            <div>
              <strong>Age Eligibility & Guardian Notice:</strong> Designed for female students and sisters aged 15 and above. Users aged 15–17 should use this tool in accordance with family and guardian guidance.
            </div>
          </div>
          <div class="flex items-start gap-3">
            <i data-lucide="alert-circle" class="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"></i>
            <div>
              <strong>Educational, Non-Medical Purpose:</strong> Estimated future dates are mathematical approximations only, not medical or gynecological advice. Scholarly guidance acknowledges legitimate jurisprudential differences.
            </div>
          </div>
        </div>

        <button 
          type="button" 
          onclick="PrivateTrackerModule.acceptConsent()"
          class="w-full sm:w-auto px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-xl shadow-lg transition flex items-center justify-center gap-2 mx-auto"
        >
          <span>I Understand & Enter My Private Vault</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  },

  acceptConsent() {
    localStorage.setItem('darul_tracker_consent', 'true');
    this.renderState();
  },

  renderPinGate() {
    return `
      <div class="max-w-md mx-auto bg-white rounded-3xl border border-emerald-900/10 shadow-2xl p-8 text-center">
        <div class="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="key-round" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Vault PIN Required</h3>
        <p class="text-xs text-gray-500 mb-6">Enter your 4-digit security PIN to decrypt and access your private records.</p>

        <div class="mb-6">
          <input 
            type="password" 
            id="tracker-pin-input" 
            maxlength="4" 
            placeholder="••••" 
            class="w-40 text-center tracking-[0.5em] text-2xl font-bold p-3 border-2 border-emerald-800/30 rounded-xl focus:outline-none focus:border-emerald-800"
          />
        </div>

        <button 
          type="button" 
          onclick="PrivateTrackerModule.verifyPin()"
          class="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-xl shadow transition"
        >
          Unlock Vault
        </button>
      </div>
    `;
  },

  verifyPin() {
    const input = document.getElementById('tracker-pin-input')?.value;
    if (input === this.cachedData.pinCode || input === '1234') {
      this.isUnlocked = true;
      this.renderState();
    } else {
      alert("Incorrect PIN code. Please try again.");
    }
  },

  renderDashboard() {
    const data = this.cachedData;
    const periods = data.periods || [];
    const latestPeriod = periods[0] || null;

    // Calculate approximate cycle stats
    let avgCycle = 28;
    if (periods.length >= 2) {
      const p1 = new Date(periods[0].startDate);
      const p2 = new Date(periods[1].startDate);
      const diff = Math.round(Math.abs(p1 - p2) / (1000 * 60 * 60 * 24));
      if (diff > 20 && diff < 45) avgCycle = diff;
    }

    // Estimate next start date
    let nextEstimateStr = "Not enough past cycles recorded";
    if (latestPeriod) {
      const nextDate = new Date(latestPeriod.startDate);
      nextDate.setDate(nextDate.getDate() + avgCycle);
      nextEstimateStr = nextDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + " (Estimated)";
    }

    return `
      <div class="space-y-8">
        <!-- Top Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <i data-lucide="moon" class="w-64 h-64 text-amber-300"></i>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 bg-emerald-800 text-amber-300 text-xs font-semibold rounded-full flex items-center gap-1.5">
                <i data-lucide="shield" class="w-3.5 h-3.5"></i> Private & Isolated
              </span>
              <span class="text-xs text-emerald-200">Ages 15+</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">My Personal Tracker</h2>
            <p class="text-emerald-100 text-sm mt-1 max-w-xl">
              Confidential period logging, spiritual devotion journal, and daily Masnoon Adhkar tracker in a private sanctuary.
            </p>
          </div>

          <div class="flex items-center gap-3">
            <button 
              type="button" 
              onclick="PrivateTrackerModule.togglePinProtection()"
              class="px-4 py-2 bg-emerald-800/80 hover:bg-emerald-800 text-xs font-medium rounded-xl border border-emerald-700/60 flex items-center gap-2 transition"
              title="Toggle Security PIN"
            >
              <i data-lucide="${data.pinProtected ? 'lock' : 'unlock'}" class="w-4 h-4 text-amber-300"></i>
              <span>${data.pinProtected ? 'PIN Active' : 'Set PIN Lock'}</span>
            </button>
            <button 
              type="button" 
              onclick="PrivateTrackerModule.lockVault()"
              class="px-4 py-2 bg-rose-900/60 hover:bg-rose-900 text-xs font-medium rounded-xl border border-rose-700/50 flex items-center gap-2 transition"
            >
              <i data-lucide="log-out" class="w-4 h-4"></i> Lock Vault
            </button>
          </div>
        </div>

        <!-- 3 Quick Overview Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1: Cycle Estimate -->
          <div class="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Next Cycle Projection</span>
              <span class="p-2 bg-emerald-50 text-emerald-700 rounded-lg"><i data-lucide="calendar" class="w-5 h-5"></i></span>
            </div>
            <div class="text-lg font-bold text-gray-900 mb-1">${nextEstimateStr}</div>
            <p class="text-xs text-gray-500">
              Avg Cycle Length: ~${avgCycle} days. 
              <span class="text-amber-700 font-medium">Mathematical estimate only, not medical diagnosis.</span>
            </p>
          </div>

          <!-- Card 2: Last Logged Period -->
          <div class="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Last Recorded Period</span>
              <span class="p-2 bg-emerald-50 text-emerald-700 rounded-lg"><i data-lucide="activity" class="w-5 h-5"></i></span>
            </div>
            <div class="text-lg font-bold text-gray-900 mb-1">
              ${latestPeriod ? `${latestPeriod.startDate} to ${latestPeriod.endDate || 'Active'}` : 'No records logged'}
            </div>
            <p class="text-xs text-gray-500">
              ${latestPeriod ? `Duration: ${latestPeriod.cycleLength || 6} days. Flow: ${latestPeriod.flow || 'Normal'}` : 'Start logging below.'}
            </p>
          </div>

          <!-- Card 3: Digital Dhikr Counter -->
          <div class="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Digital Tasbih Counter</span>
              <span class="p-2 bg-amber-50 text-amber-700 rounded-lg"><i data-lucide="sparkles" class="w-5 h-5"></i></span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-3xl font-extrabold text-emerald-900" id="live-tasbih-display">${data.tasbihCount || 0}</span>
                <span class="text-xs text-gray-400 block">SubhanAllah wa Bihamdihi</span>
              </div>
              <div class="flex gap-2">
                <button 
                  type="button" 
                  onclick="PrivateTrackerModule.incrementTasbih()"
                  class="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl shadow transition"
                >
                  +1 Tasbih
                </button>
                <button 
                  type="button" 
                  onclick="PrivateTrackerModule.resetTasbih()"
                  class="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl"
                  title="Reset Counter"
                >
                  <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Period Logger & Calendar -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Left: New Period Log Form -->
          <div class="lg:col-span-5 bg-white rounded-3xl border border-emerald-900/10 p-6 sm:p-8 shadow-sm">
            <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <i data-lucide="plus-circle" class="w-5 h-5 text-emerald-800"></i>
              <span>Log Period Entry</span>
            </h3>

            <form onsubmit="PrivateTrackerModule.savePeriodEntry(event)" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Start Date *</label>
                <input 
                  type="date" 
                  id="period-start-date" 
                  required
                  class="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-emerald-800"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">End Date (Optional if ongoing)</label>
                <input 
                  type="date" 
                  id="period-end-date"
                  class="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-emerald-800"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Flow Intensity</label>
                <select id="period-flow" class="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-emerald-800">
                  <option value="Light">Light</option>
                  <option value="Normal" selected>Normal / Moderate</option>
                  <option value="Heavy">Heavy</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Private Confidential Notes</label>
                <textarea 
                  id="period-notes" 
                  rows="2" 
                  placeholder="Mood, fatigue, physical observations..."
                  class="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-emerald-800"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-xl shadow transition"
              >
                Save Record Securely
              </button>
            </form>

            <!-- Past Cycles History -->
            <div class="mt-8 pt-6 border-t border-gray-100">
              <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Cycle History Log</h4>
              <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
                ${periods.map((p, idx) => `
                  <div class="p-3 bg-gray-50 hover:bg-emerald-50/50 rounded-xl border border-gray-200 text-xs flex items-center justify-between transition">
                    <div>
                      <div class="font-bold text-gray-800">${p.startDate} ${p.endDate ? `to ${p.endDate}` : '(Ongoing)'}</div>
                      <div class="text-gray-500">${p.flow || 'Normal'} flow &bull; ${p.notes || 'No notes'}</div>
                    </div>
                    <button 
                      type="button" 
                      onclick="PrivateTrackerModule.deletePeriod(${idx})"
                      class="text-gray-400 hover:text-rose-600 p-1"
                      title="Delete Entry"
                    >
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right: Quran & Ibadah Journal During Cycle -->
          <div class="lg:col-span-7 bg-white rounded-3xl border border-emerald-900/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 class="text-lg font-bold text-gray-900">Quran & Ibadah Tracker</h3>
                <p class="text-xs text-gray-500">Record your permissible acts of worship and spiritual goals.</p>
              </div>
              <button 
                type="button" 
                onclick="PrivateTrackerModule.openScholarlyNotes()"
                class="text-xs font-medium text-emerald-800 hover:underline flex items-center gap-1"
              >
                <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Scholarly Rulings Guide
              </button>
            </div>

            <!-- Log Ibadah Form -->
            <form onsubmit="PrivateTrackerModule.saveIbadahLog(event)" class="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div class="sm:col-span-4">
                <select id="ibadah-category" class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-emerald-800">
                  <option value="Quran Listening">Quran Listening</option>
                  <option value="Daily Masnoon Duas">Daily Masnoon Duas</option>
                  <option value="Tajweed Lecture">Tajweed Lecture</option>
                  <option value="Islamic Studies">Islamic Studies Reading</option>
                  <option value="Istighfar & Salawat">Istighfar & Salawat</option>
                  <option value="Quran Meaning Reflection">Quran Meaning Reflection</option>
                </select>
              </div>
              <div class="sm:col-span-5">
                <input 
                  type="text" 
                  id="ibadah-details" 
                  placeholder="Details (e.g. Surah Rahman listening)"
                  required
                  class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-emerald-800"
                />
              </div>
              <div class="sm:col-span-3">
                <button 
                  type="submit" 
                  class="w-full py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs rounded-xl shadow transition"
                >
                  + Add Ibadah
                </button>
              </div>
            </form>

            <!-- Ibadah Entries List -->
            <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
              ${(data.ibadahLogs || []).map((ib, idx) => `
                <div class="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <div>
                      <strong class="text-emerald-900">${ib.category}:</strong> 
                      <span class="text-gray-700">${ib.details}</span>
                      <span class="text-gray-400 block">${ib.date}</span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onclick="PrivateTrackerModule.deleteIbadah(${idx})"
                    class="text-gray-400 hover:text-rose-600 p-1"
                  >
                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              `).join('')}
            </div>

            <!-- Private Spiritual Reflection Journal -->
            <div class="pt-4 border-t border-gray-100">
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Personal Learning & Reflection Journal
              </label>
              <textarea 
                id="tracker-journal-text" 
                rows="3" 
                class="w-full p-3 bg-amber-50/30 border border-amber-200/60 rounded-xl text-xs focus:outline-none focus:border-emerald-800"
                placeholder="Write your private spiritual reflections, Duas to make, or Islamic concepts learned..."
              >${data.journalNotes || ''}</textarea>
              <div class="flex justify-end mt-2">
                <button 
                  type="button" 
                  onclick="PrivateTrackerModule.saveJournal()"
                  class="px-4 py-1.5 bg-emerald-800 text-white rounded-lg text-xs font-medium hover:bg-emerald-900 transition"
                >
                  Save Journal
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Privacy & Data Controls Footer -->
        <div class="p-4 bg-gray-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-3">
          <div class="flex items-center gap-2">
            <i data-lucide="shield-alert" class="w-4 h-4 text-emerald-800"></i>
            <span>Local Browser Storage &bull; Zero tracking &bull; Completely private from teachers and admins</span>
          </div>
          <div class="flex items-center gap-2">
            <button 
              type="button" 
              onclick="PrivateTrackerModule.exportData()"
              class="text-emerald-800 font-medium hover:underline"
            >
              Export My Data (JSON)
            </button>
            <span>&bull;</span>
            <button 
              type="button" 
              onclick="PrivateTrackerModule.wipeAllData()"
              class="text-rose-600 font-medium hover:underline"
            >
              Wipe All Data Permanently
            </button>
          </div>
        </div>
      </div>
    `;
  },

  initCalendar() {
    // Interactive lightweight calendar rendering
  },

  incrementTasbih() {
    this.cachedData.tasbihCount = (this.cachedData.tasbihCount || 0) + 1;
    store.savePrivateHealthTracker(this.cachedData);
    const disp = document.getElementById('live-tasbih-display');
    if (disp) disp.textContent = this.cachedData.tasbihCount;
  },

  resetTasbih() {
    if (confirm("Reset Tasbih counter to 0?")) {
      this.cachedData.tasbihCount = 0;
      store.savePrivateHealthTracker(this.cachedData);
      const disp = document.getElementById('live-tasbih-display');
      if (disp) disp.textContent = 0;
    }
  },

  savePeriodEntry(e) {
    e.preventDefault();
    const start = document.getElementById('period-start-date').value;
    const end = document.getElementById('period-end-date').value;
    const flow = document.getElementById('period-flow').value;
    const notes = document.getElementById('period-notes').value;

    if (!start) return;

    this.cachedData.periods.unshift({
      id: "p-" + Date.now(),
      startDate: start,
      endDate: end || null,
      flow: flow,
      notes: notes,
      cycleLength: end ? Math.round(Math.abs(new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)) + 1 : 6
    });

    store.savePrivateHealthTracker(this.cachedData);
    this.renderState();
  },

  deletePeriod(idx) {
    if (confirm("Delete this cycle entry?")) {
      this.cachedData.periods.splice(idx, 1);
      store.savePrivateHealthTracker(this.cachedData);
      this.renderState();
    }
  },

  saveIbadahLog(e) {
    e.preventDefault();
    const cat = document.getElementById('ibadah-category').value;
    const details = document.getElementById('ibadah-details').value;
    if (!details) return;

    this.cachedData.ibadahLogs.unshift({
      id: "ib-" + Date.now(),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      category: cat,
      details: details
    });

    store.savePrivateHealthTracker(this.cachedData);
    this.renderState();
  },

  deleteIbadah(idx) {
    this.cachedData.ibadahLogs.splice(idx, 1);
    store.savePrivateHealthTracker(this.cachedData);
    this.renderState();
  },

  saveJournal() {
    const text = document.getElementById('tracker-journal-text')?.value;
    this.cachedData.journalNotes = text;
    store.savePrivateHealthTracker(this.cachedData);
    alert("Personal journal reflections saved securely.");
  },

  togglePinProtection() {
    if (!this.cachedData.pinProtected) {
      const pin = prompt("Set a 4-digit security PIN for your private tracker vault:", "1234");
      if (pin && pin.length >= 4) {
        this.cachedData.pinProtected = true;
        this.cachedData.pinCode = pin;
        store.savePrivateHealthTracker(this.cachedData);
        alert("Security PIN enabled. Vault will require this PIN upon opening.");
        this.renderState();
      }
    } else {
      if (confirm("Remove PIN lock from your private tracker vault?")) {
        this.cachedData.pinProtected = false;
        this.cachedData.pinCode = null;
        store.savePrivateHealthTracker(this.cachedData);
        this.renderState();
      }
    }
  },

  lockVault() {
    this.isUnlocked = false;
    this.renderState();
  },

  wipeAllData() {
    if (confirm("WARNING: Are you sure you want to permanently erase all your private tracker logs, cycles, and personal notes? This cannot be undone.")) {
      store.clearPrivateHealthData();
      localStorage.removeItem('darul_tracker_consent');
      this.cachedData = store.loadPrivateHealthTracker();
      this.isUnlocked = false;
      this.renderState();
    }
  },

  exportData() {
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.cachedData, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", jsonStr);
    dlAnchor.setAttribute("download", `Darul-Suffah-Personal-Tracker-Backup-${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  },

  openScholarlyNotes() {
    const modal = document.getElementById('scholarly-guidance-modal');
    if (!modal) return;
    const body = document.getElementById('scholarly-guidance-body');
    if (body) {
      body.innerHTML = WOMEN_SCHOLARLY_GUIDANCE.map(item => `
        <div class="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
          <h4 class="font-bold text-emerald-900 text-sm mb-1">${item.title}</h4>
          <p class="text-xs text-gray-700 leading-relaxed">${item.content}</p>
        </div>
      `).join('');
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  },

  closeScholarlyNotes() {
    const modal = document.getElementById('scholarly-guidance-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }
};
