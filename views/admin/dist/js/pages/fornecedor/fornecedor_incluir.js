$(function () {
    'use strict';

    var tipoDocumento = $("#divTipoDocumento");
    var nomeRazaoSocial = $("#divNomeRazaoSocial");
    var nomeFantasia = $("#divNomeFantasia");
    var inscricaoEstadual = $('#divInscricaoSocial');   

    tipoDocumento.hide();
    nomeRazaoSocial.hide();
    nomeFantasia.hide();
    inscricaoEstadual.hide();
    function mostrarInput(id) {
        switch (id) {
            case 'pf':
                $('#divTipoDocumento label').text('CPF');
                $('#divTipoDocumento label').prop('for', 'cpf');
                $('#divTipoDocumento input').prop('name', 'cpf');
                $('#divTipoDocumento input').prop('id', 'cpf');
                tipoDocumento.show();
                $('#divNomeRazaoSocial label').text('Nome');
                $('#divNomeRazaoSocial label').prop('for','nome');
                $('#divNomeRazaoSocial input').prop('name', 'nome');
                $('#divNomeRazaoSocial input').prop('id', 'nome');
                nomeRazaoSocial.show();
                inscricaoEstadual.hide();
                nomeFantasia.hide();

                break;
            case 'pj':
                $('#divTipoDocumento label').text('CNPJ');
                $('#divTipoDocumento input').prop('name', 'cnpj');
                $('#divTipoDocumento input').prop('id', 'cnpj');
                tipoDocumento.show();
                $('#divNomeRazaoSocial label').text('Razao Social');
                $('#divInscricaoSocial label').text('Inscrição Estadual');
                $('#divNomeRazaoSocial label').prop('for','razaoSocial');
                $('#divNomeRazaoSocial input').prop('name', 'razaoSocial');
                $('#divNomeRazaoSocial input').prop('id', 'razaoSocial');
               
                nomeRazaoSocial.show();
                nomeFantasia.show();
                inscricaoEstadual.show();
                break;
            default:
                break;
        }
    }

    $(document).on('click', 'input[type=radio]', function () {
        var id = $(this).prop('id');
        mostrarInput(id);
    });

});