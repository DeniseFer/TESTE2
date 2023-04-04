
/* function Triangulo (b,h,a){
    let base = b
    let altura = h
    let area = a
}



let triangulo = { //criando objeto
    base: 2,
    altura: 6
}

function Triangulo(b,h){ //criando função
    let base = b
    let altura = h
    let area = (base * altura) /2
    return "A área do triângulo é igual a " +area
}

console.log("CÁLCULO DA ÁREA DE UM TRIÂNGULO")
let base = prompt("Digite o valor da base:\n")
let altura = prompt("Digite o valor da altura:\n")

console.log(Triangulo(base,altura)) 

// CONSTRUTORA

function T1(a,b){
    this.altura = a
    this.base = b
    this.area = function(){
        alert(this.base*this.altura/2)
    }
    return this.area
    
}
    
console.log("CÁLCULO DA ÁREA DE UM TRIÂNGULO")
let base = prompt("Digite o valor da base:\n")
let altura = prompt("Digite o valor da altura:\n")

let triangulo1 = new T1(altura,base)/*




