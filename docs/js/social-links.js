//Comienzo del desmadre

//Abrir el navbar lateral
function openNavBar() {
    document.getElementById("navbar").style.width = "250px"
    document.getElementById("main").style.marginLeft = "250px";
}

//Cerrar el navbar lateral
function closeNavBar() {
    document.getElementById("navbar").style.width = "0"
    document.getElementById("main").style.marginLeft = "0";
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