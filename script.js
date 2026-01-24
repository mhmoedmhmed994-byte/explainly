const texts = {
  ar:{
    home:"الرئيسية",
    symptoms:"الأعراض",
    nutrition:"التغذية",
    fitness:"اللياقة",
    title:"PulseAI – مساعد الصحة الذكي",
    desc:"منصة تحليل صحي بالذكاء الاصطناعي",
    contact:"تواصل معنا"
  },
  en:{
    home:"Home",
    symptoms:"Symptoms",
    nutrition:"Nutrition",
    fitness:"Fitness",
    title:"PulseAI – Smart Health Assistant",
    desc:"AI-powered health analysis platform",
    contact:"Contact Us"
  },
  zh:{
    home:"主页",
    symptoms:"症状",
    nutrition:"营养",
    fitness:"健身",
    title:"PulseAI – 智能健康助手",
    desc:"人工智能健康分析平台",
    contact:"联系我们"
  }
};

function setLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText = texts[lang][el.dataset.key];
  });
}

function toggleDark(){
  document.body.classList.toggle("dark");
}
