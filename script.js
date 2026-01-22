const messages = {
  en: [
    "Start before you feel ready.",
    "Small steps every day win.",
    "Your future needs your focus today.",
    "Discipline beats motivation.",
    "Progress, not perfection."
  ],
  ar: [
    "ابدأ قبل ما تكون جاهز.",
    "الخطوات الصغيرة اليومية تصنع الفرق.",
    "مستقبلك محتاج تركيزك النهارده.",
    "الانضباط أقوى من الحماس.",
    "التقدم أهم من الكمال."
  ]
};

let currentLang = "en";

const messageEl = document.getElementById("message");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const contactBtn = document.getElementById("contactBtn");
const contactOptions = document.getElementById("contactOptions");

generateBtn.onclick = () => {
  const list = messages[currentLang];
  const random = list[Math.floor(Math.random() * list.length)];
  messageEl.textContent = random;

  messageEl.classList.remove("message");
  void messageEl.offsetWidth;
  messageEl.classList.add("message");
};

copyBtn.onclick = () => {
  navigator.clipboard.writeText(messageEl.textContent);
  copyBtn.textContent = "Copied ✔";
  setTimeout(() => copyBtn.textContent = "Copy", 1500);
};

contactBtn.onclick = () => {
  contactOptions.style.display =
    contactOptions.style.display === "block" ? "none" : "block";
};

function setLang(lang) {
  currentLang = lang;
}
