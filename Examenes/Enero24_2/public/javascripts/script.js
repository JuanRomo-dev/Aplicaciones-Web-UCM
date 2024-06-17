$(document).ready(function() {
    $('#mostrarAgendaBtn').click(function() {
        $.get('/contactos', function(data) {
            $('#agendaJson').text(JSON.stringify(data, null, 2));
        }).fail(function() {
            alert('Error al mostrar la agenda');
        });
    });

    $('#objetoForm').submit(function(event) {
        event.preventDefault();
        let indice = $('#indice').val();

        $.get('/contactos/' + indice, function(data) {
            $('#objeto').text(JSON.stringify(data, null, 2));
        }).fail(function() {
            alert('Error al mostrar el objeto');
        });
    });

    $('#addForm').submit(function(event) {
        event.preventDefault();

        let nuevo = {
            id: $('#identidad').val(),
            nombre: $('#nombre').val(),
            telefonos: {
                casa: $('#telCasa').val(),
                movil: $('#telMovil').val(),
                oficina: $('#telOfi').val()
            }
        }

        Object.keys(nuevo.telefonos).forEach(key => {
            if(!nuevo.telefonos[key]) {
                delete nuevo.telefonos[key];
            }
        })

        $.ajax({
            url: 'contactos',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(nuevo),
            success: function(data) {
                alert('Objeto añadido satisfactoriamente');
                $('#addForm')[0].reset();
            },
            error: function() {
                alert('Error al añadir el objeto');
            }
        })
    })

    $('#deleteForm').submit(function(event) {
        event.preventDefault();
    
        let id = $('#deleteId').val();

        $.ajax({
            url: '/contactos',
            type: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify({ id: id }),
            success: function(data) {
                alert('Objeto eliminado satisfactoriamente');
                $('#deleteForm')[0].reset();
            },
            error: function() {
                alert('Error al eliminar el objeto');
            }
        });
    });

    $('#updateForm').submit(function(event) {
        event.preventDefault();

        let indice= $('#updateIndex').val();
        let actualizado = {
            id: $('updateId').val(),
            nombre: $('#updateNombre').val(),
            telefonos: {
                casa: $('#updateCasa').val(),
                movil: $('#updateMovil').val(),
                oficina: $('#updateOfi').val()
            }
        }

        Object.keys(actualizado.telefonos).forEach(key => {
            if (!actualizado.telefonos[key]) {
                delete actualizado.telefonos[key];
            }   
        });

        $.ajax({
            url: '/contactos/' + indice,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(actualizado),
            success: function(data) {
                alert('Objeto actualizado satisfactoriamente');
                $('#updateForm')[0].reset();
            },
            error: function() {
                alert('Error al actualizar el objeto');
            }
        });
    })
    
});