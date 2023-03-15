import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PesertaMakrab = db.define(
  "peserta_makrab",
  {
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default PesertaMakrab;

(async () => {
  await db.sync();
})();
