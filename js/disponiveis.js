function aparecerInbox(){
    document.getElementById('iconversa').style = "display: block;"
}

function enviarMensagem(){
    let msg = document.getElementById('msgescirta').value

    document.getElementById('msg').innerHTML += `<p style="margin: 0px 0px 3px 0px; background-color: #081410">${msg}</p>`
}

function fecharInbox(){
    document.getElementById('iconversa').style = "display: none;"
}

function disponibilizar(){
     window.alert('Parabéns!!! Você se disponibilizou para uma carona.')
}

function agendar(){
    document.getElementById('iagendar').style = "display: block;"
}

function fecharAgenda(){
    document.getElementById('iagendar').style = "display: none;"
}

function agendaSolicitada(){
    let local = document.getElementById('encontro').value
    console.log(local)
    if(local.length === 0){
        window.alert('Digite um local de encontro')
    } else{
        window.alert('Sua carona foi solicitada, aguarde a confirmação.')
    }
    console.log(local)
}