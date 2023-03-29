const service = require("../services/drugstore.service");

const listDrugstore = (req, res) => {
  res.send(service.listDrugstores());
};

const deleteDrugstore = (req, res) => {
  const id = req.params.id; // Récupérer l'id de la pharmacie à supprimer depuis les paramètres de la requête
  res.send(service.deleteDrugstore(id)); // Envoyer une réponse HTTP pour confirmer la suppression
};

module.exports = {
  listDrugstore,
  deleteDrugstore,
};
