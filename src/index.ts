let PrecioUnitario = document.getElementById("PrecioUnitario");
let Cantidad = document.getElementById("Cantidad");
let Mes = document.getElementById("Mes");

let boton = document.getElementById("Boton");

function descuento() {
  if (Number(Mes.value) === 10) {
    let totalsindescuento =
      Number(PrecioUnitario.value) * Number(Cantidad.value);
    console.log(totalsindescuento);
    let descuento: number;
    descuento = Number(PrecioUnitario.value) * Number(Cantidad.value) * 0.15;
    console.log(descuento);
    let totalcondescuento = totalsindescuento - descuento;
    console.log(totalcondescuento);
  } //completar con else
}

boton?.addEventListener("click", descuento);
