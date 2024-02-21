
//vairiables
const IVA = 0.21;
const IRPF = 0.20;
const arrayFacturasIngreso = [];
const arrayFacturaGastos = [];
const arrayFacturaPersonalizada = [];
let ok = 0;
let totalGasto = 0;
const arrayUsuario = [];



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//clases
class FacturaIngreso {
    constructor(concepto, fecha, total, irpf, iva) {

        this.concepto = concepto;
        this.fecha = fecha;
        this.total = total;
        this.irpf = irpf;
        this.iva = iva;

    }

    //metodos de clases
    sumarATotal() {

        usuario.totalIngreso += parseFloat(this.total);
        usuario.totalIva += parseFloat(this.iva);
        usuario.totalIrpf += parseFloat(this.irpf);
        usuario.totalIngresoBruto += parseFloat(this.total - this.irpf - this.iva);
        usuario.facturasIngresos += 1;

        let usuarioJson = JSON.stringify(usuario);

        localStorage.setItem("Usuario", usuarioJson);

        console.log(usuario.totalIngreso);
        console.log(usuario.totalIva);
        console.log(usuario.totalIrpf);
        console.log(usuario.totalIngresoBruto);
    }
}

class FacturaGasto {
    constructor(concepto, fecha, total, irpf, iva) {


        this.concepto = concepto;
        this.fecha = fecha;
        this.total = total;
        this.irpf = irpf;
        this.iva = iva;
    }

    //metodos de clases
    sumarATotal() {

        usuario.totalIva -= parseFloat(this.iva);
        usuario.totalIrpf -= parseFloat(this.irpf);
        usuario.gastos += parseFloat(this.total);
        usuario.totalIngresoBruto += (parseFloat(this.irpf) + parseFloat(this.iva));
        usuario.facturasGastos += 1;



        let usuarioJson = JSON.stringify(usuario);

        localStorage.setItem("Usuario", usuarioJson);

        console.log(arrayFacturaGastos);
        console.log(arrayFacturasIngreso);
        console.log(arrayFacturaPersonalizada);



    }
}

class FacturaPersonalizada {

    constructor(razon_social, dni, fecha, total, irpf, iva) {

        this.razon_social = razon_social;
        this.dni = dni;
        this.fecha = fecha;
        this.total = total;
        this.irpf = irpf;
        this.iva = iva;
    }

    //metodos de clases
    sumarATotal() {


        usuario.totalIngreso += parseFloat(this.total);
        usuario.totalIva += parseFloat(this.iva);
        usuario.totalIrpf += parseFloat(this.irpf);
        usuario.totalIngresoBruto += parseFloat(this.total - this.irpf - this.iva);
        usuario.facturasPersonalizadas += 1;

        let usuarioJson = JSON.stringify(usuario);

        localStorage.setItem("Usuario", usuarioJson);

        console.log(usuario.totalIngreso);
        console.log(usuario.totalIva);
        console.log(usuario.totalIrpf);
        console.log(usuario.totalIngresoBruto);


        
        
        console.log("se han cargado los datos de la factura");

    }
}




class Usuario {
    constructor(nombre, apellido, dni, correo, password, login) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.correo = correo;
        this.password = password;
        this.login = login;
        this.totalIngresoBruto = 0;
        this.totalIngreso = 0;
        this.totalIva = 0;
        this.totalIrpf = 0;
        this.gastos = 0;
        this.facturasIngresos = 0;
        this.facturasGastos = 0;
        this.facturasPersonalizadas = 0;
        

    }
}

//CONSUMO DE APIS

const dolarApi= "https://criptoya.com/api/binancep2p/btc/usd/0.1";
const div7= document.getElementById("precioDolar");
div7.className="precioDolar";

setInterval(() =>{
    fetch(dolarApi)
        .then(response => response.json())
        .then(({totalBid}) =>{

            

            div7.innerHTML=`
            
            <p>Bitcoin : ${totalBid} </p>
           
         

            `;    
        })
        .catch(error => console.log(error))
    


},2000);


