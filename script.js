// Sidebar active state
const items = document.querySelectorAll(".sidebar li");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
let sec = 56, min = 34, hour = 13, day = 4;

setInterval(() => {
  sec--;
  if (sec < 0) { sec = 59; min--; }
  if (min < 0) { min = 59; hour--; }
  if (hour < 0) { hour = 23; day--; }

  document.getElementById("s").innerText = sec;
  document.getElementById("m").innerText = min;
  document.getElementById("h").innerText = hour;
  document.getElementById("d").innerText = day;
}, 1000);
function sendInquiry() {
    const item = document.getElementById("item").value;
    const qty = document.getElementById("qty").value;
    const unit = document.getElementById("unit").value;
  
    if (!item || !qty) {
      alert("Please fill required fields");
      return;
    }
  
    alert(
      "Inquiry sent!\n\n" +
      "Item: " + item +
      "\nQuantity: " + qty + " " + unit
    );
  }
// Slight lift effect on hover
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "translateY(0)";
  });
});
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "translateY(-6px)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "translateY(0)";
  });
});
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "translateY(-5px)";
    card.style.transition = "0.3s";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "translateY(0)";
  });
});
  