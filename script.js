document.querySelectorAll(".fav").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      btn.textContent = btn.classList.contains("active") ? "♥" : "♡";
    });
  });
  document.querySelectorAll(".wish").forEach(b => {
    b.addEventListener("click", () => {
      b.textContent = b.textContent === "♡" ? "♥" : "♡";
    });
  });
    /* ==========================
   SIDEBAR DROPDOWN FUNCTION
========================== */

const allFilters = document.querySelectorAll(".collapsible");

allFilters.forEach(section => {
    const header = section.querySelector(".filter-header");

    header.addEventListener("click", function () {
        section.classList.toggle("closed");
    });
});
