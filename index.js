

function replacerEncrypt(match) {  
  const keysOfEncrypt = {
    "a": "ai",
    "e": "enter",
    "i": "imes", 
    "o": "ober",
    "u": "ufat"
  }
  return keysOfEncrypt[match]
}

function replacerDecrypt(match) {  
  const keysOfDecrypt = {
    "ai": "a",
    "enter": "e",
    "imes": "i", 
    "ober": "o",
    "ufat": "u"
  }
  return keysOfDecrypt[match]
}

// Checando e bloqueando os caracteres
const checkText = document.querySelector("#text")

checkText.addEventListener("keypress", function(e) {
  
  if (!checkChar(e)) {
     e.preventDefault()
  }

})

function checkChar(e) {

  const char = String.fromCharCode(e.keyCode)

  const pattern = "[a-z ]"

  if(char.match(pattern)) {
    return true
  }

}
 
// função para criptografar
function encryptText() {
  let text = document.getElementById("text").value
  console.log(text)

  if (text != "") {
    let textEncrypt = text.replace(/[aeiou]/gi, replacerEncrypt)
    console.log(textEncrypt)
  
    document.getElementById("output").innerHTML = "<textarea readonly class='output-result' id='output-result'>" + textEncrypt + "</textarea>" + "<button class='button-copy' id='copy' onclick='copy()'>Copiar</button>"
  
    cleanText()
  }
}

// função para descriptografar
function decryptText() {
  let text = document.getElementById("text").value
  console.log(text)

  if (text != "") {
    let textDecrypt = text.replace(/ai|enter|imes|ober|ufat/gi, replacerDecrypt)
    console.log(textDecrypt)
  
    document.getElementById("output").innerHTML = "<textarea readonly class='output-result' id='output-result'>" + textDecrypt + "</textarea>" + "<button class='button-copy' id='copy' onclick='copy()'>Copiar</button>"
    
    cleanText()
  }
}

function cleanText() {
  text = document.querySelector('textarea')
  text.value = ''
}

function copy() {
  let textCopy = document.getElementById("output-result").innerHTML
  navigator.clipboard.writeText(textCopy);
  alert("Texto copiado para a Área de Trânsferência!")
}