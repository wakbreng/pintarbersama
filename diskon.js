document.getElementById("kode-kupon").addEventListener("input", function() {
    const kode = this.value.toLowerCase();
    const hargaAsli = 50000;
    let diskon = 0;

    if (kode === "diskon10") {
        diskon = 0.1 * hargaAsli;
    } else if (kode === "diskon20") {
        diskon = 0.2 * hargaAsli;
    }

    document.getElementById("diskon").textContent = `Rp. ${diskon}`;
    document.getElementById("harga").textContent = `Rp. ${hargaAsli - diskon}`;
});
