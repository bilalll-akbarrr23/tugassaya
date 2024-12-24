// Mendapatkan elemen-elemen yang diperlukan
const modal = document.getElementById("registration-modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal");
const registrationForm = document.getElementById("registration-form");

// Menangani pembukaan modal
openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden"); // Menampilkan modal
});

// Menangani penutupan modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden"); // Menyembunyikan modal
});

// Menangani pengiriman form pendaftaran
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;

    // Menambahkan logika untuk menyimpan data (di server atau local storage)
    console.log("Nama:", name);
    console.log("Alamat:", address);

    // Menutup modal setelah pendaftaran
    modal.classList.add("hidden");

    // Mengosongkan form
    registrationForm.reset();
});
