function explain() {
  const text = document.getElementById("input").value.trim();
  if (!text) return;

  const words = text.split(" ");
  document.getElementById("simpleText").innerText =
    words.slice(0, 15).join(" ") + "...";

  document.getElementById("summaryText").innerText =
    words.slice(0, 30).join(" ") + "...";

  const points = document.getElementById("points");
  points.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.innerText = "Key idea " + (i + 1);
    points.appendChild(li);
  }
}

function copyAll() {
  const text =
    document.getElementById("simpleText").innerText + "\n" +
    document.getElementById("summaryText").innerText;
  navigator.clipboard.writeText(text);
}

function setLang(lang) {
  if (lang === "ar") {
    document.getElementById("title").innerText = "اشرحلي";
    document.getElementById("desc").innerText = "افهم أي محتوى بسهولة";
    document.getElementById("btn").innerText = "اشرح";
    document.getElementById("copyBtn").innerText = "نسخ";
    document.getElementById("input").placeholder = "الصق أي نص هنا...";
  } else if (lang === "zh") {
    document.getElementById("title").innerText = "Explainly";
    document.getElementById("desc").innerText = "轻松理解任何内容";
    document.getElementById("btn").innerText = "解释";
    document.getElementById("copyBtn").innerText = "复制";
    document.getElementById("input").placeholder = "粘贴文本...";
  } else {
    location.reload();
  }
}
