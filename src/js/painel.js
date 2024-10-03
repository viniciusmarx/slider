const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
const slides = document.querySelectorAll(".slide");
let imagemAtual = 0;

setaAvancar.addEventListener("click", () => {
	if (imagemAtual === slides.length - 1) {
		return;
	}

	esconderImagem(imagemAtual);
	imagemAtual++;

	mostrarImagem(imagemAtual);
	controlarSetas(imagemAtual);
});

setaVoltar.addEventListener("click", () => {
	if (imagemAtual === 0) {
		return;
	}

	esconderImagem(imagemAtual);
	imagemAtual--;

	mostrarImagem(imagemAtual);
	controlarSetas(imagemAtual);
});

function esconderImagem(imagemAtual) {
	slides[imagemAtual].classList.remove("mostrar");
}

function mostrarImagem(imagemAtual) {
	slides[imagemAtual].classList.add("mostrar");
}

function controlarSetas(indice) {
	console.log(indice);
	if (indice > 0) {
		setaVoltar.classList.remove("opacidade");
		if (indice === slides.length - 1) {
			setaAvancar.classList.add("opacidade");
		} else {
			setaAvancar.classList.remove("opacidade");
		}
	} else {
		setaVoltar.classList.add("opacidade");
	}
}
