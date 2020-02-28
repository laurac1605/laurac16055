// let links = document.querySelectorAll("a");

// links.forEach(function(link){
// 	console.log(link);
// });

let close = document.querySelectorAll(".close");

close.forEach(function(value){

	value.addEventListener("click",function(evento){
		evento.preventDefault();
		let contenedor = document.querySelector(".content");
		
		contenedor.classList.remove("fadeInDown");
		contenedor.classList.remove("animated");
		contenedor.classList.add("fadeOutDown");
		contenedor.classList.add("animated");

		setTimeout(function(){
			location.href="/";	
		},600);

		return false;
	});


});

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
	icono.classList.remove("fa-star");
});


