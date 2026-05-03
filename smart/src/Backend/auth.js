import express from 'express';
import PendingModel from '../Backend/user.js';
import bcrypt from 'bcryptjs'

const router = express.Router();

const register = async (req, res) => {
    try {
        const { email, phone, address, select, name } = req.body;
        console.log("Received data: ", { email, phone, address, select, name });
         
        const userCreated = await PendingModel.create({email, phone, address, select, name})
        console.log("User created: ", userCreated);

        res.status(200).json({ msg: "User registered successfullyy", userId: userCreated._id.toString(), }); 
    }   catch (error) {
        console.error("Error in register function:", error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }   
};

router.get("/info", (req, res) => {
    res.status(200).send("Ho gya Kaamm");
});

router.post("/Reg", (req, res) => {
    register(req, res);
});

export default router;