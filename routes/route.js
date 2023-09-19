import express from "express";
import {
  createAlien,
  deleteAlien,
  getAll,
  getById,
  updateAlien,
} from "../controllers/aliensController.js";

const route = express.Router();

route.post("/create", createAlien);
route.get("/get", getAll);
route.get("/get/:id", getById);
route.put("/update/:id", updateAlien);
route.delete("/delete/:id", deleteAlien);

export default route;
