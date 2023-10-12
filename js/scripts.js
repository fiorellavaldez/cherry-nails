function consisto_string (string) {

    if (!string || string.trim() === ' ' ){
        return false
    }

    if (/[^a-zA-Z0-9\s]/.test(string)){
        return false
    }

    return true;
}

function consisto_email(email){

    if (!email.includes('@')){
        return false
    }
    return true
}

function consisto_dni(dni){
    if (dni.length !== 8 || dni.includes('.') || /[^a-zA-Z0-9\s]/.test(dni) ){
        return false
    }
    return true
}

function consisto_telefono(telefono){
    return /^[0-9\s\-()+]+$/.test(telefono)
}

function consisto_cp(codigo){
    if (codigo.length !== 4 || codigo.includes('.') || /[^a-zA-Z0-9\s]/.test(codigo) ){
        return false
    }
    return true
}

function consisto_num(num){
    if (!num || num.includes('.') || /[^a-zA-Z0-9\s]/.test(num) ){
        return false
    }
    return true
}

let datosComprador = {
    nombre_comprador: "",
    apellido_comprador: "",
    email_comprador: "",
    dni_comprador: "",
    telefono_comprador: "",
    codigo_postal_comprador: "",
    dir_calle_comprador: "",
    dir_num_comprador: "",
    dir_piso_depa: "",
    provincia_comprador: "",
    ciudad_comprador:"",
}

let formulario = document.querySelector('form.grid-finalizar-compra')

formulario.addEventListener('submit',function(event){

    cont_errores = 0
    
    datosComprador.nombre_comprador = document.getElementById('nombre-comprador').value
    datosComprador.apellido_comprador = document.getElementById('apellido-comprador').value
    datosComprador.email_comprador = document.getElementById('email-comprador').value
    datosComprador.dni_comprador = document.getElementById('dni-comprador').value
    datosComprador.telefono_comprador = document.getElementById('telefono-comprador').value
    datosComprador.codigo_postal_comprador = document.getElementById('codi-post-compra').value
    datosComprador.dir_calle_comprador = document.getElementById('dire-compra').value
    datosComprador.dir_num_comprador = document.getElementById('num-dire-compra').value
    datosComprador.dir_piso_depa = document.getElementById('num-piso-compra').value
    datosComprador.provincia_comprador = document.getElementById('provincia-compra').value
    datosComprador.ciudad_comprador = document.getElementById('ciudad-compra').value


    if (!consisto_string(datosComprador.nombre_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-nombre ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-nombre ul li').style = "color: red"
        document.querySelector('div.error-nombre ul').style = "list-style: none"
        document.getElementById('nombre-comprador').style.border = "1px solid red"
    }

    if(!consisto_string(datosComprador.apellido_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-apellido ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-apellido ul li').style = "color: red"
        document.querySelector('div.error-apellido ul').style = "list-style: none"
        document.getElementById('apellido-comprador').style.border = "1px solid red"

    }

    if(!consisto_email(datosComprador.email_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-email ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-email ul li').style = "color: red"
        document.querySelector('div.error-email ul').style = "list-style: none"
        document.getElementById('email-comprador').style.border = "1px solid red"

    }

    if(!consisto_dni(datosComprador.dni_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-dni ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-dni ul li').style = "color: red"
        document.querySelector('div.error-dni ul').style = "list-style: none"
        document.getElementById('dni-comprador').style.border = "1px solid red"

    }

    if(!consisto_telefono(datosComprador.telefono_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-telefono ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-telefono ul li').style = "color: red"
        document.querySelector('div.error-telefono ul').style = "list-style: none"
        document.getElementById('telefono-comprador').style.border = "1px solid red"
    }

    if(!consisto_cp(datosComprador.codigo_postal_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-codigo-postal ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-codigo-postal ul li').style = "color: red"
        document.querySelector('div.error-codigo-postal ul').style = "list-style: none"
        document.getElementById('codi-post-compra').style.border = "1px solid red"
    }

    if(!consisto_string(datosComprador.dir_calle_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-dir-calle ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-dir-calle ul li').style = "color: red"
        document.querySelector('div.error-dir-calle ul').style = "list-style: none"
        document.getElementById('dire-compra').style.border = "1px solid red"

    }

    if(!consisto_num(datosComprador.dir_num_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-dir-num ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-dir-num li').style = "color: red"
        document.querySelector('div.error-dir-num ul').style = "list-style: none"
        document.getElementById('num-dire-compra').style.border = "1px solid red"
    }

    if(!consisto_num(datosComprador.dir_piso_depa)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-dir-piso ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-dir-piso li').style = "color: red"
        document.querySelector('div.error-dir-piso ul').style = "list-style: none"
        document.getElementById('num-piso-compra').style.border = "1px solid red"
    }

    if(!consisto_string(datosComprador.provincia_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-provincia ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-provincia li').style = "color: red"
        document.querySelector('div.error-provincia ul').style = "list-style: none"
        document.getElementById('provincia-compra').style.border = "1px solid red"
    }

    if(!consisto_string(datosComprador.ciudad_comprador)){
        cont_errores += 1
        let ulErrores = document.querySelector('div.error-ciudad ul')
        ulErrores.innerHTML += '<li> Ingreso inválido </li> '
        document.querySelector('div.error-ciudad li').style = "color: red"
        document.querySelector('div.error-ciudad ul').style = "list-style: none"
        document.getElementById('ciudad-compra').style.border = "1px solid red"
    }

    if (cont_errores > 0){
        event.preventDefault()
    } else {
        localStorage.setItem("unComprador" , JSON.stringify(datosComprador))
    }
})
