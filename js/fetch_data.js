// * usando fetch para obtener datos de una API o servidor

const container = document.querySelector(".jobs-listings");

fetch("../data/data.json")
  .then((response) => response.json())
  .then((jobs) => {
    console.log(jobs);

    jobs.map((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.data.modalidad}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="btn-apply-job">Aplicar</button>`;

      container.appendChild(article);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
