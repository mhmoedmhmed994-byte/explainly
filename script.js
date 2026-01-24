const langBtn = document.getElementById("langBtn");
const themeBtn = document.getElementById("themeBtn");

langBtn.addEventListener("click", () => {
  if (langBtn.textContent === "AR") {
    langBtn.textContent = "EN";
    document.querySelector("header nav a:nth-child(1)").textContent = "Home";
    document.querySelector("header nav a:nth-child(2)").textContent = "Symptoms";
    document.querySelector("header nav a:nth-child(3)").textContent = "Nutrition";
    document.querySelector("header nav a:nth-child(4)").textContent = "Fitness";
    document.querySelector("header nav a:nth-child(5)").textContent = "Favorites";
  } else {
    langBtn.textContent = "AR";
    document.querySelector("header nav a:nth-child(1)").textContent = "الرئيسية";
    document.querySelector("header nav a:nth-child(2)").textContent = "الأعراض";
    document.querySelector("header nav a:nth-child(3)").textContent = "التغذية";
    document.querySelector("header nav a:nth-child(4)").textContent = "اللياقة";
    document.querySelector("header nav a:nth-child(5)").textContent = "المفضلة";
  }
});

themeBtn.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    themeBtn.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeBtn.textContent = "☀️";
  }
});
