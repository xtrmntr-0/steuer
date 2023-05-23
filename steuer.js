"use strict"

window.addEventListener("load", function(){



    let button = document.getElementById("berechne");
    button.addEventListener("click", function(){
        let netto = document.getElementById("netto");
        let steuersatz = document.getElementById("steuersatz");

        let steuer = ((netto.value / 100) * steuersatz.value);
        let brutto = (parseFloat(netto.value) + parseFloat(steuer));

        document.getElementById("steuer").value = steuer.toFixed(2);
        document.getElementById("brutto").value = brutto.toFixed(2);
         
        
    });

});