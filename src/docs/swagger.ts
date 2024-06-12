import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://proyecto-final-msd-tech-back.onrender.com/api/v1",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      User: {
        // Asegúrate de que este esquema está definido correctamente
        type: "object",
        required: ["tipoDocumento", "numeroDocumento", "password", "rol"],
        properties: {
          tipoDocumento: {
            type: "string",
          },
          numeroDocumento: {
            type: "number",
          },
          password: {
            type: "string",
          },
          rol: {
            type: "string",
            enum: ["USER", "ADMIN"],
            description:
              "El rol del usuario, que puede ser uno de los valores especificados.",
          },
          nombre: {
            type: "string",
          },
          email: {
            type: "string",
            description: "El email del usuario, debe ser único.",
          },
        },
      },
      Cliente: {
        type: "object",
        required: ["nombre", "email"],
        properties: {
          nombre: {
            type: "string",
          },
          email: {
            type: "string",
            description: "El email del cliente, debe ser único.",
          },
          telefono: {
            type: "string",
          },
        },
      },
      Interaccion: {
        type: "object",
        required: ["cliente", "descripcion"],
        properties: {
          tipo: {
            type: "string",
          },
          descripcion: {
            type: "string",
          },
          descripciones: {
            type: "string",
          },
        },
      },
      Lead: {
        type: "object",
        required: ["nombre", "email"],
        properties: {
          nombre: {
            type: "string",
          },
          email: {
            type: "string",
            description: "El email del lead, debe ser único.",
          },
          telefono: {
            type: "string",
          },
        },
      },
    },
  },
  tags: [
    {
      name: "Usuarios",
      description: "Operaciones relacionadas con los usuarios",
    },
    {
      name: "Clientes",
      description: "Operaciones relacionadas con los clientes",
    },
    {
      name: "Interacciones",
      description: "Operaciones relacionadas con las interacciones",
    },
    {
      name: "Leads",
      description: "Operaciones relacionadas con los leads",
    },
    {
      name: "Auth",
      description: "Operaciones relacionadas con la autenticación",
    },
  ],
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
