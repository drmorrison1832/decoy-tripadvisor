document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ConnectionButton").addEventListener("click", () => {
    document.getElementById("modalContactForm").classList.remove("hidden");
  });

  document
    .getElementById("closeModalContactForm")
    .addEventListener("click", () => {
      document.getElementById("modalContactForm").classList.add("hidden");
    });
});
