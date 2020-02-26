const { Router } = require("express");

const routes = Router();

const DevControllers = require("./controllers/DevControllers")

const SearchController = require("./controllers/SearchController")

routes.get("/devs", DevControllers.index)


routes.post("/devs", DevControllers.store)

routes.get("/search", SearchController.index)
module.exports = routes;