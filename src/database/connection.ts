import mongoose from "mongoose";
//Realizando la conexión a la base de datos

export const dbconnection = async () => {
  try {
    const dbUrl = process.env.DB_CONNECTION;

    if (!dbUrl) {
      throw new Error("Error en la base de datos");
    }
    await mongoose.connect(dbUrl);
    console.log("DB Online");
  } 
  catch (error) {
    console.log(error);
    console.log("Error en la conexion a la base de datos");
  }
};
