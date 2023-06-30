window.onload = function(e){ 
    Swal.fire({
		title: '<span style="font-size: 2rem;font-family: ShantellSans;">Esta página web usa cookies</span>',
		html: '<p style="font-family: NotoSans;font-size: 1rem;">Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico.</p>',
		icon: "info",
		confirmButtonText: "Confirmar",  
		footer:'<span style="color: red;font-size: 15px;font-family: ShantellSans;">Esta información es importante</span>', 
		width: "800px",
		padding: "4rem", 
		grow: "row",
		backdrop: true,
		toast: true,
		position: "bottom-start",
		showConfirmButton: true,
		confirmButtonColor: "blue",

	customClass: {
	title: "titulo-alerta",
	confirmButton: "botonconfirmar_alerta",
	}	
	});
}
//mover el documento y animar el menu modo responsivo//
let body = document.querySelector("body");
let nav = document.querySelector("nav");

let animarmover = document.getElementById("open-menu");
animarmover.onclick = function() {
     body.classList.toggle("body-move");
	 nav.classList.toggle("animar");
}
/*Modo oscuro y claro*/
let cambio = document.getElementById("active");
cambio.addEventListener("click", function() {
     cambio.classList.toggle("fa-sun");
	 cambio.classList.toggle("fa-moon");
	 nav.classList.toggle("dark");
	 body.classList.toggle("dark");

	 let textoA = "Activa modo oscuro";
     let textoB = "Activa modo claro";
    
	let modos = document.getElementById("modo");
	 if(modos.querySelector("h3").textContent == textoA){
		modos.querySelector("h3").textContent = textoB;
	}else{
		modos.querySelector("h3").textContent = textoA;
	}
} 
);