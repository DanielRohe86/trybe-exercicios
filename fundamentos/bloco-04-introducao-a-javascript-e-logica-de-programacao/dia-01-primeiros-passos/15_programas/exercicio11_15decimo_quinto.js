//parte1
let salarioBruto=10000
let salarioBase;
let descontoINSS;
let descontoIR;
let salarioLiquido;

//let salarioBase = salarioBruto-descontoINSS

//parte2
if(salarioBruto<=1556.94){
    console.log(descontoINSS=8/100*salarioBruto)
}else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
    console.log(descontoINSS=9/100*salarioBruto)
}else if(salarioBruto>=2594.93 && salarioBruto<=5189.82){
    console.log(descontoINSS=11/100*salarioBruto)
}else{
    console.log(descontoINSS=570.88)
}

console.log(descontoINSS);

console.log(salarioBase = salarioBruto-descontoINSS);

//parte3 (está com erro)

if(salarioBase>=1903.99 && salarioBase<=2826.65){
    console.log(descontoIR=7.5/100*salarioBruto-142.9)
}else if(salarioBase>=2826.66 && salarioBase<=3751.05){
    console.log(descontoIR=15/100*salarioBruto-354.8)
}else if(salarioBase>=3751.06 && salarioBase<=4664.68){
    console.log(descontoIR=22.5/100*salarioBruto-636.13) 
}else(salarioBase>=4664.69){
    console.log(descontoIR=27.5/100*salarioBruto-869.36)
}
    


console.log(descontoIR);

console.log(salarioLiquido = salarioBase-descontoIR;






//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.