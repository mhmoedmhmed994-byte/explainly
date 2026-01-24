/* ===== LANGUAGES ===== */
const translations = {
  ar:{
    home:"الرئيسية",
    symptoms:"الأعراض",
    nutrition:"التغذية",
    fitness:"اللياقة",
    favorites:"المفضلة",
    title:"PulseAI – مساعد الصحة الذكي",
    desc:"منصة تحليل صحي بالذكاء الاصطناعي",
    contact:"تواصل معنا"
  },
  en:{
    home:"Home",
    symptoms:"Symptoms",
    nutrition:"Nutrition",
    fitness:"Fitness",
    favorites:"Favorites",
    title:"PulseAI – Smart Health Assistant",
    desc:"AI-powered health analysis platform",
    contact:"Contact Us"
  },
  zh:{
    home:"主页",
    symptoms:"症状",
    nutrition:"营养",
    fitness:"健身",
    favorites:"收藏",
    title:"PulseAI – 智能健康助手",
    desc:"人工智能健康分析平台",
    contact:"联系我们"
  }
};

function setLang(lang){
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText = translations[lang][el.dataset.key];
  });
}

/* ===== DARK MODE ===== */
function toggleMode(){
  document.body.classList.toggle("dark");
}

/* ===== FAVORITES ===== */
function addToFavorites(title, content){
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs.push({title, content, date: new Date().toLocaleString()});
  localStorage.setItem("favorites", JSON.stringify(favs));
  alert("تم الحفظ ⭐");
}

function loadFavorites(){
  let box = document.getElementById("favBox");
  if(!box) return;
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  box.innerHTML = "";
  favs.forEach((f,i)=>{
    box.innerHTML += `
      <div class="card">
        <h3>${f.title}</h3>
        <p>${f.content}</p>
        <small>${f.date}</small><br>
        <button class="primary" onclick="removeFav(${i})">❌ حذف</button>
      </div>
    `;
  });
}

function removeFav(i){
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs.splice(i,1);
  localStorage.setItem("favorites", JSON.stringify(favs));
  loadFavorites();
}

/* ===== ON LOAD ===== */
window.onload = () => {
  setLang(localStorage.getItem("lang") || "en");
  loadFavorites();
};
