import Acciones from "../Models/Acciones.js";

export const getAcciones = async (req, res) => {
  try {
    const acciones = await Acciones.find();
    res.status(200).json(acciones);
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const postAcciones = async (req, res) => {
  const acciones = new Acciones(req.body);
  try {
    const newAcciones = await acciones.save();
    res.status(201).json(newAcciones);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const deleteAcciones = async (req, res) => {
  const acciones = new Acciones(req.body);
  try {
    const newAcciones = await acciones.save();
    res.status(201).json(newAcciones);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const updateAcciones = async (req, res) => {
  const acciones = new Acciones(req.body);
  try {
    const newAcciones = await acciones.save();
    res.status(201).json(newAcciones);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const deleteCamisa = async (req, res) => {
  try {
    await Camisas.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: `Camisa Eliminado` });
  } catch (error) {
    res.status(404).send({ error: "Camisa no existe" });
  }
};

export const updateCamisa = async (req, res) => {
  try {
    const camisa = await Camisas.findOne({ _id: req.params.id });
    if (req.body.tipo) {
      camisa.tipo = req.body.tipo;
    }
    if (req.body.color) {
      camisa.color = req.body.color;
    }
    await camisa.save();
    res.status(200).json(camisa);
  } catch (error) {
    res.status(404).send({ error: "Camisa no existe" });
  }
};
