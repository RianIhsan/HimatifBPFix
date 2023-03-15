import express from "express";
import {
  getPeserta,
  getPesertaById,
  createPeserta,
  updatePeserta,
  deletePeserta,
  getPesertaM,
  getPesertaMById,
  createPesertaM,
  updatePesertaM,
  deletePesertaM,
} from "../controllers/IccController.js";

const router = express.Router();

router.get("/peserta", getPeserta);
router.get("/peserta/:id", getPesertaById);
router.post("/peserta", createPeserta);
router.patch("/peserta/:id", updatePeserta);
router.delete("/peserta/:id", deletePeserta);

// Makrab
router.get("/pesertaM", getPesertaM);
router.get("/pesertaM/:id", getPesertaMById);
router.post("/pesertaM", createPesertaM);
router.patch("/pesertaM/:id", updatePesertaM);
router.delete("/pesertaM/:id", deletePesertaM);

export default router;
