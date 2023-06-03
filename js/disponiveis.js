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
    let partida = document.getElementById('partida').value
    let destino = document.getElementById('destino').value
    let dataCarona = document.getElementById('dtCarona').value
    let horario = document.getElementById('hrCarona').value

    if(partida.length === 0){
        window.alert('preencha todos os campos')
    } else if(destino.length === 0){
        window.alert('preencha todos os campos')
    } else if(dataCarona.length === 0){
        window.alert('preencha todos os campos')
    } else if(horario.length == 0){
        window.alert('preencha todos os campos')
    } else{
        window.alert('Parabéns!!! Você se disponibilizou para uma carona.')

        document.getElementById('ijadisponiveis').innerHTML += `<table class="table table-success table-striped" style="margin-top: 10px;">
        <tbody>
            <tr>
            <th scope="row" style="padding: 0.5rem 1.5rem;">Partida de:</th>
            <th scope="row" style="padding: 0.5rem 1.5rem;">Destino:</th>
            <th scope="row" style="padding: 0.5rem 1.5rem;">Saída:</th>
            <th scope="row" style="padding: 0.5rem 1.5rem;">Data:</th>
            <th scope="row" style="padding: 0.5rem 1.5rem;">Combinar:</th>
            </tr>
            <tr>
                <td style="padding: 0.5rem 1.5rem;">${partida}</td>
                <td style="padding: 0.5rem 1.5rem;">${destino}</td>
                <td style="padding: 0.5rem 1.5rem;">${horario}</td>
                <td style="padding: 0.5rem 1.5rem;">${dataCarona}</td>
                <td style="padding: 0.5rem 1.5rem;"><button id="agendar4" onclick="agendar()">Agendar</button> <button id="abrirmensagem" onclick="aparecerInbox()">Mensagem</button></td>
            </tr>
        </table> `
    }
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