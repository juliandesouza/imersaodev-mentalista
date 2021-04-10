var numero = parseInt(Math.random()*10)
var tentativa = 3

while (tentativa > 0) {
  var chute = parseInt(prompt('Digite um número entre 0 e 10'))
  if (numero == chute) {alert ('Acertou!')
  break
  }
  else if (numero > chute) {alert ('O número é maior')
  tentativa = tentativa - 1
  }
  else if (numero < chute) {alert ('O número é menor')
  tentativa = tentativa - 1
  }
}

if (chute != numero) {
    alert ('Você não ganhou. O número era ' + numero)
}