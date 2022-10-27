// console.log("hi");

const navList = document.querySelector(".header__list");
const menuToggle = document.querySelector(".header--menu-icon");

menuToggle.addEventListener("click", () => {
  let visibility = navList.getAttribute("data-visible");

//   console.log(visibility);

  visibility == 'false'
    ? navList.setAttribute("data-visible", true)
    : navList.setAttribute("data-visible", false);
});
