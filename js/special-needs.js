/**
 * Darul Suffah Online Academy - Special Needs & Accessibility Engine
 * Inclusive Quran Pedagogy, Sensory-Friendly Tools & Admission Handler
 */

const SpecialNeedsModule = {
  isCalmMode: false,
  isAudioAssisted: true,

  toggleCalmMode() {
    this.isCalmMode = !this.isCalmMode;
    document.body.classList.toggle('calm-mode', this.isCalmMode);
    alert(this.isCalmMode ? "Calm sensory mode enabled: animations paused, high contrast soothing palette active." : "Standard visual mode restored.");
  },

  playArabicWordAudio(word, transliteration) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.75; // Slower rate for clear phonetic absorption
      window.speechSynthesis.speak(utterance);
    } else {
      alert(`Pronouncing: ${word} (${transliteration})`);
    }
  },

  submitSpecialNeedsForm(e) {
    e.preventDefault();

    const parentName = document.getElementById('sn-parent-name')?.value;
    const childAge = document.getElementById('sn-child-age')?.value;
    const country = document.getElementById('sn-country')?.value;
    const language = document.getElementById('sn-language')?.value;
    const phone = document.getElementById('sn-phone')?.value;
    const learningDifferences = document.getElementById('sn-condition')?.value;
    const preferences = document.getElementById('sn-preferences')?.value;
    const goals = document.getElementById('sn-goals')?.value;
    const timing = document.getElementById('sn-timing')?.value;

    if (!parentName || !phone) {
      alert("Please provide the required contact information.");
      return;
    }

    const newAdmission = store.addAdmission({
      category: "Special Needs Quran Class",
      parentName,
      childAge,
      country,
      language,
      phone,
      learningDifferences,
      preferences,
      goals,
      preferredTiming: timing,
      privacySafeguard: "Data restricted to designated special education coordinator"
    });

    const modal = document.getElementById('submission-confirmation-modal');
    if (modal) {
      document.getElementById('modal-ref-id').textContent = newAdmission.id;
      document.getElementById('modal-student-name').textContent = `Applicant (Age ${childAge}) via ${parentName}`;
      document.getElementById('modal-course-name').textContent = `Special Needs Quran Class (${learningDifferences})`;
      document.getElementById('modal-whatsapp-btn').href = `https://wa.me/923468348397?text=Assalam%20o%20Alaikum%2C%20I%20have%20submitted%20a%20Special%20Needs%20admission%20form%20(Ref%3A%20${newAdmission.id})%20for%20my%20child.%20Looking%20forward%20to%20discussing%20our%20individualized%20learning%20plan.`;
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    // Reset form
    e.target.reset();
  }
};
