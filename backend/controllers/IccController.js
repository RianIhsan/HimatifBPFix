import PesertaIcc from "../models/IccModel.js";
import PesertaMakrab from "../models/MakrabModel.js";

export const  getPeserta = async (req, res) => {
  try {
    const response = await PesertaIcc.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPesertaById = async (req, res) => {
  try {
    const response = await PesertaIcc.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPeserta = async (req, res) => {
  try {
    await PesertaIcc.create(req.body);
    res.status(201).json({ msg: "Peserta Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePeserta = async (req, res) => {
  try {
    await PesertaIcc.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Peserta Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePeserta = async (req, res) => {
  try {
    await PesertaIcc.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Peserta Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

// Makrab

export const getPesertaM = async (req, res) => {
  try {
    const response = await PesertaMakrab.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPesertaMById = async (req, res) => {
  try {
    const response = await PesertaMakrab.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPesertaM = async (req, res) => {
  try {
    await PesertaMakrab.create(req.body);
    res.status(201).json({ msg: "Peserta Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePesertaM = async (req, res) => {
  try {
    await PesertaMakrab.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Peserta Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePesertaM = async (req, res) => {
  try {
    await PesertaMakrab.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Peserta Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
