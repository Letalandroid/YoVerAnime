document.getElementById("mensaje").innerHTML = `Hola! <b>${localStorage.getItem("NombreUsuario")}</b>, aún esta página está en progreso, pero esperamos tenerte en la mejor estadía posible :D`

document.getElementById("username").innerHTML = localStorage.getItem("NombreUsuario");

document.addEventListener("click", (e) => {

    if (e.target.id == "perfil") {
        
        document.getElementById("opciones").style.display = "block";

    } else {

        document.getElementById("opciones").style.display = "none";

    }

});

document.getElementById("exit").addEventListener("click", () => {

    localStorage.clear();
    window.location.href = "log/";

});