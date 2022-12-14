const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/index");
const loaders = require("./loaders/index");
const events = require("./scripts/events/index");
const path = require("path");
const errorMiddleware = require("./middlewares/errorMiddleware");
const { UserRoutes } = require("./api-routes");

config();
loaders();
events();

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(
  fileUpload({
    limits: { fileSize: 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Resim boyutu en fazla 1MB olmalıdır!",
  })
);

app.listen(process.env.PORT || 5000, () => {
  console.log(`SERVER ${process.env.PORT} PORTUNDA ÇALIŞIYOR.`);
  app.use("/users", UserRoutes);

  app.use((req, res, next) => {
    const error = new Error("Aradığınız sayfa bulunmamaktadır!");
    error.status = 404;
    next(error);
  });

  app.use(errorMiddleware);
});
