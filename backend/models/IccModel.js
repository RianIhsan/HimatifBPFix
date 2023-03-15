import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PesertaIcc = db.define(
  "peserta_icc",
  {
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default PesertaIcc;

(async () => {
  await db.sync();
})();
