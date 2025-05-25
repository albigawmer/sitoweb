// Scroll reveal effect
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("reveal", entry.isIntersecting);
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => {
      card.classList.add("hidden");
      observer.observe(card);
    });
  });
  