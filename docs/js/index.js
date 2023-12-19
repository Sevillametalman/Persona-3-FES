/**
 * @module index/listReport
 * @author SevMetMan
 */

/**
 * @function window.onload
 * @description Detecta si estás en tlf o pc
 */
window.onload = function(){
    var platform = detectMob();

    if (platform) {
        document.getElementById('P3F-logo').style.width = '75%'
        document.getElementById('open-menu').style.fontSize = '37px'
    }
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
    }else if(x){
        document.getElementById("navbar").style.width = "250px"
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
 * @function showMesContent
 * @description Mostrar el contenido del mes/social link/piso del tartaro correspondiente
 */
function showMesContent(event, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("mescontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("mestab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";

    document.getElementById(cityName).scrollTop = 0;

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