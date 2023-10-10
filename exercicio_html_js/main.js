const form = document.getElementById('formulario');
const campoA = document.getElementById('inputA');
const campoB = document.getElementById('inputB');
const mensagemSucesso = document.getElementById('mensage-sucess');
const mensagemErro = document.getElementById('mensage-error');

function validaForm() {
    return campoA.value < campoB.value;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemEnvio = document.getElementById('form-sent');

    if (validaForm() === true){
        mensagemEnvio.style.display = 'inline-block';
        mensagemSucesso.style.display = 'none';

        campoA.value = '';
        campoB.value = '';
    }
})

campoB.addEventListener('change', function(e){

    if (!validaForm()){
        mensagemSucesso.style.display = 'none';
        campoB.classList.add('error');
        mensagemErro.style.display = 'inline-block';
    } else{
        mensagemErro.style.display = 'none';
        campoB.classList.remove('error');
        mensagemSucesso.style.display = 'inline-block';
    }
})