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