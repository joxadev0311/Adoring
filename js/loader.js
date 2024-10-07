document.addEventListener("DOMContentLoaded", function () {
    let hiddenSections = document.querySelectorAll(".hidden-section");
  
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });
  
    hiddenSections.forEach(function (section) {
      observer.observe(section);
    });
  });