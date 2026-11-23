/**
 * Darul Suffah Online Academy - Main Application Controller
 * Routing, Internationalization, Timezones & Interaction Logic
 */

const App = {
  currentPage: 'home',
  currentLang: 'en',
  activeCourseFilter: 'all',
  activeTeacherFilter: 'all',

  init() {
    this.bindEvents();
    this.setupTimezone();
    this.handleRouteFromHash();
    window.addEventListener('hashchange', () => this.handleRouteFromHash());
    this.updateUserSessionUI();

    // Check Lucide icons initialization
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  handleRouteFromHash() {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.navigateTo(hash, false);
  },

  navigateTo(pageId, updateHash = true) {
    this.currentPage = pageId;
    if (updateHash) {
      window.location.hash = pageId;
    }

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));

    // Highlight active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      const target = link.getAttribute('data-nav');
      if (target === pageId) {
        link.classList.add('text-amber-400', 'font-bold');
        link.classList.remove('text-white', 'text-gray-200');
      } else {
        link.classList.remove('text-amber-400', 'font-bold');
        link.classList.add('text-gray-200');
      }
    });

    // Show selected view
    const targetEl = document.getElementById(`view-${pageId}`);
    if (targetEl) {
      targetEl.classList.remove('hidden');
    } else {
      // Fallback
      document.getElementById('view-home')?.classList.remove('hidden');
    }

    // Special view hooks
    if (pageId === 'interactive-learning') {
      InteractiveModule.initCanvas();
    } else if (pageId === 'private-tracker') {
      PrivateTrackerModule.init();
    } else if (pageId === 'portal-admin') {
      document.getElementById('admin-mount').innerHTML = Dashboards.renderAdmin();
    } else if (pageId === 'portal-teacher') {
      document.getElementById('teacher-mount').innerHTML = Dashboards.renderTeacher();
    } else if (pageId === 'portal-student') {
      document.getElementById('student-mount').innerHTML = Dashboards.renderStudent();
    } else if (pageId === 'portal-parent') {
      document.getElementById('parent-mount').innerHTML = Dashboards.renderParent();
    }

    // Close mobile menu if open
    document.getElementById('mobile-menu')?.classList.add('hidden');

    if (window.lucide) window.lucide.createIcons();
  },

  switchRole(role) {
    if (role === 'guest') {
      store.setAuthUser(null);
      this.navigateTo('home');
    } else if (role === 'admin') {
      store.setAuthUser(INITIAL_USERS[0]);
      this.navigateTo('portal-admin');
    } else if (role === 'teacher') {
      store.setAuthUser(INITIAL_USERS[1]);
      this.navigateTo('portal-teacher');
    } else if (role === 'student') {
      store.setAuthUser(INITIAL_USERS[2]);
      this.navigateTo('portal-student');
    } else if (role === 'parent') {
      store.setAuthUser(INITIAL_USERS[3]);
      this.navigateTo('portal-parent');
    }
    this.updateUserSessionUI();
  },

  updateUserSessionUI() {
    const user = store.currentUser;
    const sessionIndicator = document.getElementById('current-session-label');
    if (sessionIndicator) {
      sessionIndicator.textContent = user ? `${user.role.toUpperCase()}: ${user.name}` : "Guest / Public Mode";
    }
  },

  setLanguage(lang) {
    this.currentLang = lang;
    store.saveSettings({ lang });

    if (lang === 'ur') {
      document.body.setAttribute('dir', 'rtl');
      document.body.classList.add('font-urdu');
      document.getElementById('lang-btn-text').textContent = "اردو (Urdu)";
    } else {
      document.body.setAttribute('dir', 'ltr');
      document.body.classList.remove('font-urdu');
      document.getElementById('lang-btn-text').textContent = "English";
    }

    alert(lang === 'ur' ? "زبان اردو میں تبدیل ہو گئی ہے (RTL فعال)" : "Language switched to English (LTR).");
  },

  toggleLanguage() {
    this.setLanguage(this.currentLang === 'en' ? 'ur' : 'en');
  },

  setupTimezone() {
    const tzSelect = document.getElementById('global-timezone-select');
    if (!tzSelect) return;

    const timezones = [
      { id: "Asia/Karachi", label: "Pakistan (PKT / UTC+5)" },
      { id: "Europe/London", label: "United Kingdom (GMT / UTC+0)" },
      { id: "America/New_York", label: "USA Eastern (EST / UTC-5)" },
      { id: "America/Chicago", label: "USA Central (CST / UTC-6)" },
      { id: "America/Los_Angeles", label: "USA Pacific (PST / UTC-8)" },
      { id: "America/Toronto", label: "Canada (EST / UTC-5)" },
      { id: "Asia/Riyadh", label: "Saudi Arabia (AST / UTC+3)" },
      { id: "Asia/Dubai", label: "UAE (GST / UTC+4)" },
      { id: "Australia/Sydney", label: "Australia (AEST / UTC+10)" }
    ];

    tzSelect.innerHTML = timezones.map(tz => `
      <option value="${tz.id}">${tz.label}</option>
    `).join('');

    tzSelect.value = store.settings.timezone || "Asia/Karachi";
    this.updateClock();
    setInterval(() => this.updateClock(), 30000);
  },

  updateClock() {
    const tzSelect = document.getElementById('global-timezone-select');
    const clockEl = document.getElementById('global-clock-display');
    if (!clockEl || !tzSelect) return;

    try {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: tzSelect.value,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      clockEl.textContent = `${timeStr} (${tzSelect.value.split('/')[1]?.replace('_', ' ') || ''})`;
    } catch (e) {}
  },

  onTimezoneChange() {
    const tzSelect = document.getElementById('global-timezone-select');
    if (tzSelect) {
      store.saveSettings({ timezone: tzSelect.value });
      this.updateClock();
    }
  },

  bindEvents() {
    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.onclick = () => mobileMenu.classList.toggle('hidden');
    }
  },

  // --- TRIAL FORM SUBMISSION ---
  submitTrialForm(e) {
    e.preventDefault();

    const studentName = document.getElementById('trial-student-name')?.value;
    const parentName = document.getElementById('trial-parent-name')?.value;
    const age = document.getElementById('trial-age')?.value;
    const country = document.getElementById('trial-country')?.value;
    const whatsapp = document.getElementById('trial-whatsapp')?.value;
    const email = document.getElementById('trial-email')?.value;
    const course = document.getElementById('trial-course')?.value;
    const teacher = document.getElementById('trial-teacher')?.value;
    const days = document.getElementById('trial-days')?.value;
    const time = document.getElementById('trial-time')?.value;
    const timezone = document.getElementById('trial-timezone')?.value;

    if (!studentName || !parentName || !whatsapp || !course) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    const newBooking = store.addTrialRequest({
      studentName,
      parentName,
      age,
      country,
      whatsapp,
      email,
      course,
      preferredTeacher: teacher,
      preferredDays: days,
      preferredTime: time,
      timezone
    });

    // Show Confirmation Modal
    const modal = document.getElementById('submission-confirmation-modal');
    if (modal) {
      document.getElementById('modal-ref-id').textContent = newBooking.id;
      document.getElementById('modal-student-name').textContent = `${studentName} (Age ${age})`;
      document.getElementById('modal-course-name').textContent = course;
      
      const whatsappMsg = `Assalam o Alaikum, I have registered for a Free Trial Class at Darul Suffah Online Academy. My Booking Reference is ${newBooking.id} for ${studentName} (${course}). Please let me know the scheduled class timing.`;
      document.getElementById('modal-whatsapp-btn').href = `https://wa.me/923468348397?text=${encodeURIComponent(whatsappMsg)}`;

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    e.target.reset();
  },

  closeConfirmationModal() {
    const modal = document.getElementById('submission-confirmation-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  // --- GENERAL CONTACT FORM ---
  submitContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value;
    const email = document.getElementById('contact-email')?.value;
    const subject = document.getElementById('contact-subject')?.value;
    const message = document.getElementById('contact-message')?.value;

    alert(`JazakAllah Khair ${name}! Your inquiry has been received. Our academic coordinator will contact you via WhatsApp / Email shortly.`);
    e.target.reset();
  },

  // --- COURSE DETAILS MODAL ---
  viewCourseDetails(courseId) {
    const c = store.academicData.courses.find(item => item.id === courseId);
    if (!c) return;

    const modal = document.getElementById('course-details-modal');
    if (!modal) return;

    document.getElementById('modal-course-title').textContent = c.title;
    document.getElementById('modal-course-arabic').textContent = c.arabicTitle;
    document.getElementById('modal-course-intro').textContent = c.intro;
    document.getElementById('modal-course-target').textContent = c.targetAge;
    document.getElementById('modal-course-structure').textContent = c.structure;
    document.getElementById('modal-course-outcomes').textContent = c.outcomes;
    document.getElementById('modal-course-methodology').textContent = c.methodology;

    const objList = document.getElementById('modal-course-objectives');
    objList.innerHTML = c.objectives.map(o => `
      <li class="flex items-start gap-2">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
        <span>${o}</span>
      </li>
    `).join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  },

  closeCourseModal() {
    const modal = document.getElementById('course-details-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  // --- FILTER TEACHERS ---
  filterTeachers(category) {
    this.activeTeacherFilter = category;
    document.querySelectorAll('.teacher-filter-btn').forEach(btn => {
      const match = btn.getAttribute('data-filter') === category;
      btn.className = match
        ? "teacher-filter-btn px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow transition"
        : "teacher-filter-btn px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-xl text-xs font-semibold border border-gray-200 transition";
    });

    const cards = document.querySelectorAll('.teacher-profile-card');
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (category === 'all' || cat === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  },

  // --- SEARCH RESOURCES ---
  searchResources() {
    const q = document.getElementById('resource-search-input')?.value.toLowerCase() || '';
    const cat = document.getElementById('resource-category-select')?.value || 'all';

    document.querySelectorAll('.resource-item-card').forEach(card => {
      const title = card.getAttribute('data-title').toLowerCase();
      const itemCat = card.getAttribute('data-category');
      const matchesText = title.includes(q);
      const matchesCat = cat === 'all' || itemCat === cat;

      if (matchesText && matchesCat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  },

  // --- BLOG CATEGORY FILTER & MODAL ---
  filterBlog(category) {
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
      const match = btn.getAttribute('data-category') === category;
      btn.className = match
        ? "blog-filter-btn px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow transition"
        : "blog-filter-btn px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-xl text-xs font-semibold border border-gray-200 transition";
    });

    document.querySelectorAll('.blog-post-card').forEach(card => {
      const cat = card.getAttribute('data-category');
      if (category === 'all' || cat === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  },

  openBlogModal(blogId) {
    const b = INITIAL_BLOG_POSTS.find(item => item.id === blogId);
    if (!b) return;

    const modal = document.getElementById('blog-reader-modal');
    if (!modal) return;

    document.getElementById('blog-modal-category').textContent = b.category;
    document.getElementById('blog-modal-title').textContent = b.title;
    document.getElementById('blog-modal-meta').textContent = `By ${b.author} • ${b.date} • ${b.readTime}`;
    document.getElementById('blog-modal-image').src = b.image;

    const contentDiv = document.getElementById('blog-modal-content');
    contentDiv.innerHTML = `
      <p class="font-medium text-gray-800 text-sm leading-relaxed">${b.snippet}</p>
      <p class="text-xs text-gray-600 leading-relaxed">
        At Darul Suffah Online Academy, we emphasize that consistent, loving engagement with the Holy Quran transforms character, restores peace, and builds resilience for international Muslim youth. Our educators utilize positive reinforcement, structured visual milestones, and patient vocal correction to make every lesson a spiritual joy.
      </p>
      <p class="text-xs text-gray-600 leading-relaxed">
        Whether your child is mastering the first strokes of Noorani Qaida, memorizing Juz Amma, or thriving in our neurodiversity-adapted special needs Quran program, individual attention from a verified mentor provides the optimal foundation.
      </p>
      <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-900 mt-4">
        <strong>Interested in experiencing our teaching methodology?</strong> Book a free 1-on-1 trial class with our qualified teachers today.
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  },

  closeBlogModal() {
    const modal = document.getElementById('blog-reader-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  refreshStats() {
    const student = INITIAL_USERS[2];
    const pointsDisp = document.getElementById('student-points-display');
    if (pointsDisp) {
      pointsDisp.textContent = student.points;
    }
  }
};

// Auto-boot on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
