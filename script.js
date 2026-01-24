// ====== LANGUAGES ======
const translations = {
  ar: {
    nav_symptoms: "الأعراض",
    nav_nutrition: "التغذية",
    nav_fitness: "اللياقة",
    nav_favorites: "المفضلة",
    hero_title: "PulseAI – مساعد الصحة الذكي",
    hero_sub: "تحليل أعراض + خطة تغذية + خطة لياقة في مكان واحد",
    sym_title: "تحليل الأعراض",
    nut_title: "تحليل التغذية",
    fit_title: "تحليل اللياقة",
    fav_title: "المفضلة"
  },
  en: {
    nav_symptoms: "Symptoms",
    nav_nutrition: "Nutrition",
    nav_fitness: "Fitness",
    nav_favorites: "Favorites",
    hero_title: "PulseAI – Smart Health Assistant",
    hero_sub: "Symptoms + Nutrition + Fitness in one place",
    sym_title: "Symptoms Analysis",
    nut_title: "Nutrition Analysis",
    fit_title: "Fitness Analysis",
    fav_title: "Favorites"
  },
  cn: {
    nav_symptoms: "症状",
    nav_nutrition: "营养",
    nav_fitness: "健身",
    nav_favorites: "收藏",
    hero_title: "PulseAI – 智能健康助手",
    hero_sub: "症状 + 营养 + 健身 一站式",
    sym_title: "症状分析",
    nut_title: "营养分析",
    fit_title: "健身分析",
    fav_title: "收藏"
  }
};

let currentLang = "ar";

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[currentLang][key];
  });
}

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : currentLang === "en" ? "cn" : "ar";
  document.getElementById("langBtn").textContent = currentLang.toUpperCase();
  translatePage();
});

// ====== Theme ======
document.getElementById("themeBtn").addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const next = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  document.getElementById("themeBtn").textContent = next === "dark" ? "☀️" : "🌙";
});

// ====== Favorites ======
function addToFavorites(title, content) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs.push({ title, content, date: new Date().toLocaleString() });
  localStorage.setItem("favorites", JSON.stringify(favs));
  loadFavorites();
}

function loadFavorites() {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  const box = document.getElementById("favBox");
  if (!box) return;
  box.innerHTML = "";
  favs.forEach((item, index) => {
    box.innerHTML += `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <small>${item.date}</small>
        <button onclick="removeFav(${index})">❌</button>
      </div>
    `;
  });
}

function removeFav(i) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs.splice(i, 1);
  localStorage.setItem("favorites", JSON.stringify(favs));
  loadFavorites();
}

// ====== Demo analysis ======
function analyzeSymptoms() {
  const text = document.getElementById("symInput").value;
  document.getElementById("symResult").innerText = "Result: " + text;
}

function analyzeNutrition() {
  const text = document.getElementById("nutInput").value;
  document.getElementById("nutResult").innerText = "Result: " + text;
}

function analyzeFitness() {
  const text = document.getElementById("fitInput").value;
  document.getElementById("fitResult").innerText = "Result: " + text;
}

window.onload = () => {
  translatePage();
  loadFavorites();
};
