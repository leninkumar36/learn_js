const panelEl = document.querySelectorAll(".panel");

// console.log(panelEl[0]);
panelEl.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panelEl.forEach((panel) => {
    panel.classList.remove("active");
  });
}
