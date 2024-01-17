
//vairiables
const IVA = 0.21;
const IRPF = 0.20;
let totalIngresoBruto=0;
let totalIngreso=0;
let totalIva=0;
let totalIrpf=0;
let ok=0;
let totalGasto=0;
const arrayFacturasIngreso=[];
const arrayFacturaGastos=[];
const arrayFacturaPersonalizada=[];



//clases
class FacturaIngreso{
    constructor(concepto,fecha,total,irpf,iva ){

        this.concepto=concepto;
        this.fecha=fecha;
        this.total=total;
        this.irpf=irpf;
        this.iva=iva;
    }

    sumarATotal(){

        totalIngreso+=this.neto;
        totalIva+=this.iva;
        totalIrpf+=this.irpf;
        totalIngresoBruto+=this.ingreso;
        
        console.log("se han cargado los datos de la factura");
    }
}

 class FacturaGasto{
     constructor( concepto,fecha,total,irpf,iva ){

       
        this.concepto=concepto;
        this.fecha=fecha;
         this.total=total;
         this.irpf=irpf;
         this.iva=iva;
     }

     sumarATotal(){

       
         totalIva-=this.iva;
        totalIrpf-=this.irpf;
         totalGasto+=this.gasto;
         totalIngreso+=this.deducciones
        console.log("se han cargado los datos de la factura");
        
    }
 }

   class FacturaPersonalizada{

     constructor(razon_social, dni,fecha,total,irpf,iva ){

         this.razon_social=razon_social;
         this.dni=dni;
         this.fecha=fecha;
        this.total=total;
        this.irpf=irpf;
         this.iva=iva;
 }

     sumarATotal(){

       
         totalIva-=this.iva;
         totalIrpf-=this.irpf;
         totalGasto+=this.gasto;
         totalIngreso+=this.deducciones
         console.log("se han cargado los datos de la factura");
        
    }
   }


// class Usuario{
//     constructor(nombre,apellido,dni,correo,password){

//         this.nombre=nombre;
//         this.apellido=apellido;
//         this.dni=dni;
//         this.correo=correo;
//         this.password=password;
//         totalIngreso;
//         totalIva;
//         totalIrpf;
  
//     }
// }

//creacion de usuario


// let nombreEntrada= prompt("Ingrese nombre...");

// let apellidoEntrada = prompt("Ingrese apellido...");

// let dniEntrada= parseInt(prompt("Ingrese dni..."));

// let correoEntrada = prompt("ingrese correo");

// const Usuario1= new Usuario(nombreEntrada,apellidoEntrada,dniEntrada,correoEntrada);



//FUNCIONES

function cargarFacturaIngreso(){

    let concepto= document.getElementById("concepto-ingresos");
    let fecha = document.getElementById("fecha-ingresos");
    let total = document.getElementById("total-ingresos");
    let irpf = document.getElementById("irpf-ingresos");
    let iva = document.getElementById("iva-ingresos");


  //guarda todos los datos de los input de factura de ingreso en un arrays
    

    const facturaIngreso = new FacturaIngreso(concepto.value,fecha.value,irpf.value,total.value,iva.value);

    arrayFacturasIngreso.push(facturaIngreso);

    //pasamos el arrays a JSON
    let facturaIngresoJson = JSON.stringify(facturaIngreso);
    localStorage.setItem("factura ingreso" , facturaIngresoJson);

    

    console.log(facturaIngresoJson);

    console.log(arrayFacturasIngreso);

    //para limpiar los inputs de la factura al darle al boton cargar

   
    concepto.value = "";
    fecha.value = "";
    total.value = 0,0;
    irpf.value = 0,0;
    iva.value = 0,0;

    p_total_visual.innerText = "";
    p_irpf_visual.innerText = "";
    p_iva_visual.innerText = "";
    p_total_total_visual.innerText = "";

    alert("la facutara se guardado correctamente");


 
  
}


