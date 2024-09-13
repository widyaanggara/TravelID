window.onload = function() {
    // Menu Toggle
    let menuList = document.getElementById("menuList");
    let hamburger = document.getElementById("hamburger");

    menuList.style.maxHeight = "0px";

    function toggleMenu() {
        if (menuList.style.maxHeight === "0px") {
            menuList.style.maxHeight = "300px";
        } else {
            menuList.style.maxHeight = "0px";
        }

        // Tambahkan atau hapus kelas hamburger-active untuk animasi
        hamburger.classList.toggle("hamburger-active");
    }

    hamburger.onclick = toggleMenu;

    // Total Payment
    const pricePerTicket = 100000;

    const jumlahInput = document.getElementById('jumlah').querySelector('input');
    const totalTicket = document.getElementById('total-ticket');
    const totalBayar = document.getElementById('total-bayar');
    const nilaiTotal = document.getElementById('nilai-total');

    function updateTotal() {
        const jumlah = parseInt(jumlahInput.value) || 1; 
        const total = pricePerTicket * jumlah;

        totalTicket.textContent = jumlah;
        totalBayar.textContent = `Rp ${total.toLocaleString('id-ID')},00`;

        nilaiTotal.textContent = totalBayar.textContent;
    }

    jumlahInput.addEventListener('input', updateTotal);

    updateTotal();
};