const dolarApi2= "https://criptoya.com/api/binancep2p/eth/usd/0.1";
 

setInterval(() =>{
    fetch(dolarApi2)
        .then(response => response.json())
        .then(({totalBid}) =>{

            div7.innerHTML+=`
          
            <p> ETH : ${totalBid} </p>
         

            `;    
        })
        .catch(error => console.log(error))
    


},2000);




// const dolarApi3= "https://criptoya.com/api/binancep2p/dai/usd/0.1";
 

// setInterval(() =>{
//     fetch(dolarApi3)
//         .then(response => response.json())
//         .then(({totalBid}) =>{

//             div7.innerHTML+=`
           
//             <p>DAI : ${totalBid}</p>
         

//             `;    
//         })
//         .catch(error => console.log(error))
    


// },1000)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCIONES

//FUNCIONES ASINCRONAS

const titulo= document.getElementById("tituloHeader");
const parrafo = document.getElementById("parrafoHeader");

const textoTitulo = "GESTOREATE";
const textoParrafo ="El software gratuito que pondra en alza tus finanzas"
let indice1 = 0;
let indice2 =0;

function mostrarTitulo(){

  titulo.textContent += textoTitulo[indice1];
  indice1++;

  if(indice1 < textoTitulo.length){

    setTimeout(mostrarTitulo, 200);
  } 
}

function mostrarParrafo(){

  
    parrafo.textContent += textoParrafo[indice2];
    indice2++;

    if(indice2 < textoParrafo.length){

        setTimeout(mostrarParrafo,30);
    }
}
setTimeout(mostrarTitulo,0);
setTimeout(mostrarParrafo,1000);


////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCIONES SINCRONICAS


function cargarFacturaIngreso() {

    let concepto = document.getElementById("concepto-ingresos");
    let fecha = document.getElementById("fecha-ingresos");
    let total = document.getElementById("total-ingresos");
    let irpf = document.getElementById("irpf-ingresos");
    let iva = document.getElementById("iva-ingresos");

    //guarda todos los datos de los input de factura de ingreso en un arrays


    const facturaIngreso = new FacturaIngreso(concepto, fecha, total.value, irpf.value, iva.value);

    arrayFacturasIngreso.push(facturaIngreso);

    facturaIngreso.sumarATotal()

    let facturaIngresoJson = JSON.stringify(facturaIngreso);

    localStorage.setItem("factura ingreso", facturaIngresoJson);



    console.log(facturaIngresoJson);

    console.log(arrayFacturasIngreso);

    //para limpiar los inputs de la factura al darle al boton cargar


    concepto.value = "";
    fecha.value = "";
    total.value = 0, 0;
    irpf.value = 0, 0;
    iva.value = 0, 0;

    p_total_visual.innerText = "";
    p_irpf_visual.innerText = "";
    p_iva_visual.innerText = "";
    p_total_total_visual.innerText = "";



    // Swal.fire("factura cargada con exito")

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
       
        }
    });
    Toast.fire({
        icon: "success",
        title: "Factura de ingreso cargada exitosamente"
    });





}


function cargarFacturaGasto() {

    let concepto = document.getElementById("concepto-gasto");
    let fecha = document.getElementById("fecha-gasto");
    let total = document.getElementById("total-gasto");
    let irpf = document.getElementById("irpf-gasto");
    let iva = document.getElementById("iva-gasto");


    //guarda todos los datos de los input de factura de gastos en un arrays


    const facturaGasto = new FacturaGasto(concepto, fecha, total.value, irpf.value, iva.value);

    arrayFacturaGastos.push(facturaGasto);

    facturaGasto.sumarATotal();
  


    //pasamos el arrays a JSON
    let facturaGastoJson = JSON.stringify(facturaGasto);

    localStorage.setItem("factura gasto", facturaGastoJson);



    console.log(facturaGastoJson);

    console.log(arrayFacturaGastos);

    //para limpiar los inputs de la factura al darle al boton cargar


    concepto.value = "";
    fecha.value = "";
    total.value = 0, 0;
    irpf.value = 0, 0;
    iva.value = 0, 0;

    p_total_visual_gasto.innerText = "";
    p_irpf_visual_gasto.innerText = "";
    p_iva_visual_gasto.innerText = "";
    p_total_total_visual_gasto.innerText = "";



    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          
        }
    });
    Toast.fire({
        icon: "success",
        title: "Factura de gasto cargada exitosamente"
    });




}


