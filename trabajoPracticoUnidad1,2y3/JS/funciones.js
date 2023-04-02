// Progrma que genera la factura de un paciente en un Hospital.
function programa1(){
    // Obteniendo los valores para las variables desde el html.
    let nombrePaciente = document.getElementById("nombrePaciente").value;
    let costoConsulta = parseFloat(document.getElementById("costoConsulta").value);
    let costoHospitalDia = parseFloat(document.getElementById("costoDiaHospital").value);
    let costoMedicina = parseFloat(document.getElementById("costoMedicamentos").value);
    let costosVarios = parseFloat(document.getElementById("costosVarios").value);
    let diasHospital = parseFloat(document.getElementById("numeroDiasHospital").value);
    let deduccionGastos = parseFloat(document.getElementById("deduccionSeguro").value);
    let costoTotal; // Variable para el Costo Final.

    // Sumando todas las variables para calcular el costo Total.
    costoTotal = costoConsulta + (costoHospitalDia * diasHospital)+ costoMedicina + costosVarios; 
    
    // Verificando que se introduzcan los datos del form.
    if(!Number.isNaN(costoTotal)){
        // Mostrando los datos Solicitados.
        window.alert('Paciente: ' + nombrePaciente + 
                    '\n Costo Total: ' + costoTotal + 
                    '\n Costo con Deduccion del Seguro: ' + (costoTotal - deduccionGastos) + 
                    '\n Costo Sin Medicinas y con Deduccion del seguro: ' + (costoTotal - deduccionGastos - costoMedicina)
                    );
    }else{
        window.alert("Por Favor LLene los Campos Solicitados con Informacion Valida.");
    }
}

// Calcular el sueldo a un vendedor.
/*    El sueldo base mas la comision de 3 ventas. Con base a las siguientes especificaciones:
        -> Si la venta es mayor o igual a 2000 recibe 20$ de comision.
        -> Si la venta es menor a 2000 recibe el 10% de comision. 
*/
function programa2(){
    // Obteniendo los valores desde el html para las varibales.
    let sellerName = document.getElementById("sellerName").value;
    let sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    let ventas = []; // Variable para los valores de las ventas.
    ventas.push(parseFloat(document.getElementById("venta1").value));
    ventas.push(parseFloat(document.getElementById("venta2").value));
    ventas.push(parseFloat(document.getElementById("venta3").value));
    let sueldoTotal = 0; // Variable para el sueldo Final.

    // Comisiones por cada venta
    for(let i=0; i<ventas.length; i++){
        if(ventas[i] >= 2000){
            ventas[i] = (20 * ventas[i] / 100);
        }else{
            ventas[i] = (10 * ventas[i] / 100);
        }
        // Agregando el valor de las comisiones al sueldo final.
        sueldoTotal += ventas[i];
    }

    // Agregando el sueldo Base al sueldo Final.
    sueldoTotal += sueldoBase;

    // Mostrando los datos solicitados.
    window.alert(sellerName + 
                "\n Sueldo Base: " + sueldoBase + 
                "\n Comisiones:" +
                "\n   Venta 1 -> " + ventas[0] +
                "\n   Venta 2 -> " + ventas[1] +
                "\n   Venta 3 -> " + ventas[2] +
                "\n Total a pagar: " + Math.round(sueldoTotal));
}

// Indice de Masa Corporal.
/*        IMC = peso/altura^2
        De igual forma se ofrece una recomendacion
*/
function programa3(peso, altura, name){
    let imc = 0;
    let msg;
    // Calculando el IMC.
    imc = Math.round(peso/(altura**2));
    
    // Recomendacion a mostrar.
    if(imc > 25){
        msg = "Peso Alto, haga dieta y ejercicio.";
    }else if ((imc >= 22) && (imc < 25)){
        msg = "Peso Correcto.";
    }else{
        msg= "Peso Bajo, coma más.";
    }

    //Mostrando Datos Solicitados
    window.alert(name + "\n Peso: " + peso + " kilos" +
                "\n Altura: " + altura + " Metros" + 
                "\n Indice de Masa Corporal (imc): " + imc +
                "\n \n" + msg);
}

