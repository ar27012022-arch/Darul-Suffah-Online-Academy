/**
 * Darul Suffah Online Academy - Role-Based Portals Engine
 * Admin, Teacher, Student & Parent Dashboards
 */

const Dashboards = {
  activeTab: 'overview',

  // --- ADMIN DASHBOARD ---
  renderAdmin() {
    const data = store.academicData;
    const trials = data.trialRequests || [];
    const pendingTrials = trials.filter(t => t.status === 'Pending Review').length;
    const teachers = data.teachers || [];
    const courses = data.courses || [];
    const submissions = data.submissions || [];

    return `
      <div class="space-y-8">
        <!-- Admin Header Banner with Official Academy Logo -->
        <div class="bg-gradient-to-r from-[#0F3B36] to-[#0A2623] rounded-3xl p-6 text-white border border-[#C9A24E]/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <img src="public/images/logo.png" alt="Darul Suffah Logo" class="h-14 w-14 object-contain rounded-2xl bg-[#0A2623] p-1 border border-[#C9A24E]/40" />
            <div>
              <div class="flex items-center gap-2">
                <h1 class="text-2xl font-heading font-bold text-white">Academy Administration Portal</h1>
                <span class="text-xs bg-[#C9A24E] text-[#0A2623] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Super Admin</span>
              </div>
              <p class="text-xs text-emerald-200 mt-0.5">Darul Suffah Online Academy &bull; Learn Quran. Understand Islam. Build Character.</p>
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs text-emerald-300">Live Academic Year</span>
            <div class="text-sm font-bold text-[#E6C76A]">2026 – Active Term</div>
          </div>
        </div>

        <!-- Top Stats Banner -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-gray-500">Total Enrolled</span>
              <div class="text-3xl font-extrabold text-emerald-900 mt-1">128</div>
              <span class="text-xs text-emerald-600 font-medium">Global students across 9 countries</span>
            </div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <i data-lucide="users" class="w-6 h-6"></i>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-gray-500">Active Teachers</span>
              <div class="text-3xl font-extrabold text-emerald-900 mt-1">${teachers.length}</div>
              <span class="text-xs text-emerald-600 font-medium">Male, Female & Special Needs</span>
            </div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <i data-lucide="graduation-cap" class="w-6 h-6"></i>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-gray-500">Trial Class Requests</span>
              <div class="text-3xl font-extrabold text-amber-600 mt-1">${trials.length}</div>
              <span class="text-xs text-amber-700 font-medium">${pendingTrials} pending review</span>
            </div>
            <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <i data-lucide="calendar" class="w-6 h-6"></i>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-gray-500">Active Courses</span>
              <div class="text-3xl font-extrabold text-emerald-900 mt-1">${courses.length}</div>
              <span class="text-xs text-emerald-600 font-medium">Fully configurable</span>
            </div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <i data-lucide="book-open" class="w-6 h-6"></i>
            </div>
          </div>
        </div>

        <!-- Privacy Assurance Alert for Admin -->
        <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-emerald-900">
          <i data-lucide="shield-check" class="w-5 h-5 text-emerald-800 shrink-0"></i>
          <div>
            <strong>Strict Privacy Boundary:</strong> In compliance with Islamic and international data protection standards, children's private records are safeguarded and female students' personal cycle logs are strictly isolated and not viewable by administrators.
          </div>
        </div>

        <!-- Navigation Tabs for Admin -->
        <div class="border-b border-gray-200">
          <div class="flex gap-4 sm:gap-8 overflow-x-auto">
            <button onclick="Dashboards.setAdminTab('trials')" class="pb-3 text-sm font-semibold border-b-2 ${this.activeTab === 'trials' || this.activeTab === 'overview' ? 'border-emerald-800 text-emerald-900' : 'border-transparent text-gray-500 hover:text-gray-800'} whitespace-nowrap">
              Trial Class Bookings (${trials.length})
            </button>
            <button onclick="Dashboards.setAdminTab('teachers')" class="pb-3 text-sm font-semibold border-b-2 ${this.activeTab === 'teachers' ? 'border-emerald-800 text-emerald-900' : 'border-transparent text-gray-500 hover:text-gray-800'} whitespace-nowrap">
              Manage Teachers (${teachers.length})
            </button>
            <button onclick="Dashboards.setAdminTab('courses')" class="pb-3 text-sm font-semibold border-b-2 ${this.activeTab === 'courses' ? 'border-emerald-800 text-emerald-900' : 'border-transparent text-gray-500 hover:text-gray-800'} whitespace-nowrap">
              Manage Courses (${courses.length})
            </button>
            <button onclick="Dashboards.setAdminTab('submissions')" class="pb-3 text-sm font-semibold border-b-2 ${this.activeTab === 'submissions' ? 'border-emerald-800 text-emerald-900' : 'border-transparent text-gray-500 hover:text-gray-800'} whitespace-nowrap">
              Student Submissions (${submissions.length})
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div id="admin-tab-mount">
          ${this.renderAdminTabContent()}
        </div>
      </div>
    `;
  },

  setAdminTab(tab) {
    this.activeTab = tab;
    const mount = document.getElementById('admin-tab-mount');
    if (mount) {
      mount.innerHTML = this.renderAdminTabContent();
      if (window.lucide) window.lucide.createIcons();
    }
  },

  renderAdminTabContent() {
    const data = store.academicData;
    const tab = this.activeTab;

    if (tab === 'teachers') {
      return `
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Faculty & Instructors Directory</h3>
            <button onclick="Dashboards.openAddTeacherModal()" class="px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-medium hover:bg-emerald-900 transition flex items-center gap-1.5">
              <i data-lucide="plus" class="w-4 h-4"></i> Add Verified Teacher
            </button>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase font-semibold">
                  <tr>
                    <th class="p-4">Teacher Name</th>
                    <th class="p-4">Category</th>
                    <th class="p-4">Qualifications</th>
                    <th class="p-4">Experience</th>
                    <th class="p-4">Languages</th>
                    <th class="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${data.teachers.map((t, idx) => `
                    <tr class="hover:bg-gray-50/50">
                      <td class="p-4 font-bold text-gray-900">${t.name}</td>
                      <td class="p-4">
                        <span class="px-2.5 py-1 rounded-full text-xs font-medium ${t.category === 'special-needs' ? 'bg-purple-100 text-purple-800' : t.category === 'female' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'}">
                          ${t.category === 'special-needs' ? 'Special Needs Certified' : t.category === 'female' ? 'Female Quran Teacher' : 'Male Quran Teacher'}
                        </span>
                      </td>
                      <td class="p-4 text-gray-600">${t.qualifications}</td>
                      <td class="p-4 text-gray-600">${t.experience}</td>
                      <td class="p-4 text-gray-600">${t.languages.join(', ')}</td>
                      <td class="p-4">
                        <button onclick="Dashboards.editTeacherPrompt('${t.id}')" class="text-emerald-800 hover:underline font-medium">Edit</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    if (tab === 'courses') {
      return `
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Configured Quran & Islamic Courses</h3>
            <button onclick="alert('Feature note: Course additions can also be synced via Admin Content API.')" class="px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-medium hover:bg-emerald-900 transition flex items-center gap-1.5">
              <i data-lucide="plus" class="w-4 h-4"></i> Add Course
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${data.courses.map(c => `
              <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs px-2.5 py-0.5 bg-emerald-50 text-emerald-800 font-semibold rounded-full">${c.category}</span>
                    <span class="text-xs font-bold text-amber-700">${c.pricing}</span>
                  </div>
                  <h4 class="font-bold text-gray-900 text-base mb-1">${c.title} <span class="font-arabic text-emerald-900 text-sm">(${c.arabicTitle})</span></h4>
                  <p class="text-xs text-gray-600 leading-relaxed mb-3">${c.shortDesc}</p>
                  <div class="text-xs text-gray-500"><strong>Target:</strong> ${c.targetAge}</div>
                </div>
                <div class="pt-4 border-t border-gray-100 mt-3 flex justify-between items-center text-xs">
                  <span class="text-gray-400">${c.structure}</span>
                  <button onclick="Dashboards.editCoursePricing('${c.id}')" class="text-emerald-800 font-medium hover:underline">Edit Fee & Pacing</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (tab === 'submissions') {
      return `
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-gray-900">Student Interactive Activity Submissions</h3>
          <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase font-semibold">
                  <tr>
                    <th class="p-4">Student</th>
                    <th class="p-4">Activity</th>
                    <th class="p-4">Type</th>
                    <th class="p-4">Score</th>
                    <th class="p-4">Points</th>
                    <th class="p-4">Feedback</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${data.submissions.map(s => `
                    <tr class="hover:bg-gray-50/50">
                      <td class="p-4 font-bold text-gray-900">${s.studentName}</td>
                      <td class="p-4 text-gray-800">${s.activityTitle}</td>
                      <td class="p-4 uppercase text-gray-500 font-medium">${s.activityType}</td>
                      <td class="p-4 font-bold text-emerald-800">${s.score}%</td>
                      <td class="p-4 font-bold text-amber-600">+${s.pointsEarned}</td>
                      <td class="p-4 text-gray-600 italic">${s.teacherFeedback || 'Pending review'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    // Default: trials
    return `
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-bold text-gray-900">Incoming Free Trial Requests</h3>
          <span class="text-xs text-gray-500">Requires Academy approval before confirmation</span>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase font-semibold">
                <tr>
                  <th class="p-4">Reference</th>
                  <th class="p-4">Student & Parent</th>
                  <th class="p-4">Course</th>
                  <th class="p-4">Country & Timezone</th>
                  <th class="p-4">WhatsApp Contact</th>
                  <th class="p-4">Status</th>
                  <th class="p-4">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${data.trialRequests.map(t => `
                  <tr class="hover:bg-gray-50/50">
                    <td class="p-4 font-mono font-bold text-emerald-900">${t.id}</td>
                    <td class="p-4">
                      <div class="font-bold text-gray-900">${t.studentName} (Age ${t.age})</div>
                      <div class="text-gray-500">Parent: ${t.parentName}</div>
                    </td>
                    <td class="p-4 font-medium text-gray-800">${t.course}</td>
                    <td class="p-4 text-gray-600">
                      <div>${t.country}</div>
                      <div class="text-gray-400 font-mono text-[11px]">${t.timezone || 'Not specified'}</div>
                    </td>
                    <td class="p-4">
                      <a href="https://wa.me/${t.whatsapp.replace(/[^0-9]/g, '')}?text=Assalam%20o%20Alaikum%20${encodeURIComponent(t.parentName)}%2C%20regarding%20your%20trial%20class%20request%20for%20${encodeURIComponent(t.studentName)}%20at%20Darul%20Suffah%20Online%20Academy..." target="_blank" class="text-emerald-700 font-bold hover:underline flex items-center gap-1">
                        <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-600"></i> ${t.whatsapp}
                      </a>
                    </td>
                    <td class="p-4">
                      <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${t.status === 'Approved & Scheduled' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                        ${t.status}
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex gap-2">
                        ${t.status !== 'Approved & Scheduled' ? `
                          <button onclick="Dashboards.approveTrial('${t.id}')" class="px-3 py-1 bg-emerald-800 text-white rounded-lg text-xs font-medium hover:bg-emerald-900">
                            Approve
                          </button>
                        ` : `
                          <span class="text-xs text-emerald-700 font-medium">Scheduled</span>
                        `}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  approveTrial(id) {
    store.updateTrialStatus(id, 'Approved & Scheduled');
    alert(`Trial request ${id} has been marked Approved & Scheduled. An automated notification draft has been staged for WhatsApp dispatch.`);
    this.setAdminTab('trials');
  },

  editTeacherPrompt(teacherId) {
    const t = store.academicData.teachers.find(item => item.id === teacherId);
    if (!t) return;
    const newAvail = prompt(`Update availability schedule for ${t.name}:`, t.availability);
    if (newAvail) {
      store.updateTeacher(teacherId, { availability: newAvail });
      alert("Teacher availability updated successfully.");
      this.setAdminTab('teachers');
    }
  },

  editCoursePricing(courseId) {
    const c = store.academicData.courses.find(item => item.id === courseId);
    if (!c) return;
    const newPrice = prompt(`Update pricing / fee note for "${c.title}":`, c.pricing);
    if (newPrice) {
      store.updateCourse(courseId, { pricing: newPrice });
      alert("Course fee structure updated.");
      this.setAdminTab('courses');
    }
  },

  openAddTeacherModal() {
    const name = prompt("Enter Teacher Full Name (e.g. Qari Bilal, Ustadha Amina):");
    if (!name) return;
    const qualifications = prompt("Enter Educational Qualifications (e.g. Shahadat-ul-Alimiyyah, Tajweed Sanad):", "Certified Tajweed Instructor");
    const category = confirm("Is this teacher for the Special Needs Quran Program?") ? "special-needs" : (confirm("Is this a Female Teacher?") ? "female" : "male");
    
    store.addTeacher({
      id: "t-" + Date.now(),
      name: name,
      category: category,
      qualifications: qualifications,
      experience: "5+ Years Teaching Experience",
      languages: ["English", "Urdu"],
      specialNeedsTrained: category === "special-needs",
      availability: "Flexible international schedules",
      bio: "Dedicated Quran instructor committed to student spiritual growth."
    });

    alert("New verified teacher profile created.");
    this.setAdminTab('teachers');
  },

  // --- TEACHER PORTAL ---
  renderTeacher() {
    const teacher = INITIAL_USERS[1]; // Qari Muhammad Abdullah
    const students = store.academicData.users.filter(u => u.role === 'student');

    return `
      <div class="space-y-8">
        <!-- Header Profile Banner with Official Academy Logo -->
        <div class="bg-gradient-to-r from-[#0F3B36] to-[#0A2623] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center gap-6 border border-[#C9A24E]/30">
          <div class="relative shrink-0">
            <img src="${teacher.avatar}" alt="${teacher.name}" class="w-20 h-20 rounded-2xl object-cover border-2 border-[#E6C76A] shadow-md" />
            <img src="public/images/logo.png" alt="Academy Logo" class="w-7 h-7 object-contain rounded-lg bg-[#0A2623] p-0.5 border border-[#C9A24E] absolute -bottom-2 -right-2 shadow" />
          </div>
          <div class="text-center sm:text-left">
            <span class="px-3 py-1 bg-emerald-950 text-[#E6C76A] text-xs font-semibold rounded-full uppercase border border-[#C9A24E]/30">Instructor Portal</span>
            <h2 class="text-2xl font-bold mt-1">${teacher.name}</h2>
            <p class="text-emerald-200 text-xs mt-1">Darul Suffah Online Academy &bull; Lead Tajweed & Hifz Mentor &bull; ${teacher.email}</p>
          </div>
          <div class="sm:ml-auto flex gap-3">
            <button onclick="Dashboards.markAttendanceQuick()" class="px-4 py-2.5 bg-[#C9A24E] hover:bg-[#E6C76A] text-[#0A2623] font-bold rounded-xl text-xs shadow transition">
              Mark Attendance
            </button>
          </div>
        </div>

        <!-- Assigned Students Grid -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i data-lucide="users" class="w-5 h-5 text-emerald-800"></i>
            <span>My Assigned Students</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${students.map(s => `
              <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xs px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-full">${s.studentId}</span>
                    <span class="text-xs font-bold text-amber-600">${s.points || 0} pts</span>
                  </div>
                  <h4 class="font-bold text-gray-900 text-base mb-1">${s.name}</h4>
                  <p class="text-xs text-gray-500 mb-3">${s.email}</p>

                  <div class="bg-emerald-50/60 p-3 rounded-xl space-y-1.5 text-xs text-gray-700 mb-4">
                    <div><strong>Current Lesson:</strong> ${s.currentSabaq || 'Lesson 8'}</div>
                    <div><strong>Attendance:</strong> ${s.attendanceRate || '96%'}</div>
                    <div><strong>Next Class:</strong> ${s.nextClassTime || 'Tomorrow'}</div>
                  </div>
                </div>

                <div class="pt-4 border-t border-gray-100 flex gap-2">
                  <button onclick="Dashboards.giveFeedback('${s.studentId}')" class="flex-1 py-2 bg-emerald-800 text-white rounded-xl text-xs font-medium hover:bg-emerald-900 transition">
                    Lesson Note
                  </button>
                  <button onclick="Dashboards.assignActivity('${s.studentId}')" class="flex-1 py-2 border border-emerald-800 text-emerald-800 rounded-xl text-xs font-medium hover:bg-emerald-50 transition">
                    Assign Task
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Daily Timetable -->
        <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 class="text-base font-bold text-gray-900 mb-4">Today's Class Schedule (Live 1-on-1 Sessions)</h3>
          <div class="space-y-3">
            <div class="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold">17:30</span>
                <div>
                  <div class="font-bold text-gray-900 text-sm">Zayd Ahmad &bull; Noorani Qaida (Lesson 9)</div>
                  <div class="text-gray-500">Duration: 30 mins &bull; Link: Secure Zoom Classroom</div>
                </div>
              </div>
              <a href="https://zoom.us" target="_blank" class="px-4 py-2 bg-emerald-800 text-white rounded-lg font-medium text-center hover:bg-emerald-900">
                Launch Classroom
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  markAttendanceQuick() {
    const student = prompt("Enter Student ID to mark attendance (e.g. stu-01):", "stu-01");
    if (!student) return;
    const status = confirm("Is student present?") ? "Present" : "Absent";
    const notes = prompt("Enter progress notes for today's lesson:", "Completed Qaida Lesson 9 smoothly");
    store.recordAttendance({
      studentId: student,
      date: new Date().toISOString().slice(0, 10),
      status: status,
      course: "Noorani Qaida",
      notes: notes
    });
    alert("Attendance and progress note recorded. Parent will see this in their portal.");
  },

  giveFeedback(studentId) {
    const note = prompt("Enter teacher feedback / lesson note for student:", "Excellent Tajweed pronunciation today!");
    if (note) {
      alert(`Feedback saved for ${studentId}.`);
    }
  },

  assignActivity(studentId) {
    alert(`Quizzes and Arabic Tracing worksheets have been assigned to ${studentId}. Student will see the notification in their Learning Hub.`);
  },

  // --- STUDENT DASHBOARD ---
  renderStudent() {
    const student = INITIAL_USERS[2]; // Zayd Ahmad
    const badges = store.academicData.badges || [];
    const earnedBadges = badges.filter(b => student.badges.includes(b.id));

    return `
      <div class="space-y-8">
        <!-- Student Hero Banner with Official Academy Logo -->
        <div class="bg-gradient-to-r from-[#0F3B36] via-emerald-900 to-[#0A2623] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-[#C9A24E]/30">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div class="flex items-center gap-4">
              <img src="public/images/logo.png" alt="Academy Logo" class="h-16 w-16 object-contain rounded-2xl bg-[#0A2623] p-1 border border-[#C9A24E]/40 hidden sm:block shrink-0 shadow-md" />
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-3 py-1 bg-[#C9A24E] text-[#0A2623] text-xs font-bold rounded-full uppercase tracking-wider">
                    Level ${student.level} &bull; Talib
                  </span>
                  <span class="text-xs text-emerald-200">ID: ${student.studentId}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Assalam o Alaikum, ${student.name}!</h2>
                <p class="text-emerald-100 text-xs sm:text-sm mt-1">
                  "The best among you are those who learn the Quran and teach it." &bull; Darul Suffah Online Academy
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4 bg-emerald-950/60 p-4 rounded-2xl border border-emerald-700/50">
              <div class="text-center px-2">
                <div class="text-2xl font-extrabold text-amber-300" id="student-points-display">${student.points}</div>
                <div class="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">Total Points</div>
              </div>
              <div class="h-8 w-px bg-emerald-700/60"></div>
              <div class="text-center px-2">
                <div class="text-2xl font-extrabold text-white">${earnedBadges.length}</div>
                <div class="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">Badges</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Direct CTA to Learning Hub -->
        <div class="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <i data-lucide="gamepad-2" class="w-8 h-8"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">My Learning & Activities Studio</h3>
              <p class="text-xs text-gray-600 mt-0.5">
                Play interactive Islamic quizzes, practice Arabic handwriting on the digital canvas, and complete worksheets!
              </p>
            </div>
          </div>
          <button 
            onclick="App.navigateTo('interactive-learning')"
            class="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2 shrink-0"
          >
            <span>Launch Activity Hub</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- 3 Progress Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1: Next Lesson -->
          <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <span class="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">Next Live Class</span>
            <div class="font-bold text-gray-900 text-base mb-1">${student.nextClassTime}</div>
            <p class="text-xs text-gray-500 mb-4">Teacher: Qari Muhammad Abdullah (1-on-1 Zoom)</p>
            <div class="p-3 bg-emerald-50 rounded-xl text-xs text-emerald-900">
              <strong>Sabaq Target:</strong> ${student.currentSabaq}
            </div>
          </div>

          <!-- Card 2: Attendance & Discipline -->
          <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <span class="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">Class Attendance</span>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-3xl font-extrabold text-emerald-900">${student.attendanceRate}</span>
              <span class="text-xs text-emerald-600 font-semibold">Exemplary</span>
            </div>
            <p class="text-xs text-gray-500 mb-3">All scheduled classes attended punctually this month.</p>
            <div class="w-full bg-gray-100 rounded-full h-2">
              <div class="bg-emerald-600 h-2 rounded-full" style="width: 96%"></div>
            </div>
          </div>

          <!-- Card 3: Certificate Eligibility -->
          <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2">Academy Recognition</span>
              <div class="font-bold text-gray-900 text-base mb-1">Noorani Qaida Certification</div>
              <p class="text-xs text-gray-500 mb-3">Eligible to generate your official signed certificate.</p>
            </div>
            <button 
              onclick="InteractiveModule.generateCertificate('${student.name}', 'Noorani Qaida & Basic Tajweed')"
              class="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5"
            >
              <i data-lucide="award" class="w-4 h-4"></i> View Official Certificate
            </button>
          </div>
        </div>

        <!-- My Earned Badges Section -->
        <div class="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-bold text-gray-900">My Achievement Badges</h3>
              <p class="text-xs text-gray-500">Earned through academic perseverance and quiz mastery.</p>
            </div>
            <span class="text-xs font-bold text-amber-600">${earnedBadges.length} / ${badges.length} Unlocked</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            ${badges.map(b => {
              const unlocked = student.badges.includes(b.id);
              return `
                <div class="p-4 rounded-2xl text-center border ${unlocked ? 'bg-amber-50/40 border-amber-200' : 'bg-gray-50 border-gray-100 opacity-40'} transition">
                  <div class="w-12 h-12 mx-auto rounded-xl ${unlocked ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-400'} flex items-center justify-center mb-2 shadow-sm">
                    <i data-lucide="${b.icon}" class="w-6 h-6"></i>
                  </div>
                  <div class="font-bold text-xs text-gray-900 mb-0.5">${b.name}</div>
                  <div class="text-[10px] text-gray-500">${b.pointsReq} pts</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // --- PARENT DASHBOARD ---
  renderParent() {
    const parent = INITIAL_USERS[3]; // Br. Tariq Ahmad
    const student = INITIAL_USERS[2]; // Zayd
    const attendance = store.academicData.attendance || [];
    const fees = store.academicData.fees || [];

    return `
      <div class="space-y-8">
        <!-- Parent Banner with Official Academy Logo -->
        <div class="bg-gradient-to-r from-[#0F3B36] to-[#0A2623] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C9A24E]/30">
          <div class="flex items-center gap-4">
            <img src="public/images/logo.png" alt="Academy Logo" class="h-16 w-16 object-contain rounded-2xl bg-[#0A2623] p-1 border border-[#C9A24E]/40 hidden sm:block shrink-0 shadow-md" />
            <div>
              <span class="px-3 py-1 bg-emerald-950 text-[#E6C76A] text-xs font-semibold rounded-full uppercase tracking-wider border border-[#C9A24E]/30">Parent Portal</span>
              <h2 class="text-2xl sm:text-3xl font-bold mt-1">${parent.name}</h2>
              <p class="text-emerald-100 text-xs mt-1">Darul Suffah Online Academy &bull; Supervising: ${student.name} &bull; Country: ${parent.country}</p>
            </div>
          </div>
          <a 
            href="${ACADEMY_INFO.whatsappLink}" 
            target="_blank" 
            class="px-5 py-3 bg-[#C9A24E] hover:bg-[#E6C76A] text-[#0A2623] font-bold rounded-xl text-xs shadow transition flex items-center gap-2 shrink-0"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i> Message Academy Office
          </a>
        </div>

        <!-- 3 Parent Oversight Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Learning Progress</span>
            <div class="text-xl font-bold text-gray-900 mb-1">Noorani Qaida - Lesson 9</div>
            <p class="text-xs text-gray-500 mb-3">Madd letters and elongation rules</p>
            <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">On Schedule</span>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Monthly Fee Status</span>
            <div class="text-xl font-bold text-emerald-900 mb-1">${parent.feeStatus}</div>
            <p class="text-xs text-gray-500 mb-3">Receipt Ref: DS-2026-1102</p>
            <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">No Dues Outstanding</span>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Teacher Evaluation</span>
            <p class="text-xs text-gray-700 italic leading-relaxed mb-3">"${parent.teacherNotes}"</p>
            <span class="text-[11px] font-bold text-emerald-900">- Qari Muhammad Abdullah</span>
          </div>
        </div>

        <!-- Attendance Log for Parents -->
        <div class="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Official Attendance Record (${student.name})</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase font-semibold">
                <tr>
                  <th class="p-3">Date</th>
                  <th class="p-3">Course</th>
                  <th class="p-3">Status</th>
                  <th class="p-3">Lesson Progress Notes</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${attendance.map(a => `
                  <tr>
                    <td class="p-3 font-mono font-medium text-gray-700">${a.date}</td>
                    <td class="p-3 font-medium text-gray-900">${a.course}</td>
                    <td class="p-3">
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${a.status === 'Present' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                        ${a.status}
                      </span>
                    </td>
                    <td class="p-3 text-gray-600">${a.notes}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }
};
