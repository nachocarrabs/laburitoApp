import express from "express";
const router = express.Router();

// Definir las rutas
router.get("/", (req, res) => {
    res.send("review route");
});

// Otras rutas...

export default router;