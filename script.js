const messages = [
  "Your future depends on what you do today.",
  "Small progress every day beats motivation.",
  "Discipline creates freedom.",
  "You don’t need more time. You need focus.",
  "What you repeat, you become.",
  "Most people quit one step before success.",
  "Comfort is expensive. Growth is priceless.",
  "Your habits decide your income.",
  "Silence, focus, execution.",
  "Build quietly. Let results speak."
];

const today = new Date();
const dayIndex = Math.floor(
  (today - new Date("2024-01-01")) / (1000 * 60 * 60 * 24)
);

const message = messages[dayIndex % messages.length];
document.getElementById("message").innerText = message;

function copyMessage() {
  navigator.clipboard.writeText(message);
  alert("Copied 🔥");
}
