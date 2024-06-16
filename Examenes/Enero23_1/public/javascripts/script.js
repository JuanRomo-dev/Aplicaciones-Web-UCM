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