const repository = require("../repositories/drugstore.repository");

const listDrugstores = () => {
  return repository.listDrugstores();
};

const deleteDrugstore = (drugstoreId) => {
  return repository.deleteDrugstore(drugstoreId);
};

module.exports = {
  listDrugstores,
  deleteDrugstore,
};
