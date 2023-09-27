const RateModel = require("../models/rate.model");

module.exports.getRates = async (req, res) => {
  const rates = await RateModel.find();
  res.status(200).json(rates);
};

module.exports.setRates = async (req, res) => {
  if (!req.body.date) {
    res.status(400).json({
      message:
        "Merci d'ajouter un tarif, une date, le nom du logement et si celui-ci est disponible.",
    });
    return; // Ensure to return to exit the function in case of validation error
  }

  // Check if a rate with the same date and accommodation already exists
  const existingRate = await RateModel.findOne({
    date: req.body.date,
    accomodation: req.body.accomodation,
  });

  if (existingRate) {
    // Handle the case where a rate with the same date and accommodation already exists
    res.status(409).json({
      message: "Un tarif avec la même date et logement existe déjà.",
    });
    return;
  }

  // Create a new rate if no existing rate was found
  const rate = await RateModel.create({
    date: req.body.date,
    rate: req.body.rate,
    available: req.body.available,
    accomodation: req.body.accomodation,
  });

  res.status(200).json(rate);
};

module.exports.editRate = async (req, res) => {
  const rate = await RateModel.findById(req.params.id);
  if (!rate) {
    res.status(400).json({
      message: "ce tarif n'existe pas.",
    });
  }
  const updateRate = await RateModel.findByIdAndUpdate(rate, req.body, {
    new: true,
  });
  res.status(200).json(updateRate);
};
module.exports.deleteRate = async (req, res) => {
  const rate = await RateModel.findById(req.params.id);

  if (!rate) {
    return res.status(404).json({ message: "Tarif introuvable" });
  }

  await rate.deleteOne();
  res.status(200).json("Tarif supprimé " + req.params.id);
};
