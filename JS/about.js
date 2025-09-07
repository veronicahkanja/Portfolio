
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "tomato";
    link.style.transform = "scale(1.1)";
    link.style.transition = "0.3s ease"; 
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "";
    link.style.transform = "scale(1)";
  });
});
