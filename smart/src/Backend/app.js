import express from 'express'
import router from '../Backend/auth.js'
import mongodb from '../Backend/mongo.js'
import cors from 'cors'
const app = express()
const port = 6200

const corsOptions = {
    origin: "http://localhost:5173", 
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json())

app.use("/Orton", router)   

mongodb().then(()=> {
    app.listen(port, () => {
        console.log("Server is running")
    })
})