// Convertidor de Unidades.
function programa4(unidades, origen, destino){
    // Variable para guardar las conversiones.
    let unidadesConvertidas;

    // Verificando si existe la conversion.
    if (!(origen == destino)){
        // Seleccion de la unidad de origen.
        switch(origen){
            case "metro":
                // Seleccion de la unidad de destino
                switch(destino){
                    case "centimetro":
                        unidadesConvertidas =  unidades * 100;
                        window.alert("Conversion de Metros a Centimetros.\n" + 
                                    unidades + " metros = " + unidadesConvertidas + " centimetros");
                        break;
                    case "pie":
                        unidadesConvertidas =  unidades * 3.28084;
                        window.alert("Conversion de Metros a Pies.\n" + 
                                    unidades + " metros = " + unidadesConvertidas + " pies");
                        break;
                    case "yarda":
                        unidadesConvertidas =  unidades * 1.093613;
                        window.alert("Conversion de Metros a Yardas.\n" + 
                                    unidades + " metros = " + unidadesConvertidas + " yardas");
                        break;
                }
                break;
            case "centimetro":
                switch(destino){
                    case "metro":
                        unidadesConvertidas =  unidades * 0.01;
                        window.alert("Conversion de Centimetros a Metros.\n" + 
                                    unidades + " centimetros = " + unidadesConvertidas + " metros");
                        break;
                    case "pie":
                        unidadesConvertidas =  unidades * 0.0328084;
                        window.alert("Conversion de Centimetros a Pies.\n" + 
                                    unidades + " centimetros = " + unidadesConvertidas + " pies");
                        break;
                    case "yarda":
                        unidadesConvertidas =  unidades * 0.01093613;
                        window.alert("Conversion de Centimetros a Yardas.\n" + 
                                    unidades + " centimetros = " + unidadesConvertidas + " yardas");
                        break;
                }
                break;
            case "pie":
                switch(destino){
                    case "metro":
                        unidadesConvertidas =  unidades * 0.3048;
                        window.alert("Conversion de Pies a Metros.\n" + 
                                    unidades + " pies = " + unidadesConvertidas + " metros");
                        break;
                    case "centimetro":
                        unidadesConvertidas =  unidades * 30.48;
                        window.alert("Conversion de Pies a Centimetros.\n" + 
                                    unidades + " pies = " + unidadesConvertidas + " centimetros");
                        break;
                    case "yarda":
                        unidadesConvertidas =  unidades * 0.333333;
                        window.alert("Conversion de Pies a Yardas.\n" + 
                                    unidades + " pies = " + unidadesConvertidas + " yardas");
                        break;
                }
                break;
            case "yarda":
                switch(destino){
                    case "metro":
                        unidadesConvertidas =  unidades * 0.9144;
                        window.alert("Conversion de Yardas a Metros.\n" + 
                                    unidades + " yardas = " + unidadesConvertidas + " metros");
                        break;
                    case "pie":
                        unidadesConvertidas =  unidades * 3.28084;
                        window.alert("Conversion de Yardas a Pies.\n" + 
                                    unidades + " yardas = " + unidadesConvertidas + " pies");
                        break;
                    case "centimetro":
                        unidadesConvertidas =  unidades * 1.093613;
                        window.alert("Conversion de Yardas a Centimetros.\n" + 
                                    unidades + " yardas = " + unidadesConvertidas + " centimetros");
                        break;
                }
                break;
        }
    }else{
        window.alert("No hay unidades a convertir.");
    }
}

// Promedio Calcular el promedio en base a las calificaciones registradas.
function programa5(){
    // Obteniendo el nombre del usuario.
    let nameUser = document.getElementById('nameAlumno').value;
    // Solicitando el numero de calificaciones.
    let numCalificaciones = parseInt(prompt("Número de Materias: "));
    // Arreglo para guardar las calificaciones digitadas.
    let calificaciones = [];
    // Variable para almacenar el promedio.
    let promedio = 0;
    
    // Ciclo para solicitar las calificaciones y agregar al arreglo.
    for (let i = 1; i <= numCalificaciones; i++){
        calificaciones.push(prompt('Calificacion ' + i + ' :'));
    }
    // Ciclo para sumar las calificaciones del arreglo
    for (let j = 0; j < calificaciones.length; j++){
        promedio += parseInt(calificaciones[j]);
    }
    // Calculando el promedio.
    promedio /= numCalificaciones;

    // Mostrando Datos
    if(promedio >= 6){
        window.alert(nameUser + "\n Calificaciones: " + calificaciones + 
                    "\n Promedio: " + promedio + "\n \n Alumno Aprobado.");
    }else{
        window.alert(nameUser + "\n Calificaciones: " + calificaciones + 
                    "\n Promedio: " + promedio + "\n \n Alumno NO Aprobado.");
    }

}

// Muestra el número de intentos realizados antes de presionar el número 0.
function programa6(){
    // Variables para almacenar el conteo de veces que no es cero y para guardar el valor introducido.
    let variable;
    let contador = 0;
    // Solicitando el valor por una ventana.
    variable = prompt("Presione 0 para finalizar Ciclo");
    // Ciclo while para repetir hasta que sea cero el dato introducido.
    while((variable != 0) || (variable == ' ')){
        variable = prompt("Presione 0 para finalizar Ciclo");
        contador += 1;
    }
    // Mostrando los datos solicitados.
    window.alert("Has presionado el número cero '0' en: " + contador + " intentos.");
}

// Factorial de un número.
function programa7(numero){
    // Variable para guardar los factoriales.
    let msg='';
    let factorial = 1;

    // Calculando el factorial.
    for (let i = 1; i <= numero; i++){
        factorial *= i;
        msg += i + "! = " + factorial + "\n";
    }
    // Mostrando los datos solicitados.
    window.alert(msg);
}

// Pintar triangulo con ciclo for.
function programa8(tamaño){
    // Variable para almacenar el traingulo final.
    let triangulo = '';

    // Primer for para recorrer las filas a pintar
    for(let filas = 0; filas < tamaño; filas++){
        // For para agregar '#' en las columnas del triangulo.
        for (let columnas = 0; columnas <= filas; columnas++){
            triangulo += "#";
        }
        // Salto de linea para pasar a la siguiente fila.
        triangulo += "\n";
    }
    window.alert(triangulo);
}

// Pintar piramide.
function programa9(){
    let number = prompt("Digite el número de pisos de la piramide: ");
    // Variable para guardar la piramide.
    piramide ="";

    // Ciclo para realizar la parte superior.
    for(let j = 1; j <= number; j++){
        piramide += "#".repeat(j);
        piramide += "\n";
    }
    // Ciclo para realizar la parte inferior.
    for(let i = number-1; i > 0; i--){
        piramide += "#".repeat(i);
        piramide += "\n";
    }
    // Mostrando los datos.
    window.alert(piramide);
}

// Impresion de medio arbol.
function programa10(veces){
    // Variable para guardar el arbol
    let arbol = '';

    //Ciclo para repetir las veces de impresion.
    for(let ciclos = 0; ciclos < veces; ciclos++){
        // Ciclo para crear las formas
        for (let i = 1; i <= ciclos + 1; i++){
            arbol += "#".repeat(i);
            arbol += "\n";
        }
    }
    window.alert(arbol);
}