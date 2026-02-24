export default function setupActualLogger() {
  const allLoggableSections = document.querySelectorAll("section");
  
  
  allLoggableSections.forEach((section) => {
    section.addEventListener("click", (event) => {
      const date = new Date().toLocaleTimeString()
      const btn = event.target.closest("button");
      if (btn) {
        console.log(
          `[${date}] Action detected in ${section.className}: ${btn.innerText}`,
        );
      }
      btn.disabled = true;
      setTimeout(() => {}, 2000);
      btn.disabled = false;
    });
  });
}
