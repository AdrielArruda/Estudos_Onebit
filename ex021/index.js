let dobrasCont = 0
let opcaoUser = ""

let nome = prompt('Digite o nome da nave')

opcaoUser = prompt('Deseja entrar em dobra espacial\n1- Sim\n2- Não')

while(opcaoUser == "1") {
    dobrasCont += 1
    opcaoUser = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
}

alert("Nome da nave: " + nome + "\nNúmeros de dobras espaciais realizadas: " + dobrasCont)