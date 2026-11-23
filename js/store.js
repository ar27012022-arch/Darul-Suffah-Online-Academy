/**
 * Darul Suffah Online Academy - Local Storage & Data Persistence Engine
 * Strict Separation of Academic Records and Private Health Records.
 */

const ACADEMIC_STORAGE_KEY = 'darul_suffah_academic_db_v1';
const HEALTH_STORAGE_KEY = 'darul_suffah_private_tracker_isolated_v1';
const AUTH_STORAGE_KEY = 'darul_suffah_auth_session_v1';
const SETTINGS_STORAGE_KEY = 'darul_suffah_settings_v1';

class AcademyStore {
  constructor() {
    this.academicData = this.loadAcademicData();
    this.currentUser = this.loadAuthSession();
    this.settings = this.loadSettings();
  }

  // Initial load or seed
  loadAcademicData() {
    try {
      const raw = localStorage.getItem(ACADEMIC_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Storage access failed, using memory state", e);
    }

    const defaultState = {
      courses: INITIAL_COURSES,
      teachers: INITIAL_TEACHERS,
      quizzes: INITIAL_QUIZZES,
      worksheets: INITIAL_WORKSHEETS,
      badges: BADGES_DEFINITIONS,
      users: INITIAL_USERS,
      trialRequests: INITIAL_TRIAL_REQUESTS,
      admissions: [],
      submissions: [
        {
          id: "sub-101",
          studentId: "stu-01",
          studentName: "Zayd Ahmad",
          activityType: "quiz",
          activityId: "quiz-alpha-01",
          activityTitle: "Arabic Letters & Sound Shapes",
          score: 100,
          pointsEarned: 50,
          submittedAt: "2026-11-18 16:30",
          teacherFeedback: "MashaAllah excellent grasp of throat letters!",
          gradedBy: "teacher-1"
        }
      ],
      announcements: [
        {
          id: "ann-1",
          title: "Quarterly Quran Recitation Competition Announced",
          date: "Nov 20, 2026",
          audience: "All Students",
          content: "Friendly in-class recitation milestones. Consult your teacher for details."
        }
      ],
      attendance: [
        { id: "att-1", studentId: "stu-01", date: "2026-11-18", status: "Present", course: "Noorani Qaida", notes: "Attentive, finished lesson 8" },
        { id: "att-2", studentId: "stu-01", date: "2026-11-16", status: "Present", course: "Noorani Qaida", notes: "Reviewed Makharij" },
        { id: "att-3", studentId: "stu-01", date: "2026-11-14", status: "Present", course: "Noorani Qaida", notes: "Pronunciation drills" }
      ],
      fees: [
        { id: "fee-1", studentId: "stu-01", month: "November 2026", amount: "$55", status: "Paid", paidOn: "2026-11-02", receiptNo: "DS-2026-1102" }
      ]
    };

    this.saveAcademicData(defaultState);
    return defaultState;
  }

  saveAcademicData(data = this.academicData) {
    try {
      localStorage.setItem(ACADEMIC_STORAGE_KEY, JSON.stringify(data));
      this.academicData = data;
    } catch (e) {
      console.error("Failed to save academic data", e);
    }
  }

  // Auth session
  loadAuthSession() {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    // Default demo session: guest or student
    return null;
  }

  setAuthUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }

  loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      lang: 'en', // 'en' | 'ur'
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Karachi',
      contrastMode: 'standard', // 'standard' | 'high-contrast'
      fontSize: 'normal' // 'normal' | 'large'
    };
  }

  saveSettings(settings) {
    this.settings = { ...this.settings, ...settings };
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(this.settings));
    } catch (e) {}
  }

  // --- TRIAL CLASS BOOKINGS ---
  addTrialRequest(request) {
    const newEntry = {
      id: "TR-" + Math.floor(1000 + Math.random() * 9000),
      ...request,
      status: "Pending Review",
      submittedAt: new Date().toLocaleString()
    };
    this.academicData.trialRequests.unshift(newEntry);
    this.saveAcademicData();
    return newEntry;
  }

  updateTrialStatus(id, newStatus) {
    const item = this.academicData.trialRequests.find(t => t.id === id);
    if (item) {
      item.status = newStatus;
      this.saveAcademicData();
    }
  }

  // --- ADMISSIONS ---
  addAdmission(admission) {
    const newEntry = {
      id: "ADM-" + Math.floor(1000 + Math.random() * 9000),
      ...admission,
      status: "New Application",
      submittedAt: new Date().toLocaleString()
    };
    this.academicData.admissions.unshift(newEntry);
    this.saveAcademicData();
    return newEntry;
  }

  // --- QUIZ & WORKSHEET SUBMISSIONS ---
  recordSubmission(submission) {
    const sub = {
      id: "sub-" + Date.now(),
      ...submission,
      submittedAt: new Date().toLocaleString()
    };
    this.academicData.submissions.unshift(sub);

    // Update student points & check for badge unlocks
    const studentUser = this.academicData.users.find(u => u.studentId === submission.studentId);
    if (studentUser) {
      studentUser.points = (studentUser.points || 0) + (submission.pointsEarned || 0);

      // Check badge thresholds
      this.academicData.badges.forEach(badge => {
        if (!studentUser.badges.includes(badge.id) && studentUser.points >= badge.pointsReq) {
          studentUser.badges.push(badge.id);
        }
      });
    }

    this.saveAcademicData();
    return sub;
  }

  // --- ADMIN CONTENT MANAGEMENT ---
  updateCourse(courseId, updatedFields) {
    const idx = this.academicData.courses.findIndex(c => c.id === courseId);
    if (idx !== -1) {
      this.academicData.courses[idx] = { ...this.academicData.courses[idx], ...updatedFields };
      this.saveAcademicData();
      return this.academicData.courses[idx];
    }
  }

  addCourse(newCourse) {
    this.academicData.courses.push(newCourse);
    this.saveAcademicData();
  }

  deleteCourse(courseId) {
    this.academicData.courses = this.academicData.courses.filter(c => c.id !== courseId);
    this.saveAcademicData();
  }

  updateTeacher(teacherId, updatedFields) {
    const idx = this.academicData.teachers.findIndex(t => t.id === teacherId);
    if (idx !== -1) {
      this.academicData.teachers[idx] = { ...this.academicData.teachers[idx], ...updatedFields };
      this.saveAcademicData();
      return this.academicData.teachers[idx];
    }
  }

  addTeacher(newTeacher) {
    this.academicData.teachers.push(newTeacher);
    this.saveAcademicData();
  }

  addQuiz(newQuiz) {
    this.academicData.quizzes.push(newQuiz);
    this.saveAcademicData();
  }

  addWorksheet(newWorksheet) {
    this.academicData.worksheets.push(newWorksheet);
    this.saveAcademicData();
  }

  // --- ATTENDANCE & PROGRESS ---
  recordAttendance(record) {
    const newRecord = {
      id: "att-" + Date.now(),
      ...record,
      recordedAt: new Date().toLocaleString()
    };
    this.academicData.attendance.unshift(newRecord);
    this.saveAcademicData();
    return newRecord;
  }

  // ----------------------------------------------------
  // STRICTLY ISOLATED WOMEN'S HEALTH & IBADAH TRACKER DATA
  // Administrators and Teachers NEVER have access to this!
  // ----------------------------------------------------
  loadPrivateHealthTracker() {
    try {
      const raw = localStorage.getItem(HEALTH_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Private storage error", e);
    }

    // Initial empty secure structure
    return {
      pinProtected: false,
      pinHash: null,
      periods: [
        { id: "p-01", startDate: "2026-10-14", endDate: "2026-10-20", cycleLength: 28, flow: "Normal", notes: "Felt mild fatigue on day 1" },
        { id: "p-02", startDate: "2026-09-16", endDate: "2026-09-22", cycleLength: 29, flow: "Normal", notes: "Practiced morning Adhkar" }
      ],
      ibadahLogs: [
        { id: "ib-01", date: "2026-11-18", category: "Quran Listening", details: "Surah Maryam recitation by Sheikh Al-Minshawi", durationMins: 25 },
        { id: "ib-02", date: "2026-11-18", category: "Daily Masnoon Duas", details: "Morning & Evening Adhkar completed", durationMins: 15 },
        { id: "ib-03", date: "2026-11-17", category: "Islamic Lecture", details: "Seerah of Prophet Muhammad (PBUH) part 4", durationMins: 40 }
      ],
      tasbihCount: 100,
      journalNotes: "Gratitude for the time to reflect and learn Quranic meanings deeply."
    };
  }

  savePrivateHealthTracker(data) {
    try {
      localStorage.setItem(HEALTH_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save private health tracker", e);
    }
  }

  clearPrivateHealthData() {
    localStorage.removeItem(HEALTH_STORAGE_KEY);
  }
}

// Global Store Instance
const store = new AcademyStore();
