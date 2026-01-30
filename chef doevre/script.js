const outils = document.querySelectorAll(".outil");

outils.forEach(outil => {
    outil.addEventListener("click", () => {

        // animation au clic
        outil.style.transform = "scale(1.5)";
        setTimeout(() => {
            outil.style.transform = "scale(1)";
        }, 200);

        // redirection vers la page descriptions
        const page = outil.dataset.page;
        setTimeout(() => {
            window.location.href = page;
        }, 300);
    });
});
