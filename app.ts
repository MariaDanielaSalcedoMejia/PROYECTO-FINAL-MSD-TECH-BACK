import dotenv from "dotenv"
import Server from "./src/server";

//Configurando .env

dotenv.config();

const server = new Server();
server.listen();