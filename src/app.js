require("dotenv").config();
require("./database");

const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.swaggerConfig(); // Adicionado para organizar o Swagger
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json({ limit: "50mb" }));
  }

  swaggerConfig() {
    const swaggerOptions = {
      swaggerDefinition: {
        openapi: "3.0.0",
        info: {
          title: "API Geração Tech 3.0",
          version: "1.0.0",
          description: "Documentação do projeto de E-commerce Final",
        },
        servers: [
          {
            url: `http://localhost:${process.env.PORT || 3001}`,
            description: "Servidor Local",
          },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
      },
      // ATENÇÃO: Verifique se suas rotas estão em src/routes ou apenas em routes
      apis: ["./src/routes/*.js"],
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this.server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }

  routes() {
    this.server.use("/v1/usuario", userRoutes);
    this.server.use("/v1/categoria", categoryRoutes);
    this.server.use("/v1/produto", productRoutes);
  }
}

module.exports = new App().server;
