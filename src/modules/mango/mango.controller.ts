import { Request, Response } from "express";
import Mango from "./mango.model";
import { mongo } from "mongoose";

const createMango = async (req: Request, res: Response) => {
  try {
    const data = await Mango.create(req.body);

    res.send({
      success: true,
      message: "Mango Created Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error Hppend",
      error,
    });
  }
};

const getMangos = async (req: Request, res: Response) => {
  try {
    const data = await Mango.find();
    res.send({
      success: true,
      message: "Mango getting Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: true,
      message: "Error",
      error,
    });
  }
};

const getMangoById = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const data = await Mango.findById(mangoId);
    res.send({
      success: true,
      message: "Mango getting Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error",
      error,
    });
  }
};

const updateMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;

    const data = await Mango.findByIdAndUpdate(mangoId, req.body, {
      new: true,
      runValidators: true,
    });
    res.send({
      success: true,
      message: "Mango updated Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error",
      error,
    });
  }
};

const deleteMangoById = async (req: Request, res: Response) => {
  const mangoId = req.params.mangoId;

  const data = await Mango.findByIdAndDelete(mangoId);
  res.send({
    success: true,
    message: "Mango deleted Successfully",
    data,
  });
};

export const mangoController = {
  createMango,
  getMangos,
  getMangoById,
  updateMango,
  deleteMangoById,
};
