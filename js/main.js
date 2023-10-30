$(document).ready(function() {
    $('#telId').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    });

    $('#cpfId').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    });

    $('#cepId').mask('0000-000', {
        placeholder:'0000-00'
    });

    $('form').validade({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        }
    });
});