let mood = "happy";
let lang = "en";
let lastFix = "";

const fixes = {
  en: {
    happy: [
      "Do a 30-second stretch. Then smile and breathe.",
      "Send a message to someone you care about.",
      "Play a song that makes you happy."
    ],
    sad: [
      "Take 3 deep breaths. Then write one thing you're grateful for.",
      "Stand up and walk for 60 seconds.",
      "Watch a short funny clip."
    ],
    angry: [
      "Count to 10 slowly. Then take 3 deep breaths.",
      "Write down what’s bothering you and rip the paper.",
      "Listen to calm music for 1 minute."
    ],
    stressed: [
      "Close your eyes. Inhale 4 seconds, exhale 6 seconds for 30 seconds.",
      "Drink a glass of water slowly.",
      "Write 1 thing you can control today."
    ],
    bored: [
      "Do a 30-second challenge: push-ups or jumping jacks.",
      "Open a new tab and search for something you love.",
      "Try a new idea for 1 minute."
    ]
  },
  ar: {
    happy: [
      "اعمل تمدد 30 ثانية. ثم ابتسم وخد نفس عميق.",
      "ابعت رسالة لشخص تحبه.",
      "شغل أغنية تفرحك."
    ],
    sad: [
      "خد 3 نفسات عميقة. ثم اكتب شيء واحد ممتن له.",
      "قوم امشي 60 ثانية.",
      "شاهد مقطع مضحك قصير."
    ],
    angry: [
      "عد لحد 10 ببطء. ثم خد 3 نفسات عميقة.",
      "اكتب اللي مضايقك وامزق الورقة.",
      "اسمع موسيقى هادية دقيقة."
    ],
    stressed: [
      "اقفل عينك. شهيق 4 ثواني، زفير 6 ثواني لمدة 30 ثانية.",
      "اشرب كوب مية ببطء.",
      "اكتب شيء واحد تقدر تتحكم فيه اليوم."
    ],
    bored: [
      "اعمل تحدي 30 ثانية: ضغط أو نط.",
      "افتح تبويب جديد وابحث عن شيء تحبه.",
      "جرب فكرة جديدة لمدة دقيقة."
    ]
  },
  zh: {
    happy: [
      "伸展 30 秒。然后微笑并深呼吸。",
      "给你在乎的人发一条消息。",
      "播放一首让你开心的歌。"
    ],
    sad: [
      "深呼吸 3 次。然后写下你感激的一件事。",
      "站起来走 60 秒。",
      "看一个短的搞笑视频。"
    ],
    angry: [
      "慢慢数到 10。然后深呼吸 3 次。",
      "写下让你生气的事，然后撕掉纸。",
      "听 1 分钟的平静音乐。"
    ],
    stressed: [
      "闭眼。吸气 4 秒，呼气 6 秒，持续 30 秒。",
      "慢慢喝一杯水。",
      "写下今天你能控制的一件事。"
    ],
    bored: [
      "做 30 秒挑战：俯卧撑或跳跃。",
      "打开新标签页，搜索你喜欢的东西。",
      "尝试一个新想法 1 分钟。"
    ]
  }
};

function setMood(m) {
  mood = m;
  document.getElementById("resultText").innerText = "—";
}

function setLang(l) {
  lang = l;
  document.getElementById("title").innerText = l === "en" ? "MoodFixer" : l === "ar" ? "مصحح المزاج" : "心情修复";
  document.getElementById("desc").innerText = l === "en" ? "Fix your mood in 60 seconds." : l === "ar" ? "حسّن مزاجك في 60 ثانية." : "在 60 秒内改善你的心情。";
}

function fixMood() {
  const list = fixes[lang][mood];
  const choice = list[Math.floor(Math.random() * list.length)];
  lastFix = choice;
  document.getElementById("resultText").innerText = choice;
}

function nextFix() {
  fixMood();
}

function copyAll() {
  navigator.clipboard.writeText(lastFix).then(() => {
    alert("Copied!");
  });
}
