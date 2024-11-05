const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Fungsi untuk membuka dan menutup menu navigasi
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll Reveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

// JavaScript untuk Modal Sign In
const openModalBtn = document.getElementById("open-modal-btn"); // Tombol Sign In
const modal = document.getElementById("signInModal"); // Modal untuk Sign In
const closeModalBtn = document.getElementsByClassName("close")[0]; // Tombol tutup modal

// Buka modal ketika tombol Sign In diklik
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block"; // Menampilkan modal
});

// Tutup modal ketika tombol 'x' diklik
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Menyembunyikan modal
});

// Tutup modal ketika area luar modal diklik
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Menyembunyikan modal
  }
});

// Ambil elemen tombol dan deskripsi
const destinationBtn = document.getElementById("destination-btn");
const destinationDescription = document.querySelector(".destination-description");

// Tambahkan event listener untuk tombol Destination
destinationBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah default action dari anchor link
    // Toggle tampilan deskripsi
    if (destinationDescription.style.display === "none") {
        destinationDescription.style.display = "block"; // Tampilkan deskripsi
    } else {
        destinationDescription.style.display = "none"; // Sembunyikan deskripsi
    }
});

// JavaScript untuk menampilkan atau menyembunyikan deskripsi package
const packageLink = document.getElementById("package-link"); // Menyasar elemen Package
const packageDescription = document.querySelector(".package-description"); // Menyasar deskripsi paket

// Event listener untuk toggle deskripsi package
packageLink.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah perilaku default anchor
    const isDisplayed = packageDescription.style.display === "block"; // Cek apakah deskripsi ditampilkan
    packageDescription.style.display = isDisplayed ? "none" : "block"; // Toggle tampilan deskripsi
});

// JavaScript untuk menampilkan deskripsi blog
const blogLink = document.getElementById("blog-link"); // Menggunakan ID
const blogDescription = document.querySelector(".blog-description");

// Event listener untuk menampilkan deskripsi blog
blogLink.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah aksi default link
    const isVisible = blogDescription.style.display === "block"; // Cek apakah sudah terlihat
    blogDescription.style.display = isVisible ? "none" : "block"; // Toggle visibility
});


