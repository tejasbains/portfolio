// Modal logic
function openProject(id) {
  document.getElementById(id).classList.add("active");
}

function closeProject() {
  document.querySelectorAll(".modal").forEach(m =>
    m.classList.remove("active")
  );
}

window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProject();
});

// Webnovel scraper demo
function submitScraper() {
  const data = {
    mainUrl: document.getElementById("mainUrl").value,
    fileName: document.getElementById("fileName").value,
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    translate: document.getElementById("translate").checked,
    chapters: document.getElementById("chapters").value
  };

  console.log("Submit data to backend:", data);
  alert("This would be sent to your Python backend for processing.");
}

// Menu hover with delay
const menu = document.getElementById("menu");
const dropdown = menu.querySelector(".menu-dropdown");

let closeTimer = null;

function openMenu() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
  menu.classList.add("hover-active");
}

function closeMenu() {
  closeTimer = setTimeout(() => {
    menu.classList.remove("hover-active");
  }, 200); // 2 second delay
}

menu.addEventListener("mouseenter", openMenu);
menu.addEventListener("mouseleave", closeMenu);
dropdown.addEventListener("mouseenter", openMenu);
dropdown.addEventListener("mouseleave", closeMenu);
