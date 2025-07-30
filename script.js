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