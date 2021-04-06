//function $(nev) {
//    return document.querySelectorAll(nev);
//}
//function ID(nev) {
//    return document.getElementById(nev);
//}
//function CLASS(nev) {
//    return document.getElementByClassName(nev);
//}
//var okj = [];
//
//
//function kiir() {
//
//    var elem = "<ul>";
//
//    for (var i = 0; i < okj.length; i++) {
//
//        elem += "<li>" + okj[i].TODO + "</li><li>" + okj[i].DATUM + "</li><li>" + okj[i].ALLAPOT + "</li><li><button class='torol' id='" + okj[i].ID + "'>Torol</button></li>";
//
//    }
//    elem += "</ul>";
//
//    ID("okjtodo").innerHTML = elem;
//    for (var i = 0; i < okj.length; i++) {
//        $(".torol")[i].addEventListener('click', torol, false);
//    }
//    console.log(elem);
//
//}
//function Rendez() {
//
//    console.log("Rendeztem");
//    okj.sort(function (a, b) {
//
//
//        return Number(b.TODO < a.TODO) - 0.5;
//    }
//
//    );
//
//    kiir();
//}
//function add() {
//    console.log("ADD");
//    var todo = ID("todo").value;
//    var datum = ID("datum").value;
//
//    var xhttp = new XMLHttpRequest();
//
//    xhttp.onreadystatechange = function () {
//        if (this.readyState === 4 && this.status === 200) {
//            // okj = JSON.parse(this.responseText);
//            //  console.log(this.responseText);
//            // console.log(okj);
//            console.log("sikeres küldés");
//
//
//
//            //  console.log(okj);
//
//        }
//    };
//
//
//    xhttp.open("GET", "beir.php?todo=" + todo + "&datum=" + datum, true);
//    //+"&datum="+datum;
//    //  var kuldendoadatok = "todo="+todo;
//    xhttp.send();
//    //console.log(kuldendoadatok);

//}
//function torol() {
//    console.log("torol");
//    var id2 = this.id;
//    console.log(id2);
//
//
//    var xhttp = new XMLHttpRequest();
//
//    xhttp.onreadystatechange = function () {
//        if (this.readyState === 4 && this.status === 200) {
//   
//            console.log("sikeres törlés");
//
//
//
//            //  console.log(okj);
//
//        }
//    };
//
//
//    xhttp.open("DELETE", "torol.php?id=" + id2, true);
//
//    xhttp.send();
//// 
//
//
//}
//function adat_beolvas() {
//    var xhttp = new XMLHttpRequest();
//
//    xhttp.onreadystatechange = function () {
//        if (this.readyState === 4 && this.status === 200) {
//            okj = JSON.parse(this.responseText);
//            console.log(this.responseText);
//            console.log(okj);
//            kiir();
//
//
//
//            //  console.log(okj);
//
//        }
//    };
//
//
//    xhttp.open("GET", "feldolgoz.php", true);
//    xhttp.send();
//
//}
//function init() {
//    ID("add").addEventListener('click', add, false);
//
//    adat_beolvas();
////    //ID('add').addEventListener("click", hozzaad, false);
////    Rendez();
////kiir();
//
//
//}
//window.addEventListener('load', init, false);
//
//
$(function () {
 $("article").delegate(".modosit","click", modosit);
beolvas();
 $("article").delegate(".torol","click", torol);
  $("#add").on("click", add);
});

var okj = [];

function beolvas() {
  $.ajax({
        type: "POST",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result); /*JSONn formátumban várjuk az AB eredményeit*/
            okj = JSON.parse(result);
            console.log(okj); /*JSONn formátumban várjuk az AB eredményeit*/
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });
            }
        function kiir(){
            $("article").empty();
                var elem = "<ul>";

    for (var i = 0; i < okj.length; i++) {

        elem += "<li>" + okj[i].TODO + "</li><li>" + okj[i].DATUM + "</li><li>" + okj[i].ALLAPOT + "</li><li><img src=\"kuka.png\" id='" + okj[i].ID + "' alt=\"\" class='torol'/></li><li><img src=\"pipa.png\" id='" + okj[i].ID + "' alt=\"\" class='modosit'/></li>";

    }
    elem += "</ul>";

      $("article").append(elem);
//    for (var i = 0; i < okj.length; i++) {
//        $(".torol")[i].addEventListener('click', torol, false);
//    }
    console.log(elem);
            
    
        }
        function torol(){
            
            var id = $(this).attr("ID");

    $.ajax({
        type: "GET",
        url: "torol.php?ID=" + id,
        success: function () {
            console.log("Törlés");
            beolvas();
        },
        error: function () {
            alert("Hiba az adatok törlésekor!");
        }
    });
            
        }
        
        function add() {
            console.log("ADD");
             var todo = {

        todo: $("#todo").val(),
        datum: $("#datum").val()
     

    };



    $.ajax({
        type: "POST",
        url: "beir.php",
        data: todo,
        success: function (ujtodo) {

            console.log(ujtodo);
            okj = JSON.parse(ujtodo);
            console.log(okj);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok mentésekor");
        }
    });
        }
function modosit(){
    console.log("MÉG SEMMIT");
}