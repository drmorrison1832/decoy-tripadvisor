document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      const response = await axios.post("http://localhost:3000/form", data);
      console.log(response);
    });
});
