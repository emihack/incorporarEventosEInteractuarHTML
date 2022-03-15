//Eleccion de provincia en formulario de ingreso

//evento onload
window.onload = function() {
//array
    let provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza","Misiones", "Neuquen","Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero","Tierra del fuego", "Tucumán","CABA"];
//for each
    provincias.forEach(element => {
       let opcion = document.createElement("option");
        document.querySelector("#mySelect").appendChild(opcion);
        opcion.innerHTML = element;
    });
   
};

//funcion para enviar datos
function capturar(e) {
    e.preventDefault();
    let usuario = document.getElementById("user");
    let password = document.getElementById("pass");
    if( usuario.value != "" && password.value != ""){
        let mensaje1 = document.getElementById("mensaje1");
        mensaje1.innerHTML = `<h1>HERMES ASESORES DE SEGUROS</h1>`;
        mensaje1.style.textAlign = "center";
        mensaje1.style.fontSize = "40px";
        mensaje1.style.color = "dodgerblue";
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `<h1>Bienvenido/a al sistema ${usuario.value}</h1>`;
        mensaje.style.textAlign = "center";
        mensaje.style.fontSize = "25px";
        mensaje.style.color = "dodgerblue";
    }
    else{  
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `<h1>ERROR DEBE LOGUEARSE PARA INGRESAR</h1>`;
        mensaje.style.textAlign = "center";
        mensaje.style.fontSize = "20px";
        mensaje.style.color = "blue";
     }
  }
//evento click
let enviar = document.getElementById("botons");
enviar.addEventListener("click", capturar);



