let spaceship = prompt('Digite o nome da nave')

let charToReplace = prompt('Qual caractere deseja substituir?')

let replacementChar = prompt('Por qual caractere deseja substituir o ' + charToReplace + " ?")

let novoNome = ""


for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        novoNome += replacementChar
    } else {
        novoNome += spaceship[pos]
    }
}

alert('O novo nome da nave é ' + novoNome)