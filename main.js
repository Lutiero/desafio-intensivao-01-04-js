// 1
// alert('Hello World');

//2 Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 1
const numberTwo = 2

const spanResult = document.querySelector(".result")
spanResult.innerHTML = `Resultado: ${numberOne + numberTwo}`

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//💡 Para saber o tipo de dado você pode usar o operador `typeof`
const number = "0"

typeof number === `number`
  ? (spanResult.innerHTML = `É um número`)
  : (spanResult.innerHTML = `Náo é um número`)

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const string = "0"

typeof string === `string`
  ? (spanResult.innerHTML = `É uma string`)
  : (spanResult.innerHTML = `Náo é uma string`)

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const boolean = true

typeof boolean === `boolean`
  ? (spanResult.innerHTML = `É um boolean`)
  : (spanResult.innerHTML = `Náo é um boolean`)

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
spanResult.innerHTML = `Resultado: ${numberOne - numberTwo}`

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
spanResult.innerHTML = `Resultado: ${numberOne * numberTwo}`

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
spanResult.innerHTML = `Resultado: ${numberOne / numberTwo}`

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
numberTwo % 2 === 0
  ? (spanResult.innerHTML = "É um número par")
  : (spanResult.innerHTML = "Não é um número par")

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
numberTwo % 2 === 0
  ? (spanResult.innerHTML = "Par")
  : (spanResult.innerHTML = "Ímpar")