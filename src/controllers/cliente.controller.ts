import { Request, RequestHandler, Response } from "express";
import ClientesModel from "../models/cliente.model";

export const crearCliente = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const newCliente = new ClientesModel({
      ...body,
    });

    const clienteCreado = await newCliente.save();

    res.status(200).json({
      ok: true,
      msg: "Cliente creado con exito",
      usuario: clienteCreado,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      error,
      msg: "Error al crear el cliente",
    });
  }
};

export const getClientes = async (req: Request, res: Response) => {
  try {
    const clientes = await ClientesModel.find();

    res.json({
      ok: true,
      clientes,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al consultar los clientes",
    });
  }
};

export const eliminarCliente = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const clienteEliminado = await ClientesModel.findByIdAndDelete({ _id: id });

    res.json({
      ok: true,
      clienteEliminado,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Cliente eliminado con exito",
    });
  }
};

export const getCliente = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const cliente = await ClientesModel.findById({ _id: id });

    res.json({
      ok: true,
      cliente,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al consultar el cliente seleccionado",
    });
  }
};

export const updateCliente = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { body } = req;

    const clienteActualizado = await ClientesModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.json({
      ok: true,
      msg: "Cliente actualizado",
      usuario: clienteActualizado,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al actualizar el cliente seleccionado",
    });
  }
};
