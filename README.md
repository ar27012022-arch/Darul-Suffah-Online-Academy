<p align="center">
  <img src="public/images/logo.png" width="160" alt="Darul Suffah Online Academy Logo" style="border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.15);" />
</p>

<h1 align="center">Darul Suffah Online Academy</h1>

<p align="center">
  <strong>Official Slogan:</strong> <em>Learn Quran. Understand Islam. Build Character.</em>
</p>

<p align="center">
  <a href="https://wa.me/923468348397"><img src="https://img.shields.io/badge/WhatsApp-%2B92_346_8348397-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"></a>
  <a href="https://www.facebook.com/1Darusuffahonlineinstitute"><img src="https://img.shields.io/badge/Facebook-Official_Page-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"></a>
  <a href="https://www.instagram.com/darulsuffahonlineacademy"><img src="https://img.shields.io/badge/Instagram-Official_Account-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript_ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Dependencies-Zero_Dependency-success?style=flat-square" alt="Zero Dependencies" />
  <img src="https://img.shields.io/badge/Deployment-GitHub_Pages_Ready-blue?style=flat-square" alt="GitHub Pages Ready" />
</p>

---

## 📖 اردو رہنمائی برائے گٹ ہب اپلوڈ (GitHub Upload Guide in Urdu)

یہ پورا فولڈر گٹ ہب پر اپلوڈ کرنے کے لیے 100 فیصد تیار اور مکمل ہے:

### طریقہ نمبر 1: براہِ راست گٹ ہب ویب سائٹ پر ڈریگ اینڈ ڈراپ (سب سے آسان طریقہ)
1. **GitHub.com** پر لاگ اِن کریں اور **New Repository** بنائیں (نام رکھیں: `darul-suffah-academy`)۔
2. بنی ہوئی ریپوزیٹری میں **"uploading an existing file"** پر کلک کریں۔
3. اس فولڈر (`darul-suffah-academy`) کی تمام فائلز اور فولڈرز کو سلیکٹ کر کے براؤزر میں ڈریگ اینڈ ڈراپ کر دیں۔
4. نیچے **Commit changes** پر کلک کر دیں۔
5. **مفت لائیو ویب سائٹ چلانے کے لیے:** ریپوزیٹری کی **Settings** میں جائیں ➔ **Pages** پر کلک کریں ➔ Branch میں **main** سلیکٹ کریں اور **Save** کر دیں۔ 1 منٹ میں آپ کی ویب سائٹ پوری دنیا کے لیے لائیو ہو جائے گی!

### طریقہ نمبر 2: Git CLI کے ذریعے کمانڈز
```bash
# 1. فولڈر میں آئیں
cd darul-suffah-academy

# 2. گٹ شروع کریں
git init

# 3. تمام فائلز شامل کریں
git add .

# 4. کمٹ کریں
git commit -m "Initial commit - Darul Suffah Online Academy platform"

# 5. برانچ کا نام main رکھیں
git branch -M main

# 6. اپنی گٹ ہب ریپوزیٹری کا لنک شامل کریں (اپنا یوزر نیم لگائیں)
git remote add origin https://github.com/YOUR-USERNAME/darul-suffah-academy.git

# 7. اپلوڈ کر دیں
git push -u origin main
```

---

## 🌟 Academy Overview & Brand Identity

Darul Suffah Online Academy is a modern, premium, international online Quran teaching institute serving families across Pakistan, USA, UK, Canada, Saudi Arabia, UAE, Australia, and worldwide.

### 🎨 Official Brand Color Palette
| Color Role | Color Name | Hex Code | Visual Sample |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Deep Emerald | `#0F3B36` | `██████` |
| **Dark Accents** | Dark Emerald | `#0A2623` | `██████` |
| **Primary Gold** | Matte Gold | `#C9A24E` | `██████` |
| **Gold Highlight**| Soft Gold | `#E6C76A` | `██████` |
| **Warm Ivory** | Warm Ivory | `#F8F5ED` | `██████` |
| **Pure White** | White | `#FFFFFF` | `██████` |
| **Soft Background**| Soft Gray/Green | `#F4F6F3` | `██████` |
| **Main Text** | Charcoal Emerald | `#24332F` | `██████` |
| **Muted Text** | Slate Muted | `#68756F` | `██████` |
| **Borders** | Subtle Border | `#E5E9E4` | `██████` |

---

## 📁 Repository Folder Structure

```text
darul-suffah-academy/
├── .gitignore              # Standard git ignore file (OS, IDE, logs)
├── 404.html                # Branded custom 404 error page
├── index.html              # Main application single-page platform (11 views)
├── README.md               # Repository documentation and guides
├── robots.txt              # Search engine crawler directives
├── server.ps1              # Zero-dependency local server (PowerShell .NET)
├── sitemap.xml             # SEO-optimized XML sitemap
│
├── css/
│   └── style.css           # Brand CSS design tokens, Islamic patterns & custom utilities
│
├── js/
│   ├── app.js              # Core UI router, live clock, timezone switcher, form handlers
│   ├── dashboards.js       # Admin, Teacher, Student, and Parent role portals
│   ├── data.js             # Seed database (teachers, courses, quizzes, blog, worksheets)
│   ├── interactive.js      # HTML5 letter tracing canvas, gamified audio quizzes, certificate generator
│   ├── private-tracker.js  # Confidential Women's Period & Ibadah Vault (isolated storage)
│   ├── special-needs.js    # Interactive sensory phonics & inclusive learning demos
│   └── store.js            # Reactive state management with localStorage persistence
│
└── public/
    └── images/
        ├── favicon.png     # Official high-resolution favicon
        ├── logo.jpg        # Official academy logo (JPG)
        └── logo.png        # Official academy logo (PNG)
```