function cargarFacturaGasto(){

    let concepto = document.getElementById("concepto-gasto");
    let fecha = document.getElementById("fecha-gasto");
    let total = document.getElementById("total-gasto");
    let irpf = document.getElementById("irpf-gasto");
    let iva = document.getElementById("iva-gasto");


  //guarda todos los datos de los input de factura de ingreso en un arrays
    

    const facturaGasto = new FacturaGasto(concepto.value,fecha.value,irpf.value,total.value,iva.value);

    arrayFacturaGastos.push(facturaGasto);

    //pasamos el arrays a JSON
    let facturaGastoJson = JSON.stringify(facturaGasto);

    localStorage.setItem("factura gasto" ,facturaGastoJson);

    

    console.log(facturaGastoJson);

    console.log(arrayFacturaGastos);

    //para limpiar los inputs de la factura al darle al boton cargar

   
    concepto.value = "";
    fecha.value = "";
    total.value = 0,0;
    irpf.value = 0,0;
    iva.value = 0,0;

    p_total_visual.innerText = "";
    p_irpf_visual.innerText = "";
    p_iva_visual.innerText = "";
    p_total_total_visual.innerText = "";

    alert("la facutara se guardado correctamente");


 
  
}


function cargarFacturaPersonalizada(){

    let razonSocial= document.getElementById("razonSocial-Personalizada");
    let dni= document.getElementById("dni-Personalizada")
    let fecha = document.getElementById("fecha-Personalizada");
    let total = document.getElementById("total-Personalizada");
    let irpf = document.getElementById("irpf-Personalizada");
    let iva = document.getElementById("iva-Personalizada");


  //guarda todos los datos de los input de factura de ingreso en un arrays
    

    const facturaPersonalizada = new FacturaPersonalizada(razonSocial.value,dni.value, fecha.value,irpf.value,total.value,iva.value);

    arrayFacturaPersonalizada.push(facturaPersonalizada);

    //pasamos el arrays a JSON
    let facturaPersonalizadaJson = JSON.stringify(facturaPersonalizada);

    localStorage.setItem("factura personalizada", facturaPersonalizadaJson)

    

    console.log(prueba);

    console.log(facturaPersonalizada);

    //para limpiar los inputs de la factura al darle al boton cargar

   
    razonSocial.value="";
    fecha.value = "";
    dni.value= "";
    total.value = 0,0;
    irpf.value = 0,0;
    iva.value = 0,0;

    p_total_visual.innerText = "";
    p_irpf_visual.innerText = "";
    p_iva_visual.innerText = "";
    p_total_total_visual.innerText = "";

    alert("la facutara se guardado correctamente");


 
  
}



//nodos
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

    
    const total_personalizada = document.getElementById("total-personalizada");
    const irpf_personalizada = document.getElementById("irpf-personalizada");
    const iva_personalizada = document.getElementById("iva-personalizada");


    

    //variables factura ()

    
    let total_irpf;
    let total_iva; 

    //creacion de nodos para la factura visual ingreso

    let p_razon_social_visual=document.createElement("span");
    let p_dni_visual=document.createElement("span");
    let p_fecha_visual=document.createElement("span");
    let p_total_visual=document.createElement("span");
    let p_iva_visual=document.createElement("span");
    let p_irpf_visual=document.createElement("span");
    let p_total_total_visual=document.createElement("span");

    //creacion de nodos para la factura visual de gasto 
    let p_razon_social_visual_gasto=document.createElement("span");
    let p_dni_visual_gasto=document.createElement("span");
    let p_fecha_visual_gasto=document.createElement("span");
    let p_total_visual_gasto=document.createElement("span");
    let p_iva_visual_gasto=document.createElement("span");
    let p_irpf_visual_gasto=document.createElement("span");
    let p_total_total_visual_gasto=document.createElement("span");

    //creacion de nodos para la factura visual de personalizada

    let p_razon_social_visual_personalizada=document.createElement("span");
    let p_dni_visual_personalizada=document.createElement("span");
    let p_fecha_visual_personalizada=document.createElement("span");
    let p_total_visual_personalizada=document.createElement("span");
    let p_iva_visual_personalizada=document.createElement("span");
    let p_irpf_visual_personalizada=document.createElement("span");
    let p_total_total_visual_personalizada=document.createElement("span");




    
 

    //eventos input para que aparezca la factura en tiempo real



    //eventos para factura de ingreso
    //input total bruto
    total.addEventListener("input", function() {

       
        p_total_visual.innerText= (parseFloat(total.value) - parseFloat(iva.value)) + " $" ;

        const span= document.getElementById("total_tiempo_real");

        span.appendChild(p_total_visual);
       
       
     
      
    })

    //input iva

    iva.addEventListener("input", () =>{

        p_iva_visual.innerText= parseFloat(iva.value) + " $" ;
        p_total_visual.innerText= (parseFloat(total.value) - parseFloat(iva.value)) +" $"  ;


        const span= document.getElementById("iva_tiempo_real");

        span.appendChild(p_iva_visual);
       
       
       console.log(p_iva_visual)
       console.log("se ha cambiado el texto" + iva.value);
    })

    //input irpf

    irpf.addEventListener("input", ()=> {

        p_irpf_visual.innerText= parseFloat(irpf.value) + " $";

        const span =document.getElementById("irpf_tiempo_real");

        span.appendChild(p_irpf_visual);

        console.log(p_irpf_visual);
        console.log(" se ha cambiado el texto" + irpf.value);

    })

    // input total total

    total.addEventListener("input", ()=> {

        p_total_total_visual.innerText= parseFloat(total.value) + " $";
        const spanTotalTotal=document.getElementById("total_total_tiempo_real");

   

    spanTotalTotal.appendChild(p_total_total_visual);
    console.log("el total total es: " + p_total_total_visual.value);


    })

    



