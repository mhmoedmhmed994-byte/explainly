let lang = "en";
let mood = "happy";

const messages = {
  en: {
    happy: [
      "Smile! Today is a new chance.",
      "You are stronger than you think.",
      "Small steps lead to big results."
    ],
    calm: [
      "Take a deep breath and relax.",
      "Peace comes from within.",
      "Slow down and enjoy the moment."
    ],
    focus: [
      "Do one task, do it well.",
      "Start now, not later.",
      "Focus on progress, not perfection."
    ]
  },
  ar: {
    happy: [
      "ابتسم! اليوم فرصة جديدة.",
      "أنت أقوى مما تتخيل.",
      "الخطوات الصغيرة تؤدي لنتائج كبيرة."
    ],
    calm: [
      "تنفس بعمق واسترخِ.",
      "السلام يبدأ من داخلك.",
      "اهدأ واستمتع باللحظة."
    ],
    focus: [
      "ابدأ بمهمة واحدة وأكملها.",
      "ابدأ الآن، ليس لاحقًا.",
      "التركيز على التقدم أفضل من الكمال."
    ]
  },
  zh: {
    happy: [
      "微笑！今天是新的机会。",
      "你比想象中更强大。",
      "小步骤带来大结果。"
    ],
    calm: [
      "深呼吸，放松一下。",
      "平静来自内心。",
      "慢下来，享受当下。"
    ],
    focus: [
      "专注做一件事，做到最好。",
      "现在开始，不要拖延。",
      "专注于进步，而不是完美。"
    ]
  }
};

function setLang(l) {
  lang = l;
  generate();
}

function setMood(m) {
  mood = m;
  generate();
}

function generate() {
  const list = messages[lang][mood];
  const random = list[Math.floor(Math.random() * list.length)];
  document.getElementById("dailyText").innerText = random;
}

function copyText() {
  const text = document.getElementById("dailyText").innerText;
  navigator.clipboard.writeText(text);
}

function toggleContact() {
  const el = document.getElementById("contactOptions");
  el.style.display = el.style.display === "none" ? "block" : "none";
}

// Start with a message
generate();
