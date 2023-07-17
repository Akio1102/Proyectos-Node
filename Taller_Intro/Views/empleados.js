function empleados(title) {
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
                <th scope="col">NOMBRE EMPLEADO</th>
                <th scope="col">CARGO</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Maximus</td>
                <td>Directora</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Seraphina</td>
                <td>Directora</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Orion</td>
                <td>Lider Ventas</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Lyra</td>
                <td>Lider Marketing</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Atlas</td>
                <td>Contador Jefe</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Aurora</td>
                <td>Abogado Jefe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}
module.exports = empleados;
