//Comienzo del desmadre

//Detecta si estás en tlf o pc
window.onload = function () {
    //Detecta si estás en tlf o pc
    var platform = detectMob();

    if (platform) {
        buttonText();
        //document.getElementById('P3F-logo').style.width = '75%'
        //document.getElementById('open-menu').style.fontSize = '37px'
        document.getElementById('navbar').style.textAlign = 'center';
    }

    //Parte de la funcion responsive checkedMediaQuery
    //Cada vez que se ajuste el tamaño, hará lo que la funcion chequedMediaQuery indica
    window.addEventListener('resize', checkMediaQuery);
}

//Abrir el navbar lateral
function openNavBarSelection() {
    var x = detectMob();
    if (!x) {
        document.getElementById("navbar").style.width = "250px"
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById('open-menu').style.display = 'none';
    } else if (x) {
        document.getElementById("navbar").style.width = "100%"
        document.getElementById('open-menu').style.display = 'none';
    }
}

//Cerrar el navbar lateral
function closeNavBar() {
    document.getElementById("navbar").style.width = "0"
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById('open-menu').style.display = '';
}

//Mostrar el contenido del mes/social link/piso del tartaro correspondiente
function showSocLinkContent(event, socialLink) {
    // Declare all variables
    var i, tabcontent, tablinks;



    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("slContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("sltab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(socialLink).style.display = "block";
    event.currentTarget.className += " active";

    document.getElementById(socialLink).scrollTop = 0; //Ir al top del div de cada social link

}

//Detecta si se está ingresando desde alguno de estos dispositivos
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

//Hace print en consola (true/false) de la respuesta de la función anterior
function printing() {
    console.log(detectMob());
}

//function que cambia el contenido del boton
function buttonText() {
    var button = document.getElementById("defaultOpen");
    var allTheButtons = document.getElementById('social-link').childElementCount;
    var romanNumbers = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XX-2"];

    for (let i = 0; i < allTheButtons; i++) {
        button.innerHTML = romanNumbers[i];
        button = button.nextElementSibling;
    }
}

function buttonTextLarge(){
    var button = document.getElementById("defaultOpen");
    var allTheButtons = document.getElementById('social-link').childElementCount;
    var romanNumbers = ["Fool", "Magician", "Priestess", "Empress", "Emperor", "Hierophant", "Lovers", "Chariot", "Justice", "Hermit", "Fortune", "Strength", "Hanged Man", "Death", "Temperance", "Devil", "Tower", "Star", "Moon", "Sun", "Judgment", "Aeon"];

    for (let i = 0; i < allTheButtons; i++) {
        button.innerHTML = romanNumbers[i];
        button = button.nextElementSibling;
    }
}

//Funcion que ajusta el contenido de los botones dependiendo del width de la ventana
function checkMediaQuery() {
    // Si el innerWidth de la ventana es menor que 600px
    if (window.innerWidth < 600) {
        buttonText()
    } else { 
        buttonTextLarge()
    }
}