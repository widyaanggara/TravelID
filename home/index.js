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
