const express = require("express");
const app = express();

require("dotenv").config();

const path = require("path");

// App Setting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static Files
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/show", express.static(path.join(__dirname, "public")));

// DB Connect

const DB_URL = process.env.MONGODB_URI;
const { connectDB } = require("./db/connectDB.js");
connectDB(DB_URL);

// Routes
const indexRouter = require("./routes/indexRouter.js");
app.use(indexRouter);

// Error Handler
const { error404Handler, errorHandler } = require("./middlewares/errorHandler.js");
app.use(error404Handler);
app.use(errorHandler);

// Port Listening
const port = process.env.PORT;
app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
