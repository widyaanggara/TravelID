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


// Page Destination 1 dan 2
const btnPage1 = document.querySelector("#dest-btn:first-child");
const btnPage2 = document.querySelector("#dest-btn:last-child");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

btnPage1.addEventListener("click", () => {
    page1.classList.remove("hidden");
    page2.classList.add("hidden");
    btnPage1.classList.add("active");
    btnPage2.classList.remove("active");
});

btnPage2.addEventListener("click", () => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    btnPage1.classList.remove("active");
    btnPage2.classList.add("active");
});
