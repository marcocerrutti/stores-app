const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//set the templating engine
app.set("view engine", "ejs");

//app.set("view engine", "pug");   //pug

app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  /* res.status(404).send("<h1>Page not found</h1>");*/
  /*res.sendFile(path.join(__dirname, "views", "404.html"));*/
  res.status(404).render("404", { pageTitle: "Page Not Found", path: null });
});

app.listen(3000);
