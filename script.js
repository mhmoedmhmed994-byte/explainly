const texts = {
  en:{
    home:"Home",sym:"Symptoms",nut:"Nutrition",fit:"Fitness",
    title:"PulseAI – Smart Health Assistant",
    desc:"AI health analysis platform",
    symTitle:"Symptoms Analysis",
    nutTitle:"Nutrition Plan",
    fitTitle:"Fitness Plan"
  },
  ar:{
    home:"الرئيسية",sym:"الأعراض",nut:"التغذية",fit:"اللياقة",
    title:"PulseAI – مساعد الصحة الذكي",
    desc:"منصة تحليل صحي بالذكاء الاصطناعي",
    symTitle:"تحليل الأعراض",
    nutTitle:"خطة التغذية",
    fitTitle:"خطة اللياقة"
  },
  zh:{
    home:"主页",sym:"症状",nut:"营养",fit:"健身",
    title:"PulseAI – 智能健康助手",
    desc:"人工智能健康分析平台",
    symTitle:"症状分析",
    nutTitle:"营养计划",
    fitTitle:"健身计划"
  }
};

function applyLang(l){
  if(document.getElementById("navHome")){
    navHome.innerText=texts[l].home;
    navSymptoms.innerText=texts[l].sym;
    navNutrition.innerText=texts[l].nut;
    navFitness.innerText=texts[l].fit;
  }
  if(title) title.innerText=texts[l].title;
  if(description) description.innerText=texts[l].desc;
  if(symTitle) symTitle.innerText=texts[l].symTitle;
  if(nutTitle) nutTitle.innerText=texts[l].nutTitle;
  if(fitTitle) fitTitle.innerText=texts[l].fitTitle;
}

if(languageSelect){
  languageSelect.onchange=e=>applyLang(e.target.value);
  applyLang("en");
}

function analyze(){
  document.getElementById("result").innerText =
  "AI Result will appear here (connected later)";
}

themeToggle.onclick=()=>{
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
};
