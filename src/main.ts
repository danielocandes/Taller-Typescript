import { series } from "./data.js";

const tableBody = document.getElementById("series-body")!;
const averageText = document.getElementById("average")!;

const detailCard = document.getElementById("serie-detail")!;
const detailImage = document.getElementById("serie-image") as HTMLImageElement;
const detailTitle = document.getElementById("serie-title")!;
const detailDescription = document.getElementById("serie-description")!;
const detailLink = document.getElementById("serie-link") as HTMLAnchorElement;

function renderSeries(): void {
  let totalSeasons = 0;

  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>
        <span class="text-primary text-decoration-underline">
          ${serie.name}
        </span>
      </td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    row.style.cursor = "pointer";
    row.addEventListener("click", () => {
      console.log("Clic en:", serie.name);
      showSerieDetail(serie);
    });

    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
  });

  const average = totalSeasons / series.length;
  averageText.textContent = `Promedio de temporadas: ${average.toFixed(2)}`;
}

function showSerieDetail(serie: any): void {
  detailImage.src = serie.image;
  detailTitle.textContent = serie.name;
  detailDescription.textContent = serie.description;
  detailLink.href = serie.link;

  // Mostramos la card (usando clases de Bootstrap)
  detailCard.classList.remove("d-none");
}
console.log("main.ts ejecutado");

renderSeries();
