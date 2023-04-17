let nombre = prompt("ingrese su nombre");
let edad = Number(prompt("ingrese su edad"));

while (edad < 18){
    alert (nombre + " usted es menor de edad, no puede ingresar al sitio");
}

alert("Bienvenido" + " " + nombre);

let reintentar;
let verGraduacion;
let graduacionBebida
let continuar;
let nombreBebida;
let totalBebida = "";

while(continuar != "no" ) {

    nombreBebida = prompt("que bebida desea agregar?");
    totalBebida = totalBebida + nombreBebida + "\n" ;
    continuar = prompt("¿desea agregar otra bebida? si/no").toLowerCase();
}
alert("Agrego las siguientes bebidas: " + "\n" + totalBebida);

verGraduacion = prompt("¿Desea consultar la graduacion alcoholica de algunas bebibas? Si/No").toLowerCase();

if (verGraduacion == "si") {
    do {
    graduacionBebida = Number(prompt("¿de cual de las siguientes bebidas desea consultar la graduacion?" + "\n" + 
    "1 - Vodka" + "\n" +
    "2 - Fernet" + "\n" +
    "3 - Gancia" + "\n" +
    "4 - Vino" + "\n" +
    "5 - Ron" + "\n"))

        switch (graduacionBebida) {
            case 1: alert("La graduacion alcoholica del Vodka es del 40%")
            repetir = prompt("¿Desea consultar alguna otra bebida? Si/No").toLowerCase()
            break;
            case 2: alert ("La graduacion alcoholica del fernet varia entre un 39% a 45% segun la marca")
            repetir = prompt("¿Desea consultar alguna otra bebida? Si/No").toLowerCase()
            break;
            case 3: alert ("La graduacion alcoholica del Gancia es de un 30%")
            repetir = prompt("¿Desea consultar alguna otra bebida? Si/No").toLowerCase()
            break;
            case 4: alert ("La graduacion alcoholica del vino varia entre un 10% a 14% segun la marca")
            repetir = prompt("¿Desea consultar alguna otra bebida? Si/No").toLowerCase()
            break;
            case 5: alert ("La graduacion alcoholica del Ron varia entre un 35% a 54% segun la marca")
            repetir = prompt("¿Desea consultar alguna otra bebida? Si/No").toLowerCase()
        }}
        while (repetir == "si");
        alert ("¡" + nombre + " gracias por visitarnos!");
} else {
    alert ("¡" + nombre + " gracias por visitarnos!");
}