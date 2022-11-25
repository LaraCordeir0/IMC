function calc()
{
   
    var e1 = parseFloat(document.getElementById("peso").value);
    var e2 = parseFloat(document.getElementById("altura").value);
    document.getElementById("res").innerHTML = "SEU IMC É: " + (e1 /(e2*e2)).toFixed(2);

    var e3 = e1 / (e2*e2).toFixed(2);

    var img = document.getElementById("img");


    if(e3 >= 0 && e3 <18.5){
        document.getElementById("qualimc").innerHTML = 'Abaixo do peso';
        img.src = "imagens/abaixo.jpg"
    }

    else if(e3 >= 18.5 && e3 <24.9){
        document.getElementById("qualimc").innerHTML = 'Peso normal';
        img.src = "imagens/normal.jpg"
    }

    else if(e3 >= 25 && e3 <29.9){
        document.getElementById("qualimc").innerHTML = 'Acima do peso';
        img.src = "imagens/sobrepeso.jpg"
    }

    else if(e3 >= 30 && e3 <34.9){
        document.getElementById("qualimc").innerHTML = 'Obesidade grau I';
        img.src = "imagens/grauI.jpg"
    }

    else if(e3 >= 35 && e3 <39.9){
        document.getElementById("qualimc").innerHTML = 'Obesidade grau II';
        img.src = "imagens/grauII.jpg"
    }   

    else if(e3 >= 40){
        document.getElementById("qualimc").innerHTML = 'Obesidade grau III';
        img.src = "imagens/grauIII.jpg"
    }
}





