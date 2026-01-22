const contactBtn = document.getElementById("contactBtn");
const contactOptions = document.getElementById("contactOptions");

contactBtn.onclick = () => {
  contactOptions.style.display =
    contactOptions.style.display === "block" ? "none" : "block";
};

async function explainText() {
  const text = document.getElementById("input").value.trim();
  if (!text) return alert("اكتب نص الأول");

  document.getElementById("summary").innerText = "جاري التحليل...";
  document.getElementById("points").innerHTML = "";

  const res = await fetch("/.netlify/functions/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  document.getElementById("summary").innerText = data.summary;

  const pointsEl = document.getElementById("points");
  data.points.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p;
    pointsEl.appendChild(li);
  });
}

function copyAll() {
  const summary = document.getElementById("summary").innerText;
  const points = [...document.querySelectorAll("#points li")]
    .map(li => "- " + li.innerText)
    .join("\n");

  navigator.clipboard.writeText(summary + "\n\n" + points);
  alert("تم النسخ ✅");
}
