//1. Importar el modulo global http
const http = require("http");
const fs = require("fs");
const { navbar } = require("./Views/navbar");
const { boostrap } = require("./Views/boostrap");
const inicio = require("./Views/home");
const usuarios = require("./Views/usuarios");
const categorias = require("./Views/categorias");
const clientes = require("./Views/clientes");
const empleados = require("./Views/empleados");
const ventas = require("./Views/ventas");
const compras = require("./Views/compras");

const port = 7000;
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  boostrap;
  let title;
  let content;
  switch (url) {
    case "/":
      title = `Home`;
      content = inicio(title);
      break;
    case "/users":
      title = `Users`;
      content = usuarios(title);
      break;
    case "/categories":
      title = `Categorias`;
      content = categorias(title);
      break;
    case "/customers":
      title = `Clientes`;
      content = clientes(title);
      break;
    case "/createcustomer":
      if (method === "POST") {
        fs.writeFileSync("Cliente.txt", "Cliente Creado");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }
      break;
    case "/employees":
      title = `Empleados`;
      content = empleados(title);
      break;
    case "/sales":
      title = `Ventas`;
      content = ventas(title);
      break;
    case "/shopping":
      title = `Compras`;
      content = compras(title);
      break;
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html>
    <head>
      <title>${title}</title>
      ${boostrap}
    </head>
    <body class="bg-dark">
      ${navbar}
      <div class="container-fluid">
        ${content}
      </div>
    </body>
  </html>
  `);
});

server.listen(port);
