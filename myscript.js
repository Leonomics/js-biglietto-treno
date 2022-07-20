
/*VARIABLES*/
const pricePerKm = 0.21;
const underagedDiscount = 0.2;
const over65Discount = 0.4;
let prezzoBiglietto = 0;


let numeroChilometri = prompt("Quanti chilometri desidera percorrere?");
console.log("numeroChilometri: " + numeroChilometri);
let eta = prompt("Quanti anni ha?");
console.log("eta: " + eta);

numeroChilometri = parseInt(numeroChilometri);
eta = parseInt(eta);

const title = document.getElementById("title");

if(isNaN (eta )) {
    title.innerHTML = "please only enter numbers";
    console.log("eta is not a number")
}
if(isNaN (numeroChilometri )) {
    title.innerHTML = "please only enter numbers";
    console.log("numeroChilometri is not a number");
}
if(!isNaN(eta && numeroChilometri)) {
    if(eta<0 || numeroChilometri<0)   {
        title.innerHTML = "please enter a valid number";
    }
    else if(eta>0 && eta<18) {
        prezzoBiglietto= (numeroChilometri * pricePerKm) - ((numeroChilometri * pricePerKm) * underagedDiscount);
        prezzoBiglietto = Math.round((prezzoBiglietto + Number.EPSILON) * 100) / 100
        
        title.innerHTML = "Il prezzo è: " + prezzoBiglietto + "€";
    }
    else if(eta>=18 && eta<66) {
        prezzoBiglietto= (numeroChilometri * pricePerKm);
        prezzoBiglietto = Math.round((prezzoBiglietto + Number.EPSILON) * 100) / 100
        
        title.innerHTML = "Il prezzo è: " + prezzoBiglietto + "€";
    }
    else if(eta>=66) {
        prezzoBiglietto= (numeroChilometri * pricePerKm) - ((numeroChilometri * pricePerKm) * over65Discount);
        prezzoBiglietto = Math.round((prezzoBiglietto + Number.EPSILON) * 100) / 100
        
        title.innerHTML = "Il prezzo è: " + prezzoBiglietto + "€";
    }
    else    {
        title.innerHTML = "Something went wrong";
    }
}
