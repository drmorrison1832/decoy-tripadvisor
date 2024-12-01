document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", (event) => {
    if (window.scrollY > 0) {
      document.querySelector("header").classList.add("border-down");
    }

    if (window.scrollY === 0) {
      console.log(window.scrollY);
      document.querySelector("header").classList.remove("border-down");
    }
  });
});
