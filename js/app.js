// !querySelectorAll devuelve un Array donde podemos itera y aplicar la funcionalidad a cada boton
// !querySelector, solo recupera un elemento que cumpla con el selector indicado

const jobListingSection = document.querySelector(".jobs-listings");

jobListingSection?.addEventListener("click", (event) => {
  console.log(event.target);
  const element = event.target;

  if (element.classList.contains("btn-apply-job")) {
    console.log('click on button');
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

// *capturando eventos del filtro de localización
const filter = document.querySelector("#filter-location");
const message = document.querySelector("#filter-selected-value");
const jobs = document.querySelectorAll(".job-listing-card");

filter?.addEventListener("change", (event) => {
  const selectedValue = filter.value;

  if (selectedValue) {
    message.textContent = `Has seleccionado: ${selectedValue}`;
  } else {
    message.textContent = "";
  }

  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;
    // * const modalidad = job.getAttribute("data-modalidad"); -> esto es otr forma de acceder a los atributos del elemento, clases, data, etc.
    
    console.log(job.dataset.modalidad);
    const isShown = selectedValue === "" || selectedValue === modalidad;
    job.classList.toggle("is-hidden", !isShown);
  });
});

// *capturando eventos del input de barra de búsqueda
const searchInput = document.querySelector("#empleos-search-input");

searchInput?.addEventListener("input", (event) => {
  console.log(event.target.value);
  const inputValue = searchInput.value;
  const message = document.querySelector("#filter-selected-value");

  if (inputValue) {
    message.textContent = `Buscando empleos relacionados con: ${inputValue}`;
  } else {
    message.textContent = "";
  }
})

const searchForm = document.querySelector("#empleos-search-form");

searchForm?.addEventListener("submit", (event) => {
  // * este metodo previene que el formulario se envie y recargue la pagina
  // event.preventDefault(); 
  console.log("form submitted");
})