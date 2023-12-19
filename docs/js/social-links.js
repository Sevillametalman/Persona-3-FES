/**
 * @module social-links
 * @author SevMetMan
 */

/**
 * @function window.onload
 * @description Detecta si estás en tlf o pc
 */
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

/**
 * @function openNavBarSelection
 * @description Función para abrir el NavBar lateral
 */
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

/**
 * @function closeNavBar
 * @description Función para cerrar el NavBar
 */
function closeNavBar() {
    document.getElementById("navbar").style.width = "0"
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById('open-menu').style.display = '';
}

/**
 * @function showSocLinkContent
 * @description Mostrar el contenido del mes/social link/piso del tartaro correspondiente
 */
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

/**
 * @function detectMob
 * @description Detecta si se está ingresando desde alguno de estos dispositivos
 * @returns {boolean} True si estás desde uno de los dispositivos. False caso contrario
 */
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

/**
 * @function printing
 * @description Hace print de detectMob
 */
function printing() {
    console.log(detectMob());
}

/**
 * @function buttonText
 * @description Intercambia de títulos a números romanos dependiendo del tamaño de la ventana
 */
function buttonText() {
    var button = document.getElementById("defaultOpen");
    var allTheButtons = document.getElementById('social-link').childElementCount;
    var romanNumbers = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XX-2"];

    for (let i = 0; i < allTheButtons; i++) {
        button.innerHTML = romanNumbers[i];
        button = button.nextElementSibling;
    }
}

/**
 * @function buttonTextLarge
 * @description Intercambia de números romanos a títulos dependiendo del tamaño de la ventana
 */
function buttonTextLarge() {
    var button = document.getElementById("defaultOpen");
    var allTheButtons = document.getElementById('social-link').childElementCount;
    var romanNumbers = ["Fool", "Magician", "Priestess", "Empress", "Emperor", "Hierophant", "Lovers", "Chariot", "Justice", "Hermit", "Fortune", "Strength", "Hanged Man", "Death", "Temperance", "Devil", "Tower", "Star", "Moon", "Sun", "Judgment", "Aeon"];

    for (let i = 0; i < allTheButtons; i++) {
        button.innerHTML = romanNumbers[i];
        button = button.nextElementSibling;
    }
}

/**
 * @function checkMediaQuery
 * @description Funcion que ajusta el contenido de los botones dependiendo del width de la ventana
 */
function checkMediaQuery() {
    // Si el innerWidth de la ventana es menor que 600px
    if (window.innerWidth < 600) {
        buttonText()
    } else {
        buttonTextLarge()
    }
}