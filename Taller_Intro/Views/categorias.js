function categorias(title) {
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
                <th scope="col">NOMBRE EMPRESA</th>
                <th scope="col">DIRECCION</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Campus</td>
                <td>Calle 1</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Peras Inc</td>
                <td>Calle 100</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>AgroferCol</td>
                <td>Avenida 200</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>UIS</td>
                <td>Carrera 9</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>UTS</td>
                <td>Carrera 7</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Juan Valdez</td>
                <td>Carre 0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

module.exports = categorias;
