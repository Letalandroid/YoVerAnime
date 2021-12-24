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

const saveIMG = () => {

    const reader = new FileReader();

    reader.addEventListener("load", () => {

        localStorage.setItem("icon", reader.result);

    });

    reader.readAsDataURL(document.getElementById("avatar").files[0]);

};

document.getElementById("avatar").addEventListener("change", saveIMG);
document.getElementById("entrar").addEventListener("click", validar);

// Para visualizar la img

document.getElementById("avatar").addEventListener("change", () => {

    const recentImgDataUrl = localStorage.getItem("icon");

    if (recentImgDataUrl) {

        document.getElementById("preview-avatar").setAttribute("src", recentImgDataUrl);

    }

})