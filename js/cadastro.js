function cadastrado(){
    let usu = document.getElementById('iusuario').value
    let email = document.getElementById('exampleInputEmail1').value
    let num = document.getElementById('inum').value
    let senha = document.getElementById('exampleInputPassword1').value

    if(usu.length === 0){
        window.alert('Preencha todos os campos')
    } else if(email.length === 0){
        window.alert('Preencha todos os campos')
    } else if(num.length === 0){
        window.alert('Preencha todos os campos')
    } else if(senha.length === 0){
        window.alert('Preencha todos os campos')
    } else{
        window.alert('Cadastrado com Sucesso!')
        location.href = "index.html"
    }
}