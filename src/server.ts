import express, { Application, Request, Response } from "express";
import { dbconnection } from "./database/connection";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.route";
import clienteRoutes from "./routes/cliente.route";
import leadRoutes from "./routes/lead.route";
import authRoutes from "./routes/auth.route";
import interaccionRoutes from "./routes/interacciones.route";



class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuario: "/api/v1/usuario",
    login: "/api/v1/login",
    cliente: "/api/v1/cliente",
    lead: "/api/v1/lead",
    interaccion: "/api/v1/interaccion",

  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    //Base de datos
    dbconnection();

    //Medtodos Iniciales
    this.middlewares();

    //Rutas

    this.routes();
  }

  miPrimerApi() {
    this.app.get("/", (req: Request, res: Response) =>
      res.status(200).json({
        msg: "Api funcionando correctamente",
      })
    );
  }

  middlewares() {
    this.app.use(cors());

    //Lectura del Body en json
    this.app.use(express.json());

    this.miPrimerApi();
  }

  routes(): void {
    this.app.use(this.apiPaths.usuario, usuarioRoutes);
    this.app.use(this.apiPaths.cliente, clienteRoutes);
    this.app.use(this.apiPaths.lead, leadRoutes);
    this.app.use(this.apiPaths.login, authRoutes);
    this.app.use(this.apiPaths.interaccion, interaccionRoutes);
  
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo por el puerto", this.port);
    });
  }
}

export default Server;
