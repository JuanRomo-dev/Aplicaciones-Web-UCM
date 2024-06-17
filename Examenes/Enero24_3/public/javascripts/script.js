$(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault();

        let formData = new FormData();
        formData.append('nombre', formData.get('nombre'));
        formData.append('apellidos', formData.get('apellidos'));
        formData.append('email', formData.get('email'));
        formData.append('contraseña', formData.get('pass'));
        formData.append('foto', $('#pic')[0].files[0]);

        $.ajax({
            url: '/usuarios',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                alert('Usuario registrado satisfactoriamente');
                $('#registerForm')[0].reset();
            },
            error: function() {
                alert('Error al registrar el usuario');
            }
        })
    })
})