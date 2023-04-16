let nombre = prompt("ingrese su nombre");
let edad = Number(prompt("ingrese su edad"));

while (edad < 18){
    alert (nombre + " usted es menor de edad, no puede ingresar al sitio");
}

alert("Bienvenido" + " " + nombre);

let continuar;
let nombreBebida;
let totalBebida = "";

while(continuar != "no" ) {

    nombreBebida = prompt("que bebida desea agregar?");
    totalBebida = totalBebida + ", " + nombreBebida;
    continuar = prompt("¿desea agregar otra bebida? si/no").toLowerCase();
}
alert("Agrego las siguientes bebidas" + totalBebida);
