import { series } from "./data.js";
const tableBody = document.getElementById("series-body");
const averageText = document.getElementById("average");
function renderSeries() {
    let totalSeasons = 0;
    series.forEach(serie => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });
    const average = totalSeasons / series.length;
    averageText.textContent = `Promedio de temporadas: ${average.toFixed(2)}`;
}
renderSeries();
