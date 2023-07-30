function calcular(){
    let peso= document.getElementById("peso").value;
    let altura= document.getElementById("altura").value;
    let resposta= document.getElementById("resposta");
    let resposta2= document.getElementById("resposta2");

    peso=Number(peso);
    altura= Number(altura);
    let imc= peso/(altura*altura);
    resposta.innerHTML=` Seu imc é de ${imc.toFixed(2)}`
    
    if(imc<17){
        resposta2.innerHTML=`Você está muito abaixo do peso ideal`
    } 
     if(imc>17 && imc<18.49){
        resposta2.innerHTML=`Abaixo do peso`
    } 
     if( imc>18.5 && imc<24.99){
        resposta2.innerHTML=`Peso normal`
    } 
     if(imc>25 && imc<29.99){
        resposta2.innerHTML=`Acima do peso`
    } 
    if(imc>30 && imc<34.99){
        resposta2.innerHTML=`Obesidade grau 1`
    }  
    if(imc>35 && imc<39.99){
        resposta2.innerHTML=`Obesidade grau 2`
    } 
     if(imc>40){
        resposta2.innerHTML=`Obesidade grau 3`
    }

}