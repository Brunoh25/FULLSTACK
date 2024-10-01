/* let nome=prompt("Insira seu nome");
let idade=parseInt(prompt("Insira sua idade"));
let ano_atual=2024;
let ano_nasc= ano_atual-idade;
let resposta="Olá, "+nome+". O seu ano de nascimento é: "+ano_nasc;
document.getElementById("resp").innerHTML=resposta; */

function soma(a,b){
    return a+b;
}
/* let x=parseInt(prompt("Insira o primeiro valor: "));
let y=parseInt(prompt("Insira o segundo valor: "));
document.getElementById("resp").innerHTML=soma(x,y);  */

function ex2(){
    num=document.getElementById("i1").value;
    document.getElementById("r2").innerHTML=(num*3);
}

function ex3(){
    let num1=parseInt(document.getElementById("i1").value);
    let num2=parseInt(document.getElementById("i2").value);
    document.getElementById("r3").innerHTML=num1+num2;
}

function ex4(){
    let num1=parseInt(document.getElementById("i1").value);
    let num2=parseInt(document.getElementById("i2").value);
    if(num1<0 || num2<0){
        document.getElementById("r4").innerHTML=num1+num2;
    }
    else{
        document.getElementById("r4").innerHTML=num1*num2;
    }
}

function exerc1(){
    document.getElementById("resp1").innerHTML=Math.floor(Math.random()*50);
}

function exerc2(){
    let num=parseInt(document.getElementById("i10").value);
    if(num>=0 && num<=10){
        document.getElementById("resp2").innerHTML="Insuficiente";
    }
    else if(num>10 && num<=15){
        document.getElementById("resp2").innerHTML="Bom";
    }
    else{
        document.getElementById("resp2").innerHTML="Muito Bom";
    }
}