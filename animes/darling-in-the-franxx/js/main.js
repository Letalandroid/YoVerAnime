if (localStorage.getItem("NombreUsuario") == null) {

    document.getElementById("username").innerHTML = '<a href="../../log/">Iniciar Sesión</a>'

} else {

    document.getElementById("username").innerHTML = localStorage.getItem("NombreUsuario");

}

document.addEventListener("click", (e) => {

    if (e.target.id == "perfil") {

        document.getElementById("opciones").style.display = "block";

    } else {

        document.getElementById("opciones").style.display = "none";

    }

});

document.getElementById("exit").addEventListener("click", () => {

    localStorage.clear();
    window.location.href = "../../log/";

});

document.addEventListener("click", (e) => {

    if (e.target.id == "ep1" || e.target.id == "ep1-img" || e.target.id == "ep1-p") {

        document.getElementById("ep1-v").style.display = "flex";

    } else {

        document.getElementById("ep1-v").style.display = "none";

    }

});

// Cargar icon

const recentImgDataUrl = localStorage.getItem("icon");

    if (recentImgDataUrl) {

        document.getElementById("perfil").setAttribute("src", recentImgDataUrl);

    }