let km = parseInt(document.getElementById("km"));
let età = parseInt(document.getElementById("età"));
const btn = document.querySelector("button");
const kmOut = document.getElementById("kmOut");
const etàOut = document.getElementById("etàOut");
const prezzoOut = document.getElementById("prezzoOut")
const scontoOut = document.getElementById("scontoOut")
const totaleOut = document.getElementById("totaleOut")

const prezzoAlKm = 0.267113;



btn.addEventListener("click", function () {
    km = parseInt(document.getElementById("km").value);
    età = parseInt(document.getElementById("età").value);


    let prezzo = prezzoAlKm * km;

    prezzoOut.innerHTML = ("Prezzo: " + (prezzo.toFixed(2)) + " €")

    let sconto = 0;

    scontoOut.innerHTML = ("Sconto applicato: Nessuno ")

    if (età < 21) {
        sconto = 24.552;
        scontoOut.innerHTML = ("Sconto applicato:: " + (sconto.toFixed(0)) + " %")
    } else if (età > 63) {
        sconto = 37.893;
        scontoOut.innerHTML = ("Sconto applicato:: " + (sconto.toFixed(0)) + " %")
    }



    prezzo = prezzo - ((prezzo / 100) * sconto);


    kmOut.innerHTML = ("KM da percorrere: " + km)
    etàOut.innerHTML = ("Età del passeggero: " + età)

    totaleOut.innerHTML = ("Totale: " + (prezzo.toFixed(2)) + " €")
})


