function $(nev) {
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}
function CLASS(nev) {
    return document.getElementByClassName(nev);
}
var okj = [];


function kiir() {
 
    var elem = "";

    for (var i = 0; i < okj.length; i++) {
        
        elem += "<h2>"+okj[i].TODO+"</h2><h4>"+okj[i].DATUM+"</h4><h4>"+okj[i].ALLAPOT+"</h4><button class='torol'>Torol</button>";

    }
    
 ID("okjtodo").innerHTML = elem;
    console.log(elem);

}
function Rendez() {

    console.log("Rendeztem");
    okj.sort(function (a, b) {


        return Number(b.TODO < a.TODO) - 0.5;
    }

    );

    kiir();
}
function adat_beolvas() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            okj = JSON.parse(this.responseText);
            console.log(this.responseText);
            console.log(okj);
           // kiir();
            


         //  console.log(okj);

        }
    };


    xhttp.open("GET", "okj.php", true);
    xhttp.send();

}
function init() {

adat_beolvas();
//    //ID('add').addEventListener("click", hozzaad, false);
//    Rendez();
//kiir();


}
window.addEventListener('load', init, false);


