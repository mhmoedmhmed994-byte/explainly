const truths = [
  "You are not lost. You are choosing comfort over growth.",
  "You don’t need more motivation. You need more discipline.",
  "Your fear is not protecting you. It’s controlling you.",
  "You keep waiting for the right time. The right time is now.",
  "You can’t change your life until you change your habits.",
  "The pain you feel today is the strength you feel tomorrow."
];

let current = 0;
let lang = "en";

function revealTruth() {
  document.getElementById("truthText").innerText = truths[current];
}

function nextTruth() {
  current = Math.floor(Math.random() * truths.length);
  revealTruth();
}

function copyText() {
  const text = document.getElementById("truthText").innerText;
  navigator.clipboard.writeText(text);
}

function setLang(l) {
  lang = l;
  if (lang === "en") {
    document.getElementById("title").innerText = "TruthTap";
    document.getElementById("desc").innerText = "One truth. One hit. Every day.";
  } else if (lang === "ar") {
    document.getElementById("title").innerText = "TruthTap";
    document.getElementById("desc").innerText = "حقيقة واحدة. ضربة واحدة. كل يوم.";
  } else if (lang === "zh") {
    document.getElementById("title").innerText = "TruthTap";
    document.getElementById("desc").innerText = "每天一个真相，一击即中。";
  }
}

document.getElementById("contactBtn").addEventListener("click", () => {
  const options = document.getElementById("contactOptions");
  options.style.display = options.style.display === "none" ? "block" : "none";
});
