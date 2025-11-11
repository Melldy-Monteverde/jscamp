// *capturando eventos del filtro de localización
const filter = document.querySelector("#filter-location");
const message = document.querySelector("#filter-selected-value");

filter?.addEventListener("change", (event) => {
  const jobs = document.querySelectorAll(".job-listing-card");
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
});

const searchForm = document.querySelector("#empleos-search-form");

searchForm?.addEventListener("submit", (event) => {
  // * este metodo previene que el formulario se envie y recargue la pagina
  // event.preventDefault();
  console.log("form submitted");
});
