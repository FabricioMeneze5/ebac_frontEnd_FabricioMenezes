const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemDescricao = document.getElementById('descricao')
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b>, conta: <b>${numeroContaBeneficiario.value}</b><br>${mensagemDescricao.value}`

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        mensagemDescricao.value = '';
    } else {
        nomeBeneficiario.style.border = 'solid 1px red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup',function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value)

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})