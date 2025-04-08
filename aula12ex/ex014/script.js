function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        foto.innerHTML = '<img id= "imagem" src= "fotomanha.png">'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        foto.innerHTML = '<img id= "imagem" src= "fototarde.png">'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        foto.innerHTML = '<img id= "imagem" src= "fotonoite.png">'
        document.body.style.background = '#515154'
    }
}
