const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {

  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage="none"

}

function encriptar(stringEncriptada) {

  let matrizCodigo = [["a","ai"], ["e","enter"], ["i","imes"] , ["o","ober"], ["u","ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(i=0; i<matrizCodigo.length;i++){

    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringEncriptada;
}

function btnDescriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value)
  mensagem.value = textoDesencriptado
  mensagem.style.backgroundImage="none"

}

function desencriptar(stringDesencriptado) {

  let matrizCodigo = [["ai","a"], ["enter","e"], ["imes","i"] , ["ober","o"], ["ufat","u"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for(i=0; i<matrizCodigo.length;i++){

    if(stringDesencriptado.includes(matrizCodigo[i][0])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringDesencriptado;
}
