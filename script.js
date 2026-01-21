let currentLang = "en";

const translations = {
  en: {
    title: "Explainly",
    desc: "Understand any content easily.",
    explainBtn: "Explain",
    simplified: "Simplified",
    summary: "Summary",
    keyPoints: "Key Points",
    copyBtn: "Copy",
    contactBtn: "Contact"
  },
  ar: {
    title: "إكسبلينلي",
    desc: "افهم أي محتوى بسهولة.",
    explainBtn: "اشرح",
    simplified: "مبسط",
    summary: "ملخص",
    keyPoints: "أهم النقاط",
    copyBtn: "نسخ",
    contactBtn: "تواصل"
  },
  zh: {
    title: "解释者",
    desc: "轻松理解任何内容。",
    explainBtn: "解释",
    simplified: "简化",
    summary: "总结",
    keyPoints: "要点",
    copyBtn: "复制",
    contactBtn: "联系"
  }
};

function setLang(lang) {
  currentLang = lang;

  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("desc").innerText = translations[lang].desc;
  document.getElementById("btn").innerText = translations[lang].explainBtn;
  document.getElementById("simpleTitle").innerText = translations[lang].simplified;
  document.getElementById("summaryTitle").innerText = translations[lang].summary;
  document.getElementById("pointsTitle").innerText = translations[lang].keyPoints;
  document.getElementById("copyBtn").innerText = translations[lang].copyBtn;
  document.getElementById("contactBtn").innerText = translations[lang].contactBtn;
}

function explain() {
  const text = document.getElementById("input").value.trim();
  if (!text) return;

  // مثال مبسط بدل API
  document.getElementById("simpleText").innerText = text.slice(0, 100) + "...";
  document.getElementById("summaryText").innerText = text.slice(0, 200) + "...";

  const points = text.split(".").filter(p => p.trim().length > 0).slice(0, 5);
  const pointsList = document.getElementById("points");
  pointsList.innerHTML = "";
  points.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p.trim();
    pointsList.appendChild(li);
  });
}

function copyAll() {
  const text = `
${document.getElementById("simpleTitle").innerText}:
${document.getElementById("simpleText").innerText}

${document.getElementById("summaryTitle").innerText}:
${document.getElementById("summaryText").innerText}

${document.getElementById("pointsTitle").innerText}:
${Array.from(document.getElementById("points").children).map(li => "- " + li.innerText).join("\n")}
`;
  navigator.clipboard.writeText(text);
}

// Contact button toggle
const contactBtn = document.getElementById("contactBtn");
const contactOptions = document.getElementById("contactOptions");

contactBtn.addEventListener("click", () => {
  if (contactOptions.style.display === "none") {
    contactOptions.style.display = "block";
  } else {
    contactOptions.style.display = "none";
  }
});
