const bar = document.querySelector("#bar");
const links = document.querySelector(".links");
// bar.addEventListener("click", () => {
//   if (links.style.display === "none") {
//     links.style.display = "block";
//   } else {
//     links.style.display = "none";
//   }
// });

bar.addEventListener("click", () => {
  links.classList.toggle("show-bar");
});
