let sueldo = parseInt(prompt("Cuanto cobras?", 0));   /* let sueldo = 1700; */
let resultado = document.getElementById("resultado");

switch(sueldo){
    case 500:
        resultado.innerHTML = "Trabajas a media jornada";
    break;

    case 1000:
        resultado.innerHTML = "Tienes el salario minimo";
    break;

    case 1700:
        resultado.innerHTML = "Tu sueldo es bueno";
    break;

    case 2500:
        resultado.innerHTML = "Tienes un sueldo extraordinario";
    break;

    default:
        resultado.innerHTML = "Eres un estudiante";
    break;
}
