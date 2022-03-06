function Exe_01() {
    let x = parseInt(document.getElementById("value").value)
    let sum = 0
    for (let i = x-1; i != 0; i--) {
        if (x % i == 0) {
            sum += i
        }       
    }
    document.getElementById("resultbox").value = 'Resultado: ' + sum
}
document.getElementById("codigo1").value = Exe_01

function Exe_02() {
    let pontoA1 = parseInt(document.getElementById("valueA1").value)
    let pontoA2 = parseInt(document.getElementById("valueA2").value)
    let pontoB1 = parseInt(document.getElementById("valueB1").value)
    let pontoB2 = parseInt(document.getElementById("valueB2").value)
    let distance = ((((pontoA1 - pontoA2) ** 2) + ((pontoB1 - pontoB2) ** 2)) ** 0.5).toFixed(2)
    document.getElementById("resultbox2").value = 'Resultado: ' + distance
}
document.getElementById("codigo2").value = Exe_02


function Exe_03() {
    let str = document.getElementById("value-exe3").value.toLowerCase()
    let words = str.split(' ')
    function Counter(array) {
        let count = {};
        array.forEach(val => count[val] = (count[val] || 0) + 1);
        return count;
    }
    let result = JSON.stringify(Counter(words));
    return document.getElementById("resultbox3").value = result
}
document.getElementById("codigo3").value = Exe_03


function Exe_04() {
    let str = document.getElementById("value-exe4").value
    var lista = Array.from(str)
    let lastElement = lista[lista.length - 1];
    if (lastElement != ';') lista.push(';')
    countSpaces = 1
    countColons = 0
    for (let i = 0; i < lista.length; i++) {  
        if (lista[i] == ' ') countSpaces += 1
        if (lista[i] == ';') break
    }
    for (let i = 0; i < lista.length; i++) {  
        if (lista[i] == ';') countColons += 1
    }
    document.getElementById("resultbox4").value = 'A dimensão da matriz é: ' + countColons + 'x' + countSpaces 
}
document.getElementById("codigo4").value = Exe_04



function Exe_05() {
    let numero = parseInt(document.getElementById("value-exe5").value)
    let anterior = 0
    let proximo = 0
    let result = []
    while (proximo <= numero) {
        result.push(proximo)
        proximo = proximo + anterior
        anterior = proximo - anterior
        if (proximo == 0){
            proximo = proximo + 1
        }    
    }    
    document.getElementById("resultbox5").value = result
}
document.getElementById("codigo5").value = Exe_05