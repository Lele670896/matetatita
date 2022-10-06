function send(){
    
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

        Resut= parseInt(number1)*parseInt(number2);
    document.getElementById("resu").innerHTML = "O resultado é " + Resut ;
}