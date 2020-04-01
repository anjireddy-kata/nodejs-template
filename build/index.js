const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Tech Monks learning program." });
});
// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
// https://bezkoder.com/node-js-rest-api-express-mysql/
// https://time2hack.com/creating-rest-api-in-node-js-with-express-and-mysql/
// https://www.codementor.io/@mattgoldspink/nodejs-best-practices-du1086jja
// https://rollout.io/blog/advanced-node-js-project-structure-tutorial/
// https://khalilstemmler.com/blogs/typescript/node-starter-project/
// https://softwareontheroad.com/ideal-nodejs-project-structure/
//# sourceMappingURL=index.js.map