// !querySelectorAll devuelve un Array donde podemos itera y aplicar la funcionalidad a cada boton
// !querySelector, solo recupera un elemento que cumpla con el selector indicado

// *recuperando los botones y aplicando evento de click a cada uno de ellos
const btn_apply = document.querySelectorAll(".btn-apply-job");

// *agremos el condicinal para validar que los botones existen y se aplican estilos
if (btn_apply !== null) {
  btn_apply.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(
        "Gracias por aplicar al empleo. Pronto nos pondremos en contacto."
      );
      btn.disabled = true;
      btn.textContent = "¡Aplicado!";
      btn.classList.add("is-applied");
    });
  });
}
