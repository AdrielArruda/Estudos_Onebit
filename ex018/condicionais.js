let nome = prompt("Qual seu nome piloto?") 

let velocity = 0

let newVelocity = prompt("Qual a velocidade deseja acelerar a nave?")

let confirmVelocity = confirm("Estamos acelarando a nave  para " + newVelocity + "  km/s")

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta, considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Nome do piloto: " + nome + "\nVelocidade Atual: " + velocity + "km/s")


