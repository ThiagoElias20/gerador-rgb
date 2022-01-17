function carregar() {
  var msg = document.getElementById("msg")
  var foto = document.getElementById("imagem")
  var data = new Date()
   var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas. `
  if (hora >= 0 && hora < 12) {
   // Bom dia 
   imagem.src = 'manha.png'
   document.body.style.background = '#c9dde6'
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    imagem.src = 'tarde.png'
    document.body.style.background = '#fd9005'
  } else {
    // Boa noite
    imagem.src = 'noite.png'
    document.body.style.background = '#012147'
  }
}