const validar = () => {

    const usuario = document.getElementById("username"),
          pass = document.getElementById("password");

    if (usuario.value == "" || usuario.value.startsWith(" ") || pass.value == "" || pass.value.startsWith(" ")) {

        alert("Porfavor, ingresar aunque sea un dígito en el formulario.");

    } else {

        localStorage.setItem("NombreUsuario", usuario.value);
        localStorage.setItem("Password", password.value);
        alert("Logueado exitosamente.")
        window.location.href = "../";

    }

}

document.getElementById("entrar").addEventListener("click", validar);