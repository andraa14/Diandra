// Menambahkan Animasi pada Scroll
const sections = document.querySelectorAll('.section');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    scrollObserver.observe(section);
});
// Responsif Menu Toggle
const menuToggle = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// FAQ Interactions
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.transition = "max-height 0.3s ease-out";
        answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    });
});

// Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Semua kolom harus diisi!");
        event.preventDefault();
    }
});

// Fungsi untuk Mencari dalam Tabel
function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("programTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td");
        let found = false;
        
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                const textValue = td[j].textContent || td[j].innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }
        
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}