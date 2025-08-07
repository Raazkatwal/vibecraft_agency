fetch('./components/navbar.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;
    });

fetch('./components/footer.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
        document.getElementById('date').textContent = new Date().getFullYear();
    });

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});