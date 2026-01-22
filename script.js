let lang = "en";

const texts = {
  en: {
    title: "EzyBrief",
    desc: "Get a short summary, key points, and content ideas in seconds.",
    btn: "Summarize",
    summaryTitle: "Summary",
    pointsTitle: "Key Points",
    ideasTitle: "Content Ideas",
    copyBtn: "Copy",
    contact: "Contact"
  },
  ar: {
    title: "EzyBrief",
    desc: "احصل على ملخص سريع ونقاط رئيسية وأفكار محتوى في ثواني.",
    btn: "لخص",
    summaryTitle: "ملخص",
    pointsTitle: "أهم النقاط",
    ideasTitle: "أفكار محتوى",
    copyBtn: "نسخ",
    contact: "تواصل"
  },
  zh: {
    title: "EzyBrief",
    desc: "在几秒钟内获得简短摘要、关键点和内容创意。",
    btn: "总结",
    summaryTitle: "摘要",
    pointsTitle: "要点",
    ideasTitle: "内容创意",
    copyBtn: "复制",
    contact: "联系"
  }
};

function setLang(l) {
  lang = l;
  document.getElementById("title").innerText = texts[l].title;
  document.getElementById("desc").innerText = texts[l].desc;
  document.getElementById("btn").innerText = texts[l].btn;
  document.getElementById("summaryTitle").innerText = texts[l].summaryTitle;
  document.getElementById("pointsTitle").innerText = texts[l].pointsTitle;
  document.getElementById("ideasTitle").innerText = texts[l].ideasTitle;
  document.getElementById("copyBtn").innerText = texts[l].copyBtn;
  document.getElementById("contactBtn").innerText = texts[l].contact;
}

function explain() {
  const input = document.getElementById("input").value.trim();
  if (!input) return;

  // Summary
  const summary = input.split(".").slice(0, 2).join(".") + ".";

  // Key points
  const points = input.split(".").slice(0, 4).map(s => s.trim()).filter(Boolean);

  // Content ideas
  const ideas = [
    "Make a short video explaining the main point.",
    "Create a quick checklist based on the text.",
    "Write a tweet thread summarizing the key points."
  ];

  document.getElementById("summaryText").innerText = summary;
  const pointsEl = document.getElementById("points");
  pointsEl.innerHTML = "";
  points.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p;
    pointsEl.appendChild(li);
  });

  const ideasEl = document.getElementById("ideas");
  ideasEl.innerHTML = "";
  ideas.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    ideasEl.appendChild(li);
  });
}

function copyAll() {
  const summary = document.getElementById("summaryText").innerText;
  const points = Array.from(document.getElementById("points").children).map(li => "- " + li.innerText).join("\n");
  const ideas = Array.from(document.getElementById("ideas").children).map(li => "- " + li.innerText).join("\n");

  const text = `${summary}\n\nKey Points:\n${points}\n\nContent Ideas:\n${ideas}`;
  navigator.clipboard.writeText(text);
}
