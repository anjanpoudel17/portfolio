document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer dynamically
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Interactive contact button response
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("Thank you for reaching out! You can reach me in Bharatpur 9, Chitwan.");
    });
  }
});