import app from "./app.js";
const main = () => {
  app.listen(app.get("PORT"));
  console.log(`Run in Port ${app.get("PORT")}`);
};

main();
