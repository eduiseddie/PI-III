import prisma from "../db/client.js";

const controller = {};

controller.create = async function (req, res) {
  try {
    await prisma.raca.create({ data: req.body });

    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.retrieveAll = async function (req, res) {
  try {
    const especie = req.query.especie;

    if (req.query.especie) {
      const result = await prisma.raca.findMany({
        where: { especieId: especie },
      });
      if (result) res.send(result);
      else res.status(404).end();
      return;
    }

    const result = await prisma.raca.findMany({
      orderBy: [{ nome: "asc" }]
    });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.retrieveOne = async function (req, res) {
  try {
    const result = await prisma.raca.findUnique({
      where: { id: req.params.id },
    });
    if (result) res.send(result);
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.update = async function (req, res) {
  try {
    const result = await prisma.raca.update({
      where: { id: req.params.id },
      data: req.body,
    });

    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.delete = async function (req, res) {
  try {
    const result = await prisma.raca.delete({
      where: { id: req.params.id },
    });

    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default controller;
