const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigasi');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const checklist = [...document.querySelectorAll('.checklist input')];
const progressText = document.querySelector('#progress-text');
const progressBar = document.querySelector('#progress-bar');
const storageKey = 'linkedin-playbook-progress';

function updateProgress() {
  const completed = checklist.filter((item) => item.checked).length;
  progressText.textContent = `${completed} dari ${checklist.length} selesai`;
  progressBar.style.width = `${(completed / checklist.length) * 100}%`;
  localStorage.setItem(storageKey, JSON.stringify(checklist.map((item) => item.checked)));
}

try {
  const savedState = JSON.parse(localStorage.getItem(storageKey));
  if (Array.isArray(savedState)) {
    checklist.forEach((item, index) => { item.checked = Boolean(savedState[index]); });
  }
} catch {
  localStorage.removeItem(storageKey);
}

checklist.forEach((item) => item.addEventListener('change', updateProgress));
document.querySelector('#reset-checklist').addEventListener('click', () => {
  checklist.forEach((item) => { item.checked = false; });
  updateProgress();
});

updateProgress();