div.className="factura-visual";

div.innerHTML= `
  
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


           //eventos para factura de gastos

    //input total bruto

    total_gasto.addEventListener("input", function() {

       
        p_total_visual_gasto.innerText= (parseFloat(total_gasto.value) - parseFloat(iva_gasto.value)) + " $" ;

        const span= document.getElementById("total_tiempo_real_gasto");

        span.appendChild(p_total_visual_gasto);
       
       
       console.log(p_total_visual_gasto)
      
    })

    //input iva

    iva_gasto.addEventListener("input", () =>{

        p_iva_visual_gasto.innerText= parseFloat(iva_gasto.value) + " $" ;
        p_total_visual_gasto.innerText= (parseFloat(total_gasto.value) - parseFloat(iva_gasto.value)) +" $"  ;


        const span= document.getElementById("iva_tiempo_real_gasto");

        span.appendChild(p_iva_visual_gasto);
       
       
       console.log(p_iva_visual_gasto)
       
    })

    //input irpf

    irpf_gasto.addEventListener("input", ()=> {

        p_irpf_visual_gasto.innerText= parseFloat(irpf_gasto.value) + " $";

        const span =document.getElementById("irpf_tiempo_real_gasto");

        span.appendChild(p_irpf_visual_gasto);

        console.log(p_irpf_visual);
  

    })

    // input total total

    total_gasto.addEventListener("input", ()=> {

        p_total_total_visual_gasto.innerText= parseFloat(total_gasto.value) + " $";
        const spanTotalTotal=document.getElementById("total_total_tiempo_real_gasto");

   

    spanTotalTotal.appendChild(p_total_total_visual_gasto);

    console.log("el total total es: " + p_total_total_visual.value);


    })

    



div2.className="factura-visual";

div2.innerHTML= `
  
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



           //eventos para factura personalizada
    //input total bruto

//     total_personalizada.addEventListener("input", function() {

       
//         p_total_visual_personalizada.innerText= (parseFloat(total_personalizada.value) - parseFloat(iva_personalizada.value)) + " $" ;

//         const span= document.getElementById("total_tiempo_real_personalizada");

//         span.appendChild(p_total_visual_personalizada);
       
       
//        console.log(p_total_visual_personalizada)
      
//     })

//     //input iva

//     iva_gasto.addEventListener("input", () =>{

//         p_iva_visual_gasto.innerText= parseFloat(iva_gasto.value) + " $" ;
//         p_total_visual_gasto.innerText= (parseFloat(total_gasto.value) - parseFloat(iva_gasto.value)) +" $"  ;


