const container = document.querySelector(".container");
const leftSide = document.getElementById("left");
const rightSide = document.getElementById("right");

leftSide.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
leftSide.addEventListener("mouseleave", () =>
  container.classList.remove("hover-over")
);

rightSide.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
rightSide.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

leftSide.style.transition = "all 1s ease-in-out";
rightSide.style.transition = "all 1s ease-in-out";
