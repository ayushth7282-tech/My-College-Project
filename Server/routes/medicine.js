import express from "express";
import Medicine from "../models/Medicine.js";

const router = express.Router();

router.post("/add", async (req, res) => {

    console.log(req.body);
    
  try {
    const medicine = await Medicine.create(req.body);

    res.status(201).json({
      message: "Medicine Added",
      medicine,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const medicines = await Medicine.find();

    res.status(200).json(medicines);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);

    res.json({
      message: "Medicine Deleted",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

export default router;