//         const span= document.getElementById("iva_tiempo_real_gasto");

//         span.appendChild(p_iva_visual_gasto);
       
       
//        console.log(p_iva_visual_gasto)
       
//     })

//     //input irpf

//     irpf_gasto.addEventListener("input", ()=> {

//         p_irpf_visual_gasto.innerText= parseFloat(irpf_gasto.value) + " $";

//         const span =document.getElementById("irpf_tiempo_real_gasto");

//         span.appendChild(p_irpf_visual_gasto);

//         console.log(p_irpf_visual);
  

//     })

//     // input total total

//     total_gasto.addEventListener("input", ()=> {

//         p_total_total_visual_gasto.innerText= parseFloat(total_gasto.value) + " $";
//         const spanTotalTotal=document.getElementById("total_total_tiempo_real_gasto");

   

//     spanTotalTotal.appendChild(p_total_total_visual_gasto);

//     console.log("el total total es: " + p_total_total_visual.value);


//     })

    



// div3.className="factura-visual";

// div3.innerHTML= `
  
// <h3>FACTURA DE GASTOS</h3>
// <br>

// <p>RAZON SOCIAL:</p> <span id="razon_social_tiempo_real_gasto"></span> 
// <p>FECHA:</p><span id="fecha_tiempo_real_gasto"></span>
// <p>CIF:</p><span id="dni_tiempo_real_gasto"></span>
// <P>TOTAL BRUTO:</P><span id="total_tiempo_real_gasto"></span>
// <P>I.V.A:</P> <span id="iva_tiempo_real_gasto"></span>
// <P>RETENCION IRPF:</P> <span id="irpf_tiempo_real_gasto"></span>

// <hr>

// <p>TOTAL:</p> <span id="total_total_tiempo_real_gasto"></span>

//           `;

//           contenedor3.appendChild(div3);
       

 //fin mostrar en tiempo real creando una etiqueta span con un evento "input" con la informacion del total bruto de la factura y lo muestra a un lado



//funcion ocultar y mostrar div

function Ocultar(){
    let divFactura =document.getElementById("factura-ingreso");
    let divEfecto = document.getElementById("article1")

    if(divEfecto.style.display !== "none"){

        divFactura.style.display="block";

        console.log("Factura paso a block");

        divEfecto.style.display="none";

        console.log("Efecto paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
}

function Ocultar2(){
    let divFactura =document.getElementById("factura-gasto");
    let divEfecto = document.getElementById("article2")

    if(divEfecto.style.display !== "none"){

        divFactura.style.display="block";

        console.log("Factura paso a block");

        divEfecto.style.display="none";

        console.log("Efecto paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
}


function Ocultar3(){
    let divFactura =document.getElementById("factura-personalizada");
    let divEfecto = document.getElementById("article3")

    if(divEfecto.style.display !== "none"){

        divFactura.style.display="block";

        console.log("Factura paso a block");

        divEfecto.style.display="none";

        console.log("Efecto paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
}

function Mostrar(){
    let divFactura =document.getElementById("factura-ingreso");
    let divEfecto = document.getElementById("article1")

    if(divEfecto.style.display === "none" ){


        divEfecto.style.display="block";

        console.log("Efecto paso a block");

        divFactura.style.display="none";
        
        console.log("factura paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
    
}

function Mostrar2(){
    let divFactura =document.getElementById("factura-gasto");
    let divEfecto = document.getElementById("article2")

    if(divEfecto.style.display === "none" ){


        divEfecto.style.display="block";

        console.log("Efecto paso a block");

        divFactura.style.display="none";
        
        console.log("factura paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
    
}

function Mostrar3(){
    let divFactura =document.getElementById("factura-personalizada");
    let divEfecto = document.getElementById("article3")

    if(divEfecto.style.display === "none" ){


        divEfecto.style.display="block";

        console.log("Efecto paso a block");

        divFactura.style.display="none";
        
        console.log("factura paso a none");

        console.log("SE OCULTA DIV EFECTO, APARECE DIV FACTURA")

    }
    
}