import { Sequelize } from "sequelize";

const db = new Sequelize("hima", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
