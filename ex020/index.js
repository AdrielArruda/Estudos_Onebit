let distanceAy = prompt("Qual a distância em anos-luz?")

let escolha = prompt("Para qual unidade deseja converter?\n1- Parsec(pc)\n2- Unidade Astronômica(AU)\n3- Quilômetros(km)")

let chosenUnity
let convertedDistance

switch (escolha) {
    case "1":
        chosenUnity = "Parsec"
            convertedDistance = (0.3066014 * distanceAy)        
        break
    case "2":
        chosenUnity = "Unidade Astronômicas"
            convertedDistance = (63241.1 * distanceAy)       
        break
    case "3":
        chosenUnity = "Quilômetros"
            convertedDistance = 9.5 * Math.pow(10,12) * distanceAy        
        break
    default:
        chosenUnity = "Unidade não identificada"
        alert("Distância em Anos-luz: " + distanceAy + " l.y.\n Unidade não identificada: Conversão fora do escopo")
}

alert("Distância em Anos-luz: " + distanceAy + "\n" + chosenUnity + ": " + convertedDistance )