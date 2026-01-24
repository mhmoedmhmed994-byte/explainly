// ====== LANGUAGE TRANSLATION ======
const translations = {
  en: {
    home_title: "HealthAI Hub",
    home_desc: "Analyze symptoms, nutrition, and fitness in one place.",
    home_symptoms: "Symptoms Analysis",
    home_nutrition: "Nutrition Plan",
    home_fitness: "Fitness Plan",
    nav_home: "Home",
    nav_symptoms: "Symptoms",
    nav_nutrition: "Nutrition",
    nav_fitness: "Fitness",
    nav_favorites: "Favorites",
    symptoms_title: "Symptoms Analysis",
    symptoms_placeholder: "Write your symptoms...",
    nutrition_title: "Nutrition Plan",
    nutrition_placeholder: "Write your goal...",
    fitness_title: "Fitness Plan",
    fitness_placeholder: "Write your goal...",
    analyze_btn: "Analyze",
    generate_btn: "Generate Plan",
    save_btn: "Save to Favorites",
    favorites_title: "Favorites"
  },
  ar: {
    home_title: "مركز الصحة بالذكاء الاصطناعي",
    home_desc: "حلل الأعراض والتغذية واللياقة في مكان واحد.",
    home_symptoms: "تحليل الأعراض",
    home_nutrition: "خطة تغذية",
    home_fitness: "خطة لياقة",
    nav_home: "الرئيسية",
    nav_symptoms: "الأعراض",
    nav_nutrition: "التغذية",
    nav_fitness: "اللياقة",
    nav_favorites: "المفضلة",
    symptoms_title: "تحليل الأعراض",
    symptoms_placeholder: "اكتب أعراضك هنا...",
    nutrition_title: "خطة التغذية",
    nutrition_placeholder: "اكتب هدفك هنا...",
    fitness_title: "خطة اللياقة",
    fitness_placeholder: "اكتب هدفك هنا...",
    analyze_btn: "تحليل",
    generate_btn: "توليد الخطة",
    save_btn: "حفظ في المفضلة",
    favorites_title: "المفضلة"
  },
  zh: {
    home_title: "健康AI中心",
    home_desc: "在一个地方分析症状、营养和健身。",
    home_symptoms: "症状分析",
    home_nutrition: "营养计划",
    home_fitness: "健身计划",
    nav_home: "首页",
    nav_symptoms: "症状",
    nav_nutrition: "营养",
    nav_fitness: "健身",
    nav_favorites: "收藏",
    symptoms_title: "症状分析",
    symptoms_placeholder: "写下你的症状...",
    nutrition_title: "营养计划",
    nutrition_placeholder: "写下你的目标...",
    fitness_title: "健身计划",
    fitness_placeholder: "写下你的目标...",
    analyze_btn: "分析",
    generate_btn: "生成计划",
    save_btn: "保存到收藏",
    favorites_title: "收藏"
  }
};

function translatePage(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key];
  });
}

document.querySelectorAll("#langSelect").forEach(select => {
  select.addEventListener("change", (e) => translatePage(e.target.value));
});

// ====== THEME SWITCH ======
const themeBtn = document.getElementById("themeBtn");
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ====== LOGIN ======
const loginBtn = document.getElementById("loginBtn");
loginBtn?.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(res => alert("Logged in as " + res.user.displayName))
    .catch(err => alert(err.message));
});

// ====== AI FUNCTION ======
async function generateAI(prompt) {
  const apiKey = "YOUR_OPENAI_API_KEY";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: prompt}]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

// ====== ANALYZE SYMPTOMS ======
const analyzeBtn = document.getElementById("analyzeBtn");
analyzeBtn?.addEventListener("click", async () => {
  const input = document.getElementById("symptomsInput").value;
  const result = document.getElementById("result");
  result.innerText = "Loading...";
  const ai = await generateAI("Analyze symptoms: " + input);
  result.innerText = ai;
});

// ====== ANALYZE NUTRITION ======
const analyzeNutrition = document.getElementById("analyzeNutrition");
analyzeNutrition?.addEventListener("click", async () => {
  const input = document.getElementById("nutritionInput").value;
  const result = document.getElementById("nutritionResult");
  result.innerText = "Loading...";
  const ai = await generateAI("Create nutrition plan: " + input);
  result.innerText = ai;
});

// ====== ANALYZE FITNESS ======
const analyzeFitness = document.getElementById("analyzeFitness");
analyzeFitness?.addEventListener("click", async () => {
  const input = document.getElementById("fitnessInput").value;
  const result = document.getElementById("fitnessResult");
  result.innerText = "Loading...";
  const ai = await generateAI("Create fitness plan: " + input);
  result.innerText = ai;
});

// ====== SAVE FAVORITE ======
function saveFavorite(type, content){
  if(!auth.currentUser) return alert("Login first to save favorites.");
  db.collection("favorites").add({
    uid: auth.currentUser.uid,
    type,
    content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(()=>alert("Saved to favorites"));
}

document.getElementById("saveFavorite")?.addEventListener("click", () => {
  const content = document.getElementById("result").innerText;
  saveFavorite("Symptoms", content);
});

document.getElementById("saveFavoriteNutrition")?.addEventListener("click", () => {
  const content = document.getElementById("nutritionResult").innerText;
  saveFavorite("Nutrition", content);
});

document.getElementById("saveFavoriteFitness")?.addEventListener("click", () => {
  const content = document.getElementById("fitnessResult").innerText;
  saveFavorite("Fitness", content);
});

// ====== LOAD FAVORITES ======
async function loadFavorites(){
  if(!auth.currentUser) return alert("Login first to see favorites.");
  const list = document.getElementById("favoritesList");
  list.innerHTML = "Loading...";

  const snapshot = await db.collection("favorites")
    .where("uid", "==", auth.currentUser.uid)
    .orderBy("createdAt", "desc")
    .get();

  list.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement("div");
    div.classList.add("result");
    div.innerHTML = `
      <h3>${data.type}</h3>
      <p>${data.content}</p>
      <button onclick="deleteFav('${doc.id}')">Delete</button>
    `;
    list.appendChild(div);
  });
}

window.loadFavorites = loadFavorites;

function deleteFav(id){
  db.collection("favorites").doc(id).delete();
  loadFavorites();
}

if(window.location.pathname.includes("favorites.html")){
  auth.onAuthStateChanged(user => {
    if(user) loadFavorites();
  });
}
