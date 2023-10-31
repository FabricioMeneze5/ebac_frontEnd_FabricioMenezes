$(document).ready(function() {
    $('#nContato').change(function() {
        var opcaoSelecionada = $(this).val();

        $('#telId').val('').unmask();

        if (opcaoSelecionada === 'telefone') {
            $('#telId').mask('(00) 0000-0000', {
                placeholder:'(00) 0000-0000'
            });
        } else if (opcaoSelecionada === 'celular') {
            $('#telId').mask('(00) 00000-0000', {
                placeholder:'(00) 00000-0000'
            });
        }
    });

    $('#cpfId').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    });

    $('#cepId').mask('0000-000', {
        placeholder:'0000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
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