---

## 🚀 Key Features & Capabilities

### 1. Complete Public Website (11 Pages & Sections)
1. **Home:** Dynamic Hero with verified trust badges, "Why Choose Darul Suffah?" (8 features), featured course cards, Special Needs signature banner, 4-step workflow, and floating WhatsApp (+92 346 8348397).
2. **About Us:** Academy vision, mission, core values (*Ikhlas, Itqan, Rahmah, Inclusivity*), and child protection standards.
3. **Our Courses:** Dedicated syllabi for all 10 courses:
   - Noorani Qaida
   - Quran Reading (Nazra)
   - Quran with Tajweed
   - Quran Memorization (Hifz)
   - Basic Islamic Studies
   - Learn Salah (Prayer)
   - Daily Masnoon Duas
   - Arabic Language
   - Quran Revision Classes
   - Islamic Studies for Children and Adults
4. **Special Needs Quran Classes (Signature Major Feature):**
   - Tagline: *"Every Child Deserves the Opportunity to Learn the Quran."*
   - Supported profiles: Autism Spectrum Disorder (ASD), ADHD, Dyslexia, Speech & Language Difficulties, Learning Delays, Slow Learners.
   - Individualized teaching approach & Sensory Phonics tools.
   - Dedicated Special Needs Admission Form.
5. **Our Teachers:** Directory filterable by Male Quran Teachers, Female Quran Teachers, and Special Needs Instructors.
6. **How It Works:** 5-step transparent enrollment pathway from Free Trial to Official Certification.
7. **Admission / Registration:** Comprehensive enrollment portal.
8. **Free Trial Class Booking System:** Real-time booking form with timezone detection, WhatsApp fast-track, and Reference ID generation.
9. **Student Learning Resources:** Searchable worksheet library, Tajweed guides, Salah charts, and PDF download triggers.
10. **Blog & Islamic Education:** SEO-friendly blog covering Quran learning tips, Tajweed education, Islamic parenting, children's education, importance of Quran learning, and neurodiversity-adapted pedagogy.
11. **Contact Us:** Interactive inquiry form, headquarters information, and direct social media integrations.

### 2. Multi-Role Portals & Management
- **Admin Dashboard:** Real-time metrics (enrolled students, active faculty, trial requests), trial request approval workflow, teacher directory manager, course pricing/content editor, and student submission grader.
- **Teacher Portal:** Assigned students roster, daily timetable with Zoom classroom links, rapid attendance logger, lesson note feedback, and assignment tools.
- **Student Dashboard:** Personalized progress metrics, Sabaq/Sabqi tracker, attendance rate, badge showcase, and one-click Certificate of Achievement generator.
- **Parent Dashboard:** Child supervision, attendance breakdown, monthly fee status, and direct WhatsApp communication channel with academy directors.

### 3. Interactive Student Learning Hub
- **Gamified Islamic Quizzes:** 12 categories, multiple-choice & true/false questions, instant Web Audio sound effects, detailed scholarly explanations, and automatic point tallying.
- **Arabic Calligraphy & Letter Tracing Studio:** High-precision HTML5 Canvas supporting both mouse and touchscreen drawing, custom brush sizes, color palette, dotted letter guides (Alif to Yaa, Allah, Bismillah), clear/undo, and PNG download for teacher submission.
- **Gamification & Rewards Engine:** Verifiable achievement badges (*First Step Learner, Star Learner, Quran Explorer, Tajweed Champion, Arabic Letter Expert, Consistent Learner*) and dynamic HTML5 Canvas Certificate Generator.

### 4. Private Women's Period & Ibadah Tracker
- **Strict Privacy & Isolation:** Stored in a separate encrypted local storage vault. Academy administrators, teachers, and public scoreboards have **zero** access to health logs.
- **Age Safeguards (15+):** Discreet interface with optional 4-digit PIN security lock.
- **Period Cycle Logger:** Start/end dates, cycle length estimation (clearly labeled as mathematical estimates, not medical diagnosis), and private notes.
- **Quran & Ibadah Journal:** Permissible worship logs (Quran listening, Daily Masnoon Duas, Tajweed lectures, Salawat), interactive Digital Tasbih Counter, personal reflection journal, and scholarly rulings guide modal.

---

## 💻 How to Run Locally

### Option A: Direct Browser Opening (No Server Needed)
Simply double click `index.html` or right-click and choose **Open with Google Chrome** / **Microsoft Edge** / **Firefox**.

### Option B: Zero-Dependency Local Server (PowerShell)
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1 -Port 3000
```
Then visit: `http://127.0.0.1:3000/`

---

## 📞 Official Academy Contact

- **Academy Name:** Darul Suffah Online Academy
- **Official Hotline / WhatsApp:** [+92 346 8348397](https://wa.me/923468348397)
- **Official Facebook:** [fb.com/1Darusuffahonlineinstitute](https://www.facebook.com/1Darusuffahonlineinstitute)
- **Official Instagram:** [@darulsuffahonlineacademy](https://www.instagram.com/darulsuffahonlineacademy)
- **Official Email:** [info@darulsuffahacademy.com](mailto:info@darulsuffahacademy.com)
