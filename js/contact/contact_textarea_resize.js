document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("msg");
  if (textarea) {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  }
});
