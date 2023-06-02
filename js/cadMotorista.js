function cadastrado(){
    let nome = document.getElementById('nome').value
    let cpf = document.getElementById('cpf').value
    let dtNascimento = document.getElementById('dtnascimento').value
    let antesCrime = document.getElementById('ants').value
    let ftPerfil = document.getElementById('ftperfil').value
    let cnh = document.getElementById('cnh').value
    let email = document.getElementById('exampleInputEmail1').value
    let senha = document.getElementById('exampleInputPassword1').value

    if(nome.length === 0){
        window.alert('Preencha todos os campos')
    } else if(cpf.length === 0){
        window.alert('Preencha todos os campos')
    } else if(dtNascimento.length === 0){
        window.alert('Preencha todos os campos')
    } else if(antesCrime.length === 0){
        window.alert('Preencha todos os campos')
    } else if(ftPerfil === 0){
        window.alert('Preencha todos os campos')
    } else if(cnh === 0){
        window.alert('Preencha todos os campos')
    } else if(email === 0){
        window.alert('Preencha todos os campos')
    } else if(senha === 0){
        window.alert('Preencha todos os campos')
    } else{
        window.alert('Cadastrado com Sucesso!')
        location.href = "disponiveis.html"
    }

}