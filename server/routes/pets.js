const express = require("express");
const Pet = require("../models/Pet");

const router = express.Router();

// Get all pets
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ error: "Error fetching pets" });
  }
});

// Add a new pet
router.post("/", async (req, res) => {
  try {
    const { name, description, type } = req.body;
    const newPet = new Pet({ name, description, type });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(500).json({ error: "Error adding pet" });
  }
});

// Update adoption status
router.put("/:id/adopt", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: "Pet not found" });

    pet.adopted = true;
    await pet.save();
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ error: "Error updating adoption status" });
  }
});

module.exports = router;
