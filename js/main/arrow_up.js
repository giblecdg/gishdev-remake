const header = document.getElementById("header");
const arrow = document.getElementById("arrow_up");

if (window.innerWidth < 640) {
  arrow.style.display = "inline";
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        arrow.style.right = "-90px";
      } else {
        arrow.style.right = "10px";
      }
    });
  });

  observer.observe(header);
}
