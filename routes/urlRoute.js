const express = require("express");
const { updateURL, getURL } = require("../controller/urlController");
const { requireSignin } = require("../middlewares/atuhMiddleware");


const urlrouter = express.Router();

urlrouter.get("/:shortUrl",requireSignin, getURL);
urlrouter.post("/shorten",requireSignin, updateURL);

module.exports = {
  urlrouter,
};
