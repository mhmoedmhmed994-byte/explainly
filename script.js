async function analyze() {
  const animal = document.getElementById("animal").value;
  const age = document.getElementById("age").value;
  const problem = document.getElementById("problem").value;

  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "⏳ جاري التحليل...";

  const response = await fetch("/.netlify/functions/ai", {
    method: "POST",
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
