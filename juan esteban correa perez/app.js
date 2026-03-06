const aceptacion = "si";

const form = document.getElementById("form")

const mensaje = document.getElementById("mensaje")

const historia = () => {
    console.log("me desperte temprano, alrededor de las 10 am, un dia soleado y tranquilo")
    console.log("mas tarde recibo buenas noticias, las clases del dia fueron canceladas")
    console.log("si no era eso suficiente, me llega un cupon de Didifood notificadome que")
    console.log("tengo un pedido gratis, lo cual uso para desayunar")
    console.log("horas mas tarde despues de tener un dia relajado, salgo a la calle y me ")
    console.log("encuentro un billete de 100.000 pesos, los recojo y empiezo a notar que")
    console.log("esta siendo un muy buen dia, paso un rato con amigos")
    console.log("mas tarde volvi a casa y me encontre ocn mi comida favorita servida en la mesa")
    console.log("la disfrute hasta el final y me dormi sabiendo que el siguiente dia tampoco")
    console.log("tenia clases, ya que era fin de semana.")
    mensaje.textContent = "Revisa la consola"

    
    }
const validar = (option) =>{
    if(option === aceptacion){
        historia();
    }
    else{
        console.log("te pierdes la histoia")
        mensaje.textContent = "Revisa la consola"
    }
}

form.addEventListener("submit",function(event){
    event.preventDefault();

    const option = document.getElementById("option").value.trim();
    
    validar(option);




})

