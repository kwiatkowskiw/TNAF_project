/* tslint:disable no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();

server.get("/products", (req, res, next) => {
  setTimeout(next, 300);
});

server.use(middlewares);
router.render = (req, res) => {
  res.json({
    data: res.locals.data,
    total: res.get("X-Total-Count"),
  });
};
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
