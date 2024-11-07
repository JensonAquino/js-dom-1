//al click del bottone il suo colore diventa rosso
const offLamp = document.getElementById("lampOff")
const onLamp = document.getElementById("lampOn")
const BtnElem = document.getElementById("btn")

BtnElem.addEventListener("click", function () {


    //se il bttone ha la classe la rimuovo else la aggiungo
    if (onLamp.classList.contains("opacity")) {
        onLamp.classList.remove("opacity")
        BtnElem.innerHTML ="spegni"
    } else {

        onLamp.classList.add("opacity")
         BtnElem.innerHTML ="accendi"
    }
})