function inicio(title) {
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
                <th scope="col">CANTIDAD</th>
                <th scope="col">PRECIO UNIDAD</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Manzanas</td>
                <td>1000</td>
                <td>$ 5.000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Peras</td>
                <td>8000</td>
                <td>$ 4.000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bananos</td>
                <td>150000</td>
                <td>$ 1.000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Papas</td>
                <td>250000</td>
                <td>$ 2.000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Yucas</td>
                <td>80000</td>
                <td>$ 3.500</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Cafe</td>
                <td>1500000</td>
                <td>$ 1.500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

module.exports = inicio;
