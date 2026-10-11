document.addEventListener("DOMContentLoaded", function () {
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(function (link) {
const linkPage = link.getAttribute("href");

if (linkPage === currentPage) {
  link.classList.add("active");
}

});

console.log("Mohajanani's portfolio is ready!");
});