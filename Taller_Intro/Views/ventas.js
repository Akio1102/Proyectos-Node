function ventas(title) {
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
                <th scope="col">PRODUCTO</th>
                <th scope="col">VENTAS TOTALES</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Gorras</td>
                <td>$10,500</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Sandalias</td>
                <td>$15,200</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Zapatos</td>
                <td>$8,750</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Jeans</td>
                <td>$12,300</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Buzos</td>
                <td>$9,800</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Camisas</td>
                <td>$11,600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}
module.exports = ventas;
