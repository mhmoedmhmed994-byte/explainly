/* 🌙 الوضع */
function toggleMode(){
  document.body.classList.toggle("dark");
}

/* 🌍 اللغات */
const translations = {
  ar:{
    home:"الرئيسية",
    symptoms:"الأعراض",
    nutrition:"التغذية",
    fitness:"اللياقة",
    title:"PulseAI – مساعد الصحة الذكي",
    sub:"منصة تحليل صحي بالذكاء الاصطناعي"
  },
  en:{
    home:"Home",
    symptoms:"Symptoms",
    nutrition:"Nutrition",
    fitness:"Fitness",
    title:"PulseAI – Smart Health Assistant",
    sub:"AI-powered health analysis platform"
  }
};

function setLang(lang){
  localStorage.setItem("lang",lang);
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText = translations[lang][el.dataset.key];
  });
}

window.onload = ()=>{
  setLang(localStorage.getItem("lang") || "ar");
  loadFavorites();
};

/* ⭐ المفضلة */
function addToFavorites(title,content){
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs.push({title,content,date:new Date().toLocaleString()});
  localStorage.setItem("favorites",JSON.stringify(favs));
  alert("تم الحفظ ⭐");
}

function loadFavorites(){
  let box = document.getElementById("favBox");
  if(!box) return;
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  box.innerHTML="";
  favs.forEach((f,i)=>{
    box.innerHTML+=`
      <div class="card">
        <h3>${f.title}</h3>
        <p>${f.content}</p>
        <small>${f.date}</small><br>
        <button onclick="removeFav(${i})">❌ حذف</button>
      </div>`;
  });
}

function removeFav(i){
  let favs = JSON.parse(localStorage.getItem("favorites"));
  favs.splice(i,1);
  localStorage.setItem("favorites",JSON.stringify(favs));
  loadFavorites();
}
