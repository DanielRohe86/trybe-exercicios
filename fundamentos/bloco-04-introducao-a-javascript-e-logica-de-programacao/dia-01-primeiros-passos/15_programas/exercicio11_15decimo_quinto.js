//parte1
let salarioBruto;
let descontoINSS;
let descontoIR;

let salarioLiquido = salarioBruto-descontoINSS-descontoIR

//parte2
if(salarioBruto<=1556.94){
    console.log(descontoINSS=8/100*salarioBruto)
}else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
    console.log(descontoINSS=9/100*salarioBruto)
}else if(salarioBruto>=2594.93 && salarioBruto<=5.189.82){
    console.log(descontoINSS=11/100*salarioBruto)
}else{
    console.log(descontoINSS=570.88)
}

//parte3


IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.