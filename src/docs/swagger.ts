import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de MDS TECHNOLOGY",
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://proyecto-final-msd-tech-back.onrender.com/api/v1",
      // url: "http://localhost:2000/documentation/api/v1",
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
      usuarios: {
        type: "object",
        required: [
          "tipoDocumento",
          "numeroDocumento",
          "password",
          "rol",
          "password",
        ],
        properties: {
          nombre: {
            type: "string",
          },
          email: {
            type: "string",
            description: "El email del usuario, debe ser único.",
          },
          tipoDocumento: {
            type: "string",
          },
          numeroDocumento: {
            type: "number",
            description: "El numeroDocumento del usuario, debe ser único.",
          },
          numeroCelular: {
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
        },
      },
      clientes: {
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
          numeroCelular: {
            type: "string",
          },
          direccion: {
            type: "string",
          },
        },
      },
      interacciones: {
        type: "object",
        required: ["cliente"],
        properties: {
          cliente: {
            type: "string",
          },
          llamadas: {
            type: "boolean",
          },
          correos: {
            type: "boolean",
          },
          reuniones: {
            type: "boolean",
          },
          comentarios: { type: "string" },
        },
      },
      leads: {
        type: "object",
        required: ["cliente", "email"],
        properties: {
          cliente: {
            type: "string",
          },
          descripccion: {
            type: "string",
            description: "Ingresar una breve descripcion del lead.",
          },
          estado: {
            type: "boolean",
            description:
              "Define si el lead esta activo (true) o inactivo (false)",
          },
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
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
  security: [
    {
      Bearer: [],
    },
  ],
};

export default swaggerJSDoc(swaggerOptions);
