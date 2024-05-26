import { Request, RequestHandler, Response } from "express";
import LeadModel from "../models/lead.model";

export const crearLead = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const newLead = new LeadModel({
      ...body,
    });

    const leadCreado = await newLead.save();

    res.status(200).json({
      ok: true,
      msg: "Lead creado con exito",
      usuario: leadCreado,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      error,
      msg: "Error al crear el lead",
    });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  try {
    const leads = await LeadModel.find();

    res.json({
      ok: true,
      leads,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al consultar los leads",
    });
  }
};

export const eliminarLead = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const leadEliminado = await LeadModel.findByIdAndDelete({ _id: id });

    res.json({
      ok: true,
      leadEliminado,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Lead eliminado con exito",
    });
  }
};

export const getLead = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const lead = await LeadModel.findById({ _id: id });

    res.json({
      ok: true,
      lead,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al consultar el cliente seleccionado",
    });
  }
};

export const updatelead = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { body } = req;

    const leadActualizado = await LeadModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.json({
      ok: true,
      msg: "Lead actualizado",
      lead: leadActualizado,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al actualizar el lead seleccionado",
    });
  }
};
