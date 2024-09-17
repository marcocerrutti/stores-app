const path = require("path");
const routDir = require("../util/path");
const express = require("express");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  /* res.send("<h1>Hello from Express!</h1>");*/
  /*res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));*/

  /*console.log('shop.js', adminData.products);
 res.sendFile(path.join(routDir, 'views', 'shop.html'))*/

  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
