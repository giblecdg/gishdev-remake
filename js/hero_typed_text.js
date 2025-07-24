document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById(
    "hero__content--textbox-typed-text"
  );
  const text = "Web Development";
  const typingSpeed = 100;
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    }
  }

  type();
});
