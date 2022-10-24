const op = prompt("Introduce opcion: " );

switch (op){

    case '1':
    alert("Convierta un texto en letras mayusculas");
    const sentence = prompt("Introduce texto");

    alert(sentence.toUpperCase());
    break;







    case '2':
    alert("Cuente las letras que tiene una cadena de texto");


    function contarLetras (texto=''){
        if (typeof texto !== 'string')return 'El valor no es un string';
        if (texto==='')return 'No ingreso ningun valor';
        return texto.length;
    }
    
    let texto=prompt('introduce una palabra');
    texto= contarLetras(texto);
    alert('La cantidad de letras de la palabra ingresada es '+ texto);
    break;








    case '3':
        alert("Ingrese un numero y diga si es mayor o menor de edad");
        var edad = prompt("Introduce tu edad");
    if (Number(edad) == edad) {

        if (edad > 18) {
            alert("Ud es mayor de edad");
        }else {
            alert("Ud es menor de edad");
        }

        alert("no es numerico");
    }
    
    break;

    default:
        alert('Inciso desconocido o inexistente');
        break;

}






