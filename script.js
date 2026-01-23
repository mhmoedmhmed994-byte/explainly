const translations = {
  ar: {
    title: "EcoPet",
    subtitle: "مساعد ذكي لصحة الحيوانات والطيور",
    label1: "اختر النوع",
    label2: "العمر",
    label3: "اكتب المشكلة",
    btnAnalyze: "تحليل الحالة",
    footerText: "© EcoPet",
  },
  en: {
    title: "EcoPet",
    subtitle: "Smart assistant for pets & birds",
    label1: "Choose animal",
    label2: "Age",
    label3: "Describe the problem",
    btnAnalyze: "Analyze",
    footerText: "© EcoPet",
  },
  zh: {
    title: "EcoPet",
    subtitle: "宠物与鸟类智能助手",
    label1: "选择动物",
    label2: "年龄",
    label3: "描述问题",
    btnAnalyze: "分析",
    footerText: "© EcoPet",
  }
};

function changeLang() {
  const lang = document.getElementById("lang").value;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("label1").innerText = translations[lang].label1;
  document.getElementById("label2").innerText = translations[lang].label2;
  document.getElementById("label3").innerText = translations[lang].label3;
  document.getElementById("btnAnalyze").innerText = translations[lang].btnAnalyze;
  document.getElementById("footerText").innerText = translations[lang].footerText;
}

async function analyze() {
  const animal = document.getElementById("animal").value;
  const age = document.getElementById("age").value;
  const problem = document.getElementById("problem").value;

  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "⏳ جاري التحليل...";

  const response = await fetch("/.netlify/functions/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      animal,
      age,
      problem
    })
  });

  const data = await response.json();

  resultDiv.innerHTML = `
    <h3>🧠 النتيجة</h3>
    <p>${data.reply}</p>
    <small>⚠️ هذا التحليل إرشادي وليس بديلاً عن الطبيب البيطري</small>
  `;
}
