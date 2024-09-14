const path = require("path");
const express = require("express");

const routDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  /*res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Products</button></form>'
  );*/
  /*res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));*/
  res.sendFile(path.join(routDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
