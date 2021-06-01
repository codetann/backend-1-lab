const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

/* Routes */
app.use("/", routes.home);
app.use("/api", routes.users);
app.use("/weather", routes.weather);

/* Server */
app.listen(4000, () => console.log("Server running on port 4000"));
