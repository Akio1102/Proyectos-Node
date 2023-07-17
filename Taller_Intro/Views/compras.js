function compras(title) {
  return `<div class="container-fluid mt-5">
      <div class="card text-center text-bg-dark border border-0">
        <div class="card-header">
          <h2 class="card-title">${title}</h2>
        </div>
        <div class="card-body d-flex align-items-center">
          <table class="table table-dark table-hover text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">COMPRAS X MES</th>
                <th scope="col">TOTAL UNIDADES</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Sandalias</td>
                <td>1000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Drones</td>
                <td>8</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Celulares</td>
                <td>100</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Tv</td>
                <td>400</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Lavadores</td>
                <td>60</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Portatiles</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}
module.exports = compras;
