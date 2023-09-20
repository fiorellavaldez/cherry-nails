function consisto_string (string) {

    if (!string || string.trim() === ' ' ){
        alert("Error. El nombre no puede estar vacío")
        return false
    }

    if (/[^a-zA-Z0-9\s]/.test(string)){
        alert("Error. El nombre no puede contener caracteres especiales")
        return false
    }

    return true;
}

function consisto_email(email){

    if (!email.includes('@')){
        alert("Error. Formato inválido")
        return false
    }
    return true
}

function consisto_dni(dni){
    if (dni.length !== 8 || dni.includes('.') || /[^a-zA-Z0-9\s]/.test(dni) ){
        alert("Error. Formato inválido")
        return false
    }
    return true
}

function consisto_cp(codigo){
    if (codigo.length !== 4 || codigo.includes('.') || /[^a-zA-Z0-9\s]/.test(codigo) ){
        alert("Error. Formato inválido")
        return false
    }
    return true
}

function consisto_num_calle(num){
    if (!num || num.includes('.') || /[^a-zA-Z0-9\s]/.test(num) ){
        alert("Error. Formato inválido o ingreso nulo")
        return false
    }
    return true
}

function consisto_nro_tarjeta(nro){
    if (!nro || nro.includes('.') || /[^a-zA-Z0-9\s]/.test(nro) || nro.length !== 16 ){
        alert("Error. Formato inválido")
        return false
    }
    return true
}

let nombre
let apellido
let email
let dni
let telefono

let codigoPostal
let direccion
let numero_direccion
let piso_departamento
let provincia
let ciudad

let nroTarjeta
let nombreTitularTarjeta


function ingreso_identificacion() {
    alert("Ingrese datos de identificacion")
    do{
        nombre = prompt("Ingrese su nombre")
    } while (!consisto_string(nombre))
    do{
        apellido = prompt("Ingrese su apellido")
    } while (!consisto_string(apellido))
    do{
        email = prompt("Ingrese su email")
    } while (!consisto_email(email))
    do{
        dni = prompt("Ingrese su DNI (sin puntos y/o espacios)")
    } while (!consisto_dni(dni))
    telefono = prompt("Ingrese su teléfono")
}

function ingreso_envio(){
    alert("Ingrese datos de envío")
    do{
        codigoPostal = prompt("Ingrese su código postal")
    } while (!consisto_cp(codigoPostal))
    do{
        direccion = prompt("Ingrese la calle de su domicilio")
    } while(!consisto_string(direccion))
    do{
        numero_direccion = prompt("Ingrese el número de su domicilio")
    } while(!consisto_num_calle(numero_direccion))

    piso_departamento = prompt("Ingrese n° piso o departamento (opcional)")

    do{
        provincia = prompt("Ingrese provincia de residencia")
    } while(!consisto_string(provincia))

    do{
        ciudad = prompt("Ingrese provincia de residencia")
    } while(!consisto_string(ciudad))
}

function ingreso_datos_pago(){
    do{
        nroTarjeta = prompt("Ingrese el nombre de su tarjeta")
    } while(!consisto_nro_tarjeta(nroTarjeta))
    do{
        nombreTitularTarjeta = prompt("Ingrese el nombre del titular de la tarjeta")
    } while(!consisto_string(nombreTitularTarjeta))
}

ingreso_identificacion()
ingreso_envio()
ingreso_datos_pago()