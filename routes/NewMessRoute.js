const { Router } = require("express");
const newMessRouter = Router();

// Correct import for the default export
const form = require("../controllers/NewMess");

newMessRouter.get("/", form); // Using `form` directly as a function

module.exports = newMessRouter;
