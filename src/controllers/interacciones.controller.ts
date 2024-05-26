import { Request, RequestHandler, Response } from "express";
import InteraccionModel from "../models/interacciones.model";


export const crearInteraccion = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const newInteraccion = new InteraccionModel({
      ...body,
    });

    const interaccionCreada = await newInteraccion.save();

    res.status(200).json({
      ok: true,
      msg: "Interaccion creada con exito",
      usuario: interaccionCreada,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      error,
      msg: "Error al crear la interaccion",
    });
  }
};

export const getInteracciones = async (req: Request, res: Response) => {
  try {
    const interaccion = await InteraccionModel.find();

    res.json({
      ok: true,
      interaccion,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al consultar las interacciones",
    });
  }
};

export const eliminarInteraccion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const interaccionEliminada = await InteraccionModel.findByIdAndDelete({ _id: id });

    res.json({
      ok: true,
      interaccionEliminada,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Interaccion eliminada con exito",
    });
  }
};

export const getInteraccion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const interaccion = await InteraccionModel.findById({ _id: id });

    res.json({
      ok: true,
      interaccion,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al consultar la interaccion seleccionada",
    });
  }
};

export const updateInteraccion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { body } = req;

    const interaccionActualizada = await InteraccionModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.json({
      ok: true,
      msg: "Interaccion actualizada",
      lead: interaccionActualizada,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al actualizar el lead seleccionado",
    });
  }
};
