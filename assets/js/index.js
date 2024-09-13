/********** ESTE BLOQUE DECLARA VARIABLES PARA MANIPULAR ELEMENTOS HTML *********/

// CREO UNA VARIABLE, PARA MANIPULAR MI ELEMENTO HTML
let htmlPrecioInicial = document.querySelector('.precio-inicial');
// DECLARO LA VARIABLE PARA LUEGO OCUPARLA
let htmlValorTotal = document.querySelector('.valor-total');
// DECLARO LA VARIABLE DE CANTIDAD
let htmlCantidad = document.querySelector('.cantidad');
// DECLARO LAS VARIABLES PARA LOS BOTONES
const htmlBotonMas = document.querySelector('.botonMas');
const htmlBotonMenos = document.querySelector('.botonMenos');


/**** BLOQUE CON VARIABLES PARA LOGICA ******/
// Precio base que cuesta el notebook
const precioInicial = 400000;
// Variable para contener el valor final a pagar
let valorTotalFinal = 0;
// Variable para manejar la cantidad de notebooks
let cantidadNotebooks = 0;

// AL ELEMENTO QUE ESTAMOS MANIPULANDO, LE DAMOS EL VALOR DE LA VARIABLE DECLARADA AL PRINCIPIO
htmlPrecioInicial.innerHTML = precioInicial;


/** 
 *  Una vez, declaradas las variables de los elementos HTML
 *  Como también, declaradas las variables de calculo matemático
 *  Y a su vez, teniendo los calculos listos
 *  Ahora procedemos a mostrar los resultados en nuestro HTML
*/
const actualizarHTML = (() => {
    // Tomamos el elemento HTML de cantidad, y le asignamos la variable correspondiente
    htmlCantidad.innerHTML = cantidadNotebooks;
    htmlValorTotal.innerHTML = valorTotalFinal;
});

// FUNCION PARA CALCULAR EL VALOR TOTAL
const calcularTotal = (() => {
  valorTotalFinal = precioInicial * cantidadNotebooks;
  actualizarHTML();
});

/***** BLOQUE CON LA LOGICA EN SI *****/
// EL BOTON MAS, AL HACER CLICK, HAGA ALGO
htmlBotonMas.addEventListener('click', () => {
  cantidadNotebooks = cantidadNotebooks + 1;
  calcularTotal();
});

// EL BOTON MENOS, AL HACER CLICK, HAGA ALGO
htmlBotonMenos.addEventListener('click', () => {
  if (cantidadNotebooks > 0) {
    // CANTIDAD ES MAYOR A 0, SE PUEDE RESTAR
    cantidadNotebooks = cantidadNotebooks - 1;
    calcularTotal();
  }
  // NO ES NECESARIO HACE MÁS NADA.
});




