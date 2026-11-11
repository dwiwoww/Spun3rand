const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

const phone = "6281316705180";
function whatsappLink(product) {
  const message = product
    ? `Halo SpunBrand, saya tertarik memesan ${product}. Boleh minta informasi harga dan detailnya?`
    : "Halo SpunBrand, saya ingin konsultasi pemesanan goodiebag custom.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
document.getElementById("waMain").href = whatsappLink("");
document.querySelectorAll(".order-link").forEach(link => {
  link.href = whatsappLink(link.dataset.product);
  link.target = "_blank";
  link.rel = "noopener";
});

// Smooth anchor navigation for browsers with reduced-motion support.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
