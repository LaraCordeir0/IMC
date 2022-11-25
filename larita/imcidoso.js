function calc()
{
   
    var e1 = parseFloat(document.getElementById("peso").value);
    var e2 = parseFloat(document.getElementById("altura").value);
    document.getElementById("res").innerHTML = "SEU IMC É: " + (e1 /(e2*e2)).toFixed(2);

    var e3 = e1 / (e2*e2).toFixed(2);

    var img = document.getElementById("img1");


    if(e3 >= 0 && e3 <22){
        document.getElementById("qualimc").innerHTML = 'Abaixo do peso';
        img.src = "idoso.png"
    }

    else if(e3 >= 22 && e3 <27){
        document.getElementById("qualimc").innerHTML = 'Peso Adequado';
        img.src = "idoso.png"
    }

    else if(e3 >= 27){
        document.getElementById("qualimc").innerHTML = 'Acima do peso';
        img.src = "idoso.png"
    }
}