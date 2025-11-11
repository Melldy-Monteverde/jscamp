// !querySelectorAll devuelve un Array donde podemos itera y aplicar la funcionalidad a cada boton
// !querySelector, solo recupera un elemento que cumpla con el selector indicado

const jobListingSection = document.querySelector(".jobs-listings");

jobListingSection?.addEventListener("click", (event) => {
  console.log(event.target);
  const element = event.target;

  if (element.classList.contains("btn-apply-job")) {
    console.log("click on button");
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const jobDetailsSection = document.querySelector(".job-details");

jobDetailsSection?.addEventListener("click", (event) => {
  console.log(event.target);
  const element = event.target;

  if (element.classList.contains("btn-apply-job")) {
    console.log("click on button");
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});
