$(document).ready(function(){
    
    $('#refresh').on('click', function(e){
        let nome = $('#name').val();
        let cel = $('#cellphone').val();
        let cargo = $('#cargo').val();
        let departamento = $('#departamento').val();
        let email = $('#email').val();
        let facebook = $('#facebook').val();
        let linkedin = $('#linkedin').val();

        

        $('.nome').text(nome);
        $('.tel').text(' +55 '+cel);
        $('.cargo').text(cargo + " ");
        $('.departamento').text(departamento);
        $('.email').text(email);  $(".aEmail").attr("href", "mailto:" + email)
        $('.facebook').attr("href", facebook);
        $('.linkedin').attr("href", linkedin);

        let assinatura = $('#assinaturaEmail').html();
        $(".assinaturaCode").text(assinatura);
        e.preventDefault();
        // Checkfiles();
    });

    
});