
 // Dropdown toggle
const dropdowns = document.querySelectorAll(".dropdown-btn");
dropdowns.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// Captura o parâmetro "senha" da URL
const params = new URLSearchParams(window.location.search);
const senhaDigitada = params.get('senha');

fetch('../imagem.txt')
    .then(response => response.text())
    .then(senhaArquivo => {
        const senhaCorreta = senhaArquivo.trim();
        if (senhaDigitada !== senhaCorreta) {
            window.location.href = '../index.html';
        }
    })
    .catch(error => {
        console.error('Erro ao carregar senha:', error);
    });
