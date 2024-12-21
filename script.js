function saySorry() {
    // Mengambil elemen yang menampilkan respons
    const responseElement = document.getElementById("response");

    // Mengubah teks respons dan menampilkannya
    responseElement.textContent = "terimaksih sudahh memafkan jangan badmood mulu dong 😹😁";
    responseElement.style.display = "block";

    // Menambahkan efek animasi pada teks respons
    responseElement.classList.add("show");

    // Mengubah teks tombol menjadi "wihh terimakasih sudah memaafkan"
    const button = document.querySelector(".btn");
    button.textContent = "terimakasih";
}