function cargarFacturaPersonalizada() {

    let razonSocial = document.getElementById("razonSocial-Personalizada");
    let dni = document.getElementById("dni-Personalizada")
    let fecha = document.getElementById("fecha-Personalizada");
    let total = document.getElementById("total-Personalizada");
    let irpf = document.getElementById("irpf-Personalizada");
    let iva = document.getElementById("iva-Personalizada");


    //guarda todos los datos de los input de factura de ingreso en un arrays


    const facturaPersonalizada = new FacturaPersonalizada(razonSocial, dni, fecha, total.value, irpf.value, iva.value);

    arrayFacturaPersonalizada.push(facturaPersonalizada);

    facturaPersonalizada.sumarATotal();

    //pasamos el arrays a JSON
    let facturaPersonalizadaJson = JSON.stringify(facturaPersonalizada);

    localStorage.setItem("factura personalizada", facturaPersonalizadaJson);

    console.log(arrayFacturaPersonalizada);

    //para limpiar los inputs de la factura al darle al boton cargar


    razonSocial.value = "";
    fecha.value = "";
    dni.value = "";
    total.value = 0, 0;
    irpf.value = 0, 0;
    iva.value = 0, 0;

    p_total_visual_personalizada.innerText = "";
    p_irpf_visual_personalizada.innerText = "";
    p_iva_visual_personalizada.innerText = "";
    p_total_total_visual_personalizada.innerText = "";

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
           
           
        }
    });
    Toast.fire({
        icon: "success",
        title: "Factura personalizada cargada exitosamente"
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//
////CREACION DE DOM
//
//nodos factura visual seccion 1
const div = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const contenedor = document.getElementById("factura-visual");
const contenedor2 = document.getElementById("factura-visual-gasto");
const contenedor3 = document.getElementById("factura-visual-personalizada");

//inputs ingresos



const total = document.getElementById("total-ingresos");
const irpf = document.getElementById("irpf-ingresos");
const iva = document.getElementById("iva-ingresos");

//inputs gastos


const total_gasto = document.getElementById("total-gasto");
const irpf_gasto = document.getElementById("irpf-gasto");
const iva_gasto = document.getElementById("iva-gasto");


//input personalizada


const total_personalizada = document.getElementById("total-Personalizada");
const irpf_personalizada = document.getElementById("irpf-Personalizada");
const iva_personalizada = document.getElementById("iva-Personalizada");




//variables factura 


let total_irpf;
let total_iva;

console.log(`total iva: ${total_iva}`);
console.log(`total irpf: ${total_irpf}`);
//creacion de nodos para la factura visual ingreso

let p_razon_social_visual = document.createElement("span");
let p_dni_visual = document.createElement("span");
let p_fecha_visual = document.createElement("span");
let p_total_visual = document.createElement("span");
let p_iva_visual = document.createElement("span");
let p_irpf_visual = document.createElement("span");
let p_total_total_visual = document.createElement("span");

//creacion de nodos para la factura visual de gasto 
let p_razon_social_visual_gasto = document.createElement("span");
let p_dni_visual_gasto = document.createElement("span");
let p_fecha_visual_gasto = document.createElement("span");
let p_total_visual_gasto = document.createElement("span");
let p_iva_visual_gasto = document.createElement("span");
let p_irpf_visual_gasto = document.createElement("span");
let p_total_total_visual_gasto = document.createElement("span");

//creacion de nodos para la factura visual de personalizada

let p_razon_social_visual_personalizada = document.createElement("span");
let p_dni_visual_personalizada = document.createElement("span");
let p_fecha_visual_personalizada = document.createElement("span");
let p_total_visual_personalizada = document.createElement("span");
let p_iva_visual_personalizada = document.createElement("span");
let p_irpf_visual_personalizada = document.createElement("span");
let p_total_total_visual_personalizada = document.createElement("span");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//DOM



//NODOS PARA MOSTRAR LOS DATOS DE USUARIO SECCION 2

const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const contenedor4 = document.getElementById("dato-usuario");
const contenedor5 = document.getElementById("dato-financiero");
const contenedor6 = document.getElementById("dato-facturas");



//nodos para la creacion de datos personales
const nombre = document.createElement("span");
const apellido = document.createElement("span");
const dni = document.createElement("span");
const correo = document.createElement("span");
const password = document.createElement("span");

//nodos para la creacion de datos financieros
const iva_usuario = document.createElement("span");
const irpf_usuario = document.createElement("span");
const total_usuario = document.createElement("span");
const totalBruto_usuario = document.createElement("span");
const gasto_usuario = document.createElement("span");

//nodos para la creacion de datos de facturas

const factura_ingreso_usuario = document.createElement("span");
const factura_gasto_usuario = document.createElement("span");
const factura_personalizadas_usuario = document.createElement("span");





//llamamos al Usuario en localStorage
if(localStorage.getItem("Usuario") !== null){

    const usuarioJson = localStorage.getItem("Usuario");
    
    const usuario = JSON.parse(usuarioJson);
    
    
    
    if (usuario.login === true) {
    
        nombre.innerText = usuario.nombre;
    
        const spannombre = document.getElementById("nombre_usuario");
    
        spannombre.appendChild(nombre);
    
    
        apellido.innerText = usuario.apellido;
    
        const spanApellido = document.getElementById("apellido_usuario");
    
        spanApellido.appendChild(apellido);
    
        dni.innerText = usuario.dni;
    
        const spanDni = document.getElementById("dni_usuario");
    
        spanDni.appendChild(dni);
    
        correo.innerText = usuario.correo;
    
        const spanCorreo = document.getElementById("correo_usuario");
    
        spanCorreo.appendChild(correo);
    
    
    
    
    
    
    
    
    
        div4.className = "dato-usuario";
        div4.innerHTML = `
    
           <span id="nombre_usuario" class="text-span"></span>
           <span id="apellido_usuario" class="text-span"></span>
           <span id="dni_usuario" class="text-span"></span>
          <span id="correo_usuario" class="text-span"></span>
          `;
    
        contenedor4.appendChild(div4);
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DATOS FINANCIEROS 
    
    
        //nodos para la creacion de datos financieros
    
    
    
        //iva
        iva_usuario.innerText = usuario.totalIva + "$";
    
        const span_iva_usuario = document.getElementById("iva_usuario");
    
        span_iva_usuario.appendChild(iva_usuario);
    
    
        //irpf
        irpf_usuario.innerText = usuario.totalIrpf + "$";
    
        const span_irpf_usuario = document.getElementById("irpf_usuario");
    
        span_irpf_usuario.appendChild(irpf_usuario);
    
    
        //total deduciones
        totalBruto_usuario.innerText = usuario.totalIngresoBruto + "$";
    
        const span_totalBruto_usuario = document.getElementById("totalDeucciones_usuario");
    
        span_totalBruto_usuario.appendChild(totalBruto_usuario);
    
    
        //total bruto
        total_usuario.innerText = usuario.totalIngreso + "$";
    
        const span_total_usuario = document.getElementById("totalBruto_usuario");
    
        span_total_usuario.appendChild(total_usuario);
    
    
        //gasto
        gasto_usuario.innerText = usuario.gastos + "$";
    
        const span_gasto_usuario = document.getElementById("gasto_usuario");
    
        span_gasto_usuario.appendChild(gasto_usuario)
    
    
    
    
    
    
    
        div5.className = "dato-financiero";
    
        div5.innerHTML = `
          
          <span  id="iva_usuario" class="iva_usuario"></span>
          <span id="irpf_usuario" class="irpf_usuario"></span>
          <span id="totalBruto_usuario" class="totalBruto_usuario"></span>
          <span id="totalDeucciones_usuario" class="totalDeucciones_usuario"></span>
          <span id="gasto_usuario" class="gasto_usuario"></span>
          
          `;
    
          contenedor5.appendChild(div5);
    
        
    
        console.log(usuario.totalIva);
        console.log(usuario.totalIrpf);
        console.log(usuario.totalIngresoBruto);
    
    
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DATOS FINANCIEROS 
    
    
    
        factura_ingreso_usuario.innerText = usuario.facturasIngresos;
        const span_factura_ingreso = document.getElementById("usuario_factura_ingreso");
        span_factura_ingreso.appendChild(factura_ingreso_usuario)
    
    
        factura_gasto_usuario.innerText= usuario.facturasGastos;
        const span_factura_gasto = document.getElementById("usuario_factura_gasto");
        span_factura_gasto.appendChild(factura_gasto_usuario);
    
        factura_personalizadas_usuario.innerText = usuario.facturasPersonalizadas;
        const span_factura_personalizada = document.getElementById("usuario_factura_personalizada");
        span_factura_personalizada.appendChild(factura_personalizadas_usuario);
    
        div6.className="dato-factura-visual";
        div6.innerHTML=`
        
        <span id="usuario_factura_gasto" class="usuario_factura_gasto"></span>
        <span id="usuario_factura_ingreso" class="usuario_factura_ingreso"></span>
        <span id="usuario_factura_personalizada" class="usuario_factura_personalizada">
        
        `;
    
    }else{
    
        console.log("no hay ningun usuario registrado");
    }
    
    
    }




















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//EVENTOS

//boton iniciar sesion

//boton registro

const registroUsuario = document.getElementById("boton-registro");
const inicioUsuario = document.getElementById("boton-inicio");



registroUsuario.addEventListener("click", () => {



    Swal.fire({
        title: "Registro Usuario",
        html: `
           <input type="text" id="usuario-nombre" placeholder="Nombre" class="swal2-input">
           <input type="text" id="usuario-apellido" placeholder="apellido" class="swal2-input">
           <input type="text" id="usuario-dni" placeholder="dni" class="swal2-input">
           <input type="text" id="usuario-correo" placeholder="Correo Electronico" class="swal2-input">
           <input type="password" id="usuario-password" placeholder="Password" class="swal2-input" >
           `,
        confirmButtonText: "Registrarme"

    }).then((result) => {
        if (result.isConfirmed) {

            const nombre = document.getElementById("usuario-nombre").value;
            const apellido = document.getElementById("usuario-apellido").value;
            const dni = document.getElementById("usuario-dni").value;
            const correo = document.getElementById("usuario-correo").value;
            const password = document.getElementById("usuario-password").value;

            let usuario = new Usuario(nombre, apellido, dni, correo, password, false);

            arrayUsuario.push(usuario);

            let usuarioJson = JSON.stringify(usuario);

            localStorage.setItem("Usuario", usuarioJson);

            console.log(arrayUsuario);
            console.log(usuarioJson);

            Swal.fire({
                title: "Registrado",
                text: "Registro completado con exito",
                icon: "success"
            })

            console.log(usuario);
        }
    })



});

inicioUsuario.addEventListener("click", () => {

    const usuarioJson = localStorage.getItem("Usuario");

    const usuario = JSON.parse(usuarioJson);

    if (usuario.login === false) {

        Swal.fire({
            title: "Iniciar Sesion",
            html: `
        <input type="text" id="usuario-login" placeholder="correo" class="swal2-input">
        <input type="password" id="password-login" placeholder="password" class="swal2-input">
        `,
            confirmButtonText: "Iniciar Sesion"

        }).then((result) => {
            if (result.isConfirmed) {

                const usuario_login = document.getElementById("usuario-login").value;
                const password_login = document.getElementById("password-login").value;



                if (usuario_login === usuario.correo && password_login === usuario.password) {

                    Swal.fire({
                        title: `Bienvenido  ${usuario.nombre} ${usuario.apellido}`,
                        icon: "success",
                    })

                    usuario.login = true;

                    let usuarioJson = JSON.stringify(usuario);

                    localStorage.setItem("Usuario", usuarioJson);

                    console.log(usuario)
                }
                else {

                    Swal.fire({
                        title: `Usuario incorrecto`,
                        icon: "error",
                        confirmButtonText: "intentar de nuevo"
                    }).then((result) => {

                        if (result.isConfirmed) {


                            if (usuario.login === false) {

                                Swal.fire({
                                    title: "Iniciar Sesion",
                                    html: `
                        <input type="text" id="usuario-login" placeholder="correo" class="swal2-input">
                        <input type="password" id="password-login" placeholder="password" class="swal2-input">
                        `,
                                    confirmButtonText: "Iniciar Sesion"

                                }).then((result) => {

                                    if (result.isConfirmed) {

                                        const usuario_login = document.getElementById("usuario-login").value;
                                        const password_login = document.getElementById("password-login").value;

                                        const usuarioJson = localStorage.getItem("Usuario");

                                        const usuario = JSON.parse(usuarioJson);

                                        if (usuario_login === usuario.correo && password_login === usuario.password) {

                                            Swal.fire({
                                                title: `Bienvenido  ${usuario.nombre} ${usuario.apellido}`,
                                                icon: "success",
                                            })

                                            usuario.login = true;
                                            console.log(usuario)
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            } //segundo if
        })


    }//primer if
    else {
        Swal.fire({
            title: "Ya existe una sesion activa",
            text: "Para ingresar con otro usuario debera de finalizar sesion",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "finalizar sesion"
        }).then((result) => {
            if (result.isConfirmed) {


                Swal.fire({
                    title: "Sesion finalizada",
                    text: "Te esperamos pronto",
                    icon: "success"
                });

                usuario.login = false;

                let usuarioJson = JSON.stringify(usuario);

                localStorage.setItem("Usuario", usuarioJson);
                console.log(usuario)


            }
        });
    }//else


})//llave evento

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//eventos input para que aparezca la factura en tiempo real


//eventos para factura de ingreso
//input total bruto
total.addEventListener("input", () => {


    p_total_visual.innerText = (parseFloat(total.value) - parseFloat(iva.value) - parseFloat(irpf.value)) + " $";

    const span = document.getElementById("total_tiempo_real");

    span.appendChild(p_total_visual);




})

//input iva

iva.addEventListener("input", () => {

    p_iva_visual.innerText = parseFloat(iva.value) + " $";
    p_total_visual.innerText = (parseFloat(total.value) - parseFloat(iva.value)) - parseFloat(irpf.value) + " $";


    const span = document.getElementById("iva_tiempo_real");

    span.appendChild(p_iva_visual);


    console.log(p_iva_visual)
    console.log("se ha cambiado el texto" + iva.value);
})

//input irpf

irpf.addEventListener("input", () => {

    p_irpf_visual.innerText = parseFloat(irpf.value) + " $";
    p_total_visual.innerText = (parseFloat(total.value) - parseFloat(irpf.value)) - parseFloat(iva.value) + " $";

    const span = document.getElementById("irpf_tiempo_real");

    span.appendChild(p_irpf_visual);

    console.log(p_irpf_visual);
    console.log(" se ha cambiado el texto" + irpf.value);

})

// input total total

total.addEventListener("input", () => {

    p_total_total_visual.innerText = parseFloat(total.value) + " $";
    const spanTotalTotal = document.getElementById("total_total_tiempo_real");



    spanTotalTotal.appendChild(p_total_total_visual);



})





div.className = "factura-visual";

div.innerHTML = `
  
<h3>FACTURA DE INGRESO</h3>
<br>

<p>RAZON SOCIAL:</p> <span id="razon_social_tiempo_real"></span> 
<p>FECHA:</p><span id="fecha_tiempo_real"></span>
<p>CIF:</p><span id="dni_tiempo_real"></span>
<P>TOTAL BRUTO:</P><span id="total_tiempo_real"></span>
<P>I.V.A:</P> <span id="iva_tiempo_real"></span>
<P>RETENCION IRPF:</P> <span id="irpf_tiempo_real"></span>




<hr>

<p>TOTAL:</p> <span id="total_total_tiempo_real"></span>

          `;

contenedor.appendChild(div);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//eventos para factura de gastos

//input total bruto

total_gasto.addEventListener("input", function () {


    p_total_visual_gasto.innerText = (parseFloat(total_gasto.value) - parseFloat(iva_gasto.value) - parseFloat(irpf_gasto.value)) + " $";

    const span = document.getElementById("total_tiempo_real_gasto");

    span.appendChild(p_total_visual_gasto);


    console.log(p_total_visual_gasto)

})

//input iva

iva_gasto.addEventListener("input", () => {

    p_iva_visual_gasto.innerText = parseFloat(iva_gasto.value) + " $";
    p_total_visual_gasto.innerText = (parseFloat(total_gasto.value) - parseFloat(iva_gasto.value)) - parseFloat(irpf_gasto.value) + " $";


    const span = document.getElementById("iva_tiempo_real_gasto");

    span.appendChild(p_iva_visual_gasto);


    console.log(p_iva_visual_gasto)

})

//input irpf

irpf_gasto.addEventListener("input", () => {

    p_irpf_visual_gasto.innerText = parseFloat(irpf_gasto.value) + " $";
    p_total_visual_gasto.innerText = (parseFloat(total_gasto.value) - parseFloat(irpf_gasto.value)) - parseFloat(iva_gasto.value) + " $";

    const span = document.getElementById("irpf_tiempo_real_gasto");

    span.appendChild(p_irpf_visual_gasto);

    console.log(p_irpf_visual);


})

// input total total

total_gasto.addEventListener("input", () => {

    p_total_total_visual_gasto.innerText = parseFloat(total_gasto.value) + " $";
    const spanTotalTotal = document.getElementById("total_total_tiempo_real_gasto");



    spanTotalTotal.appendChild(p_total_total_visual_gasto);

    console.log("el total total es: " + p_total_total_visual.value);


})





div2.className = "factura-visual";

div2.innerHTML = `
  
<h3>FACTURA DE GASTOS</h3>
<br>

<p>RAZON SOCIAL:</p> <span id="razon_social_tiempo_real_gasto"></span> 
<p>FECHA:</p><span id="fecha_tiempo_real_gasto"></span>
<p>CIF:</p><span id="dni_tiempo_real_gasto"></span>
<P>TOTAL BRUTO:</P><span id="total_tiempo_real_gasto"></span>
<P>I.V.A:</P> <span id="iva_tiempo_real_gasto"></span>
<P>RETENCION IRPF:</P> <span id="irpf_tiempo_real_gasto"></span>

<hr>

<p>TOTAL:</p> <span id="total_total_tiempo_real_gasto"></span>

          `;




contenedor2.appendChild(div2);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//eventos para factura personalizada


//input total bruto
//input total bruto


total_personalizada.addEventListener("input", () => {


    p_total_visual_personalizada.innerText = (parseFloat(total_personalizada.value) - parseFloat(iva_personalizada.value) - parseFloat(irpf_personalizada.value)) + " $";

    const span = document.getElementById("total_tiempo_real_personalizada");

    span.appendChild(p_total_visual_personalizada);


    console.log(p_total_visual_personalizada);

})

iva_personalizada.addEventListener("input", () => {

    p_iva_visual_personalizada.innerText = parseFloat(iva_personalizada.value) + " $";
    p_total_visual_personalizada.innerText = (parseFloat(total_personalizada.value) - parseFloat(iva_personalizada.value)) - parseFloat(irpf_personalizada.value) + " $";


    const span = document.getElementById("iva_tiempo_real_personalizada");

    span.appendChild(p_iva_visual_personalizada);


    console.log(p_iva_visual_personalizada)

})

//input irpf

irpf_personalizada.addEventListener("input", () => {

    p_irpf_visual_personalizada.innerText = parseFloat(irpf_personalizada.value) + " $";

    p_total_visual_personalizada.innerText = (parseFloat(total_personalizada.value) - parseFloat(irpf_personalizada.value)) - parseFloat(iva_personalizada.value) + " $";





    const span = document.getElementById("irpf_tiempo_real_personalizada");

    span.appendChild(p_irpf_visual_personalizada);


    console.log(p_irpf_visual_personalizada);


})

// input total total

total_personalizada.addEventListener("input", () => {

    p_total_total_visual_personalizada.innerText = parseFloat(total_personalizada.value) + " $";
    const spanTotalTotal = document.getElementById("total_total_tiempo_real_personalizada");



    spanTotalTotal.appendChild(p_total_total_visual_personalizada);

    console.log("el total total es: " + p_total_total_visual_personalizada.value);


})





div3.className = "factura-visual";

div3.innerHTML = `
  
 <h3>FACTURA DE PERSONALIZADA</h3>
 <br>

 <p>RAZON SOCIAL:</p> <span class="razon-social" id="razon_social_tiempo_real_personalizada"></span> 
 <p>FECHA:</p><span id="fecha_tiempo_real_personalizada"></span>
 <p>CIF:</p><span id="dni_tiempo_real_personalizada"></span>
 <P>TOTAL BRUTO:</P><span id="total_tiempo_real_personalizada"></span>
 <P>I.V.A:</P> <span id="iva_tiempo_real_personalizada"></span>
 <P>RETENCION IRPF:</P> <span id="irpf_tiempo_real_personalizada"></span>

 <hr>
 <p>TOTAL:</p> <span id="total_total_tiempo_real_personalizada"></span>

           `;


contenedor3.appendChild(div3);


//fin mostrar en tiempo real creando una etiqueta span con un evento "input" con la informacion del total bruto de la factura y lo muestra a un lado



//funcion ocultar y mostrar div

function Ocultar() {
    let divFactura = document.getElementById("factura-ingreso");
    let divEfecto = document.getElementById("article1")

    if (divEfecto.style.display !== "none") {

        divFactura.style.display = "grid";

        console.log("Factura paso a grid");

        divEfecto.style.display = "none";

        console.log("Efecto paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
}

function Ocultar2() {
    let divFactura = document.getElementById("factura-gasto");
    let divEfecto = document.getElementById("article2")

    if (divEfecto.style.display !== "none") {

        divFactura.style.display = "grid";

        console.log("Factura paso a block");

        divEfecto.style.display = "none";

        console.log("Efecto paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
}


function Ocultar3() {
    let divFactura = document.getElementById("factura-personalizada");
    let divEfecto = document.getElementById("article3")

    if (divEfecto.style.display !== "none") {

        divFactura.style.display = "grid";

        console.log("Factura paso a block");

        divEfecto.style.display = "none";

        console.log("Efecto paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
}

function Mostrar() {
    let divFactura = document.getElementById("factura-ingreso");
    let divEfecto = document.getElementById("article1")

    if (divEfecto.style.display === "none") {


        divEfecto.style.display = "block";

        console.log("Efecto paso a block");

        divFactura.style.display = "none";

        console.log("factura paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }

}

function Mostrar2() {
    let divFactura = document.getElementById("factura-gasto");
    let divEfecto = document.getElementById("article2")

    if (divEfecto.style.display === "none") {


        divEfecto.style.display = "block";

        console.log("Efecto paso a block");

        divFactura.style.display = "none";

        console.log("factura paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }

}

function Mostrar3() {
    let divFactura = document.getElementById("factura-personalizada");
    let divEfecto = document.getElementById("article3")

    if (divEfecto.style.display === "none") {


        divEfecto.style.display = "block";

        console.log("Efecto paso a block");

        divFactura.style.display = "none";

        console.log("factura paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }

}