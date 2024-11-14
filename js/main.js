let textoclick = document.querySelectorAll(".definition");
textoclick.forEach((imagen) => {
	imagen.addEventListener('click', () => {
		const textoartista = imagen.querySelector(".artist-text");
		textoartista.style.opacity = "1";
	})
})