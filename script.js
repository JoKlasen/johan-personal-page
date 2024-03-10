

function changeTab(tabName,elmnt) {
    var i, tabcontents, navbuttons;
    tabcontents = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    navbuttons = document.getElementsByClassName("nav-button");
    for (i = 0; i < navbuttons.length; i++) {
        navbuttons[i].style.backgroundColor = "dimgray";
    }

    document.getElementById(tabName).style.display = "flex";
    elmnt.style.backgroundColor = "gray";
}