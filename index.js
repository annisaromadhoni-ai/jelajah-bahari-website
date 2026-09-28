function tampilkanInfo(nama) {

    document.getElementById("judulModal").innerText = nama;

    document.getElementById("isiModal").innerText =
        "Selamat datang di " +
        nama +
        "! Mari jelajahi keindahan baharinya.";

    const modalElement =
        document.getElementById("modalInfo");

    const modal =
        new bootstrap.Modal(modalElement);

    modal.show();

}