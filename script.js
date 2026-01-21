const messages = {
  en: [
    "Start your day with a smile — everything becomes easier.",
    "Don’t wait for opportunity, create it.",
    "Every small step brings you closer to your goal.",
    "You are stronger than you think, just keep going.",
    "Make today better than yesterday, even by 1%.",
    "Failure is not the end, it's a new beginning.",
    "Focus on what you can change and leave the rest.",
    "Success needs patience, not time — just consistency.",
    "Daily effort is the secret to progress.",
    "You deserve the best, so work on yourself."
  ],
  ar: [
    "ابدأ يومك بابتسامة واحدة، وستجد أن كل شيء يصبح أسهل.",
    "لا تنتظر الفرصة، اصنعها.",
    "كل خطوة صغيرة تقربك من هدفك.",
    "أنت أقوى مما تظن، فقط استمر.",
    "اجعل اليوم أفضل من الأمس، ولو بنسبة 1%.",
    "الفشل ليس النهاية، بل بداية جديدة.",
    "ركز على ما تستطيع تغييره، واترك الباقي.",
    "النجاح يحتاج صبر، ليس وقت طويل بل استمرارية.",
    "العمل اليومي هو سر التقدم.",
    "أنت تستحق الأفضل، فاعمل على نفسك."
  ],
  zh: [
    "以微笑开始你的一天——一切都会变得更容易。",
    "不要等待机会，创造机会。",
    "每一个小步骤都能让你更接近目标。",
    "你比自己想象的更强大，坚持下去。",
    "让今天比昨天更好，即使只有1%。",
    "失败不是结束，而是新的开始。",
    "专注于你能改变的，放下无法改变的。",
    "成功需要耐心，不是时间，而是持续性。",
    "每天的努力是进步的秘诀。",
    "你值得拥有最好的，所以提升自己。"
  ]
};

let currentLang = "ar";
let currentIndex = -1;

function getRandomIndex(lang) {
  const len = messages[lang].length;
  let rand = Math.floor(Math.random() * len);

  // لو نفس الرسالة السابقة، اختار غيرها
  while (rand === currentIndex && len > 1) {
    rand = Math.floor(Math.random() * len);
  }
  return rand;
}

function setLang(lang){
  currentLang = lang;
  currentIndex = -1;
  document.getElementById("message").innerText = "اضغط على “أطلع رسالة اليوم” لتحصل على رسالة جديدة.";
}

function newMessage(){
  currentIndex = getRandomIndex(currentLang);
  document.getElementById("message").innerText = messages[currentLang][currentIndex];
}

function nextMessage(){
  currentIndex = getRandomIndex(currentLang);
  document.getElementById("message").innerText = messages[currentLang][currentIndex];
}

function copyMessage(){
  const msg = document.getElementById("message").innerText;
  navigator.clipboard.writeText(msg);
  alert("تم النسخ ✅");
}
