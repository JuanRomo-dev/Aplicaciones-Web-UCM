document.addEventListener('DOMContentLoaded', function() {

    $(document).ready(function() {
        $('#configur').click(function() {
            $('#configModal').modal('show');
        });
    });

    $('#configForm').submit(function(event) {
        event.preventDefault();
        
        const fontSize = document.getElementById('fontSize').value;
        const fontColor = document.getElementById('fontColor').value;
        const bckgrndColor = document.getElementById('bckgrndColor').value;
        const bckgrndColorSec1 = document.getElementById('bckgrndColorSec1').value;
        const bckgrndColorSec2 = document.getElementById('bckgrndColorSec2').value;
        const bckgrndColorHead = document.getElementById('bckgrndColorHead').value;
        const bckgrndColorFoot = document.getElementById('bckgrndColorFooter').value;
        const linkColor = document.getElementById('linkColor').value;
        const underlineLinks = document.getElementById('underlineLinks').checked ? 'underline' : 'none';
        const colorNavbar = document.getElementById('colorNavbar').value;
        const colorLinksNav = document.getElementById('colorLinksNav').value;
        const underlineNavLinks = document.getElementById('underlineNavLinks').value;

        console.log(fontSize);
        console.log(underlineLinks);

        document.body.style.fontSize = fontSize + 'px';
        document.body.style.color = fontColor;
        document.body.style.backgroundColor = bckgrndColor;
        document.getElementById('section1').style.backgroundColor = bckgrndColorSec1;
        document.getElementById('section2').style.backgroundColor = bckgrndColorSec2;
        document.getElementById('cabecera').style.backgroundColor = bckgrndColorHead;
        document.getElementById('pie').style.backgroundColor = bckgrndColorFoot;

        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = linkColor;
            link.style.textDecoration = underlineLinks;
        });

        document.getElementById('navbar').style.backgroundColor = colorNavbar;
        document.getElementById('navbar').style.color = colorLinksNav;
        document.getElementById('navbar').style.textDecoration = underlineNavLinks;

        $('#configModal').modal('hide');
    })
})

/*
document.addEventListener('DOMContentLoaded', function() {

    var configurButton = document.getElementById('configur');

    configurButton.addEventListener('click', function() {
        var configModal = document.getElementById('configModal');
        configModal.classList.add('show'); // Mostrar el modal (usando CSS .show)
        configModal.style.display = 'block'; // Asegurarse de que el modal sea visible
    });

    var configForm = document.getElementById('configForm');
    configForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        var fontSize = document.getElementById('fontSize').value + 'px';
        var fontColor = document.getElementById('fontColor').value;
        var bckgrndColor = document.getElementById('bckgrndColor').value;
        var bckgrndColorSec1 = document.getElementById('bckgrndColorSec1').value;
        var bckgrndColorSec2 = document.getElementById('bckgrndColorSec2').value;
        var bckgrndColorHead = document.getElementById('bckgrndColorHead').value;
        var bckgrndColorFoot = document.getElementById('bckgrndColorFooter').value;
        var linkColor = document.getElementById('linkColor').value;
        var underlineLinks = document.getElementById('underlineLinks').checked ? 'underline' : 'none';
        var colorNavbar = document.getElementById('colorNavbar').value;
        var colorLinksNav = document.getElementById('colorLinksNav').value;
        var underlineNavLinks = document.getElementById('underlineNavLinks').checked ? 'underline' : 'none';

        document.body.style.fontSize = fontSize;
        document.body.style.color = fontColor;
        document.body.style.backgroundColor = bckgrndColor;
        document.getElementById('section1').style.backgroundColor = bckgrndColorSec1;
        document.getElementById('section2').style.backgroundColor = bckgrndColorSec2;
        document.getElementById('cabecera').style.backgroundColor = bckgrndColorHead;
        document.getElementById('pie').style.backgroundColor = bckgrndColorFoot;
        var links = document.querySelectorAll('a'); // Obtener todos los enlaces
        links.forEach(function(link) {
            link.style.color = linkColor; // Aplicar color a los enlaces
            link.style.textDecoration = underlineLinks; // Aplicar subrayado si es necesario
        });
        var navbar = document.getElementById('navbar');
        navbar.style.backgroundColor = colorNavbar;
        navbar.style.color = colorLinksNav;
        navbar.style.textDecoration = underlineNavLinks;

        var configModal = document.getElementById('configModal');
        configModal.classList.remove('show'); // Ocultar el modal
        configModal.style.display = 'none'; // Asegurarse de que el modal esté oculto
    });
});

*/