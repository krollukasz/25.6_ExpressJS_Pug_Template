var express = require("express");
var app = express();

app.set("view engine", "pug"); // informacja o zamiarze wykorzystania Puga
app.set("views", "./views"); // ustawienie widoków ("views") w folderze "./views"

app.use(express.static("views"));

app.get("/", function(req, res) {
  res.render("index.pug");
});

// renderowanie formularza z szablonu
app.get("/loginform", function(req, res) {
  res.render("loginform.pug", {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  });
});

// renderowanie strony po zalogowaniu
app.get("/auth/google", function(req, res) {
  res.render("userlogged.pug");
});

var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Aplikacja nacłuchuje na http://" + host + ":" + port);
});