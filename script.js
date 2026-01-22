let currentLang = "en";

const messages = {
  en: [
    "Small steps every day lead to big results.",
    "Focus on progress, not perfection.",
    "Discipline beats motivation.",
    "Your future is built today.",
    "Consistency is power."
  ],
  ar: [
    "خطوة صغيرة كل يوم تصنع فرقًا كبيرًا.",
    "الاستمرارية أهم من الحماس.",
    "مستقبلك بيتبني دلوقتي.",
    "التركيز قوة.",
    "النجاح محتاج صبر."
  ],
  zh: [
    "每天进步一点点。",
    "专注胜过动力。",
    "坚持就是力量。",
    "未来由今天决定。",
    "简单但持续。"
  ]
};

const rareMessages = {
  en: [
    "🔥 RARE 🔥\nIf you stay consistent for one year, your life will change completely."
  ],
  ar: [
    "🔥 رسالة نادرة 🔥\nالالتزام لمدة سنة واحدة كفيل يغير حياتك بالكامل."
  ],
  zh: [
    "🔥 稀有信息 🔥\n坚持一年，你的人生将完全不同。"
  ]
};

function generateMessage() {
  const chance = Math.random();
  let text = "";

  if (chance < 0.01) {
    text = rareMessages[currentLang][0];
    document.getElementById("message").style.color = "#ffd700";
  } else {
    const list = messages[currentLang];
    text = list[Math.floor(Math.random() * list.length)];
    document.getElementById("message").style.color = "#ffffff";
  }

  document.getElementById("message").textContent = text;
}

function copyMessage() {
  const text = document.getElementById("message").textContent;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

function setLang(lang) {
  currentLang = lang;
  generateMessage();
}

function toggleContact() {
  const box = document.getElementById("contact");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
