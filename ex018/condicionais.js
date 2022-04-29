let nome = prompt("Qual o nome do piloto?")
let velocityInitial = 0
let velocity = prompt("Qual a velocidade deseja acelerar a nave?")
confirm("Confirma que deseja acelerar a velocidade da nave para " + velocity + "  km/s")

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity >= 80 && velocity < 100) {
    alert("Velocidade alta, considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Nome do piloto: " + nome + "\nVelocidade Atual: " + velocity + "km/s")


