function clientes(title) {
  return `
      <div class="container-fluid mt-5">
      <div class="card text-center border border-0">
        <div class="card-header">
          <h2 class="card-title">${title}</h2>
        </div>
        <div class="card-body">
          <form action="/createcustomer" method="POST">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Ingrese Nombre"
              />
              <label for="name">Ingrese Nombre</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>`;
}

module.exports = clientes;
