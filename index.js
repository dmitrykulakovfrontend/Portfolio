const menuButton = document.querySelector(".menu-button");
const pageStickyContainer = document.querySelector(".sticky-container");

menuButton.addEventListener("click", () => {
  pageStickyContainer.classList.toggle("active");
});
