import express from "express";
import {
  countByStatus,
  createPet,
  deletePet,
  getPet,
  getPets,
  updatePet,
} from "../controllers/Pet.js";
import Pet from "../models/Pet.js";
const router = express.Router();

//CREATE
router.post("/",createPet);

//UPDATE
router.put("/:id",updatePet);
//DELETE
router.delete("/:id",deletePet);
//GET

router.get("/find/:id", getPet);
//GET ALL

router.get("/", getPets);
router.get("/countByStatus", countByStatus);

export default router;
