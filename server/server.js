const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");

const method_override = require('method-override')
const session = require('express-session')

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(method_override('_method'))

app.get("/", (req, res) => {
    res.json({ message: "welcome to application" });
});
require("./app/routes/article.routes")(app);

var corsOptions = {
    origin: 'http://localhost:8081'
}


app.use(session({
  secret: 'mySecret',
  name: 'username', // optional
  saveUninitialized: false,
  resave: true,
  loggined: false
}))

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });



