document.addEventListener("DOMContentLoaded", () => {
  const terminalContent = document.getElementById(
    "about__terminal--box-content"
  );
  if (!terminalContent) {
    return;
  }

  const content = `
  $ cat gishdev.txt
  
  
  
  .d88b  w      8     888b.              
  8P www w d88b 8d8b. 8   8 .d88b Yb  dP 
  8b  d8 8 *Yb. 8P Y8 8   8 8.dP'  YbdP  
  *Y88P' 8 Y88P 8   8 888P' *Y88P   YP
  
  
          ---=== Kim jesteśmy? ===---
  
  1) Projektujemy nowoczesne i responsywne strony internetowe.
  
  2) Wdrażamy świeże rozwiązania, które wyróżniają Twoją witrynę.
  
  3) Optymalizujemy strony pod kątem szybkości i wydajności.
  
  4) Gwarantujemy szybki i stabilny hosting dla Twojej strony.
  
  5) Zapewniamy pełne wsparcie techniczne i administracyjne.
  
  6) Tworzymy przyjazne interfejsy dla użytkowników.
  
  7) Integrujemy nowoczesne technologie z Twoją stroną.`;

  let localIndex = 0;
  let isTypingIntro = true;

  function texttype() {
    document.querySelector(".about__terminal--box-content").style.marginLeft =
      "1rem";
    if (isTypingIntro) {
      if (localIndex < 20) {
        terminalContent.innerHTML +=
          content[localIndex] === "\n" ? "<br>" : content[localIndex];
        localIndex++;
        setTimeout(texttype, 50);
      } else {
        isTypingIntro = false;
        setTimeout(() => {
          document.querySelector(
            ".about__terminal--box-content"
          ).style.whiteSpace = "pre-wrap";
          document.querySelector(
            ".about__terminal--box-content"
          ).style.marginLeft = "0px";
          terminalContent.innerHTML = content;
        }, 500);
      }
    }
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          texttype();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const terminalSection = document.querySelector(".about__terminal");
  if (terminalSection) {
    observer.observe(terminalSection);
  }
});
