
// ===================================
// HOSPITAL LUMINIS
// FUNCIONALIDADES DO SITE
// ===================================

console.log("Hospital Luminis iniciado!");

// MENU DE NAVEGAÇÃO

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const menuAberto = navigation.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );

        menuToggle.innerHTML = menuAberto ? "✕" : "☰";

    });

    // Fechar menu ao clicar em um link

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML = "☰";

        });

    });

}

// ANO AUTOMÁTICO NO RODAPÉ

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
