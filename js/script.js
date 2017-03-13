// JavaScript source code
var xmlhttp = new XMLHttpRequest();
var url = "data/jason.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        FuncionDiv(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function FuncionDiv(arr) {
    var divPrincipal = document.getElementById("id1");
    for (i = 0; i < arr.length; i++) {
    //Creacion del a
    var Enlace = document.createElement("a");
    Enlace.setAttribute("href",arr[i].url);
    Enlace.setAttribute("class", "cart") ;
    Enlace.setAttribute("target","_blank");
    //Creacion de p
    var Parrafo =document.createElement("p");
    Parrafo.setAttribute("class", "ss");
    //Creacion del contenido del p
    var contenidoP=document.createTextNode(arr[i].Titulo);
    //Creacion del img
    var imagen =document.createElement("img");
    imagen.setAttribute("src",arr[i].img);
    imagen.setAttribute("class","cofre");
    imagen.setAttribute("alt",arr[i].Textoimagen);
    
    //Insercción de los elementos creados en sus elementos padres
    divPrincipal.appendChild(Enlace);
    Enlace.appendChild(Parrafo);
    Parrafo.appendChild(contenidoP);
    Enlace.appendChild(imagen);
    }

}