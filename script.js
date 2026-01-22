let lang = "en";

const texts = {
  en: [
    "Your daily boost: drink water now 💧",
    "Reminder: take a 5-minute walk 🚶",
    "Motivation: you can do it 💪",
    "Tip: write 1 task and finish it ✍️",
    "Daily spark: smile at someone 😊",
    "Energy: stand up and stretch 🧘",
    "Focus: do the hardest task first 🔥",
  ],
  ar: [
    "تذكير يومي: اشرب مياه الآن 💧",
    "نصيحة: امشي 5 دقائق 🚶",
    "تحفيز: أنت قادر 💪",
    "نصيحة: اكتب مهمة واحدة وخلصها ✍️",
    "شرارة اليوم: ابتسم لشخص 😊",
    "طاقة: قم وتمدد 🧘",
    "تركيز: ابدأ بأصعب مهمة 🔥",
  ],
  zh: [
    "每日提醒：现在喝水 💧",
    "小建议：走5分钟 🚶",
    "动力：你能做到 💪",
    "技巧：写下1件事并完成 ✍️",
    "今日火花：对别人微笑 😊",
    "能量：站起来伸展 🧘",
    "专注：先做最难的事 🔥",
  ]
};

function generate() {
  const list = texts[lang];
  const random = list[Math.floor(Math.random() * list.length)];
  document.getElementById("dailyText").innerText = random;
}

function copyText() {
  const text = document.getElementById("dailyText").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

function setLang(l) {
  lang = l;
  generate();
}

function toggleLang() {
  const box = document.getElementById("langBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function toggleContact() {
  const box = document.getElementById("contactBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}
