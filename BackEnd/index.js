import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors';
import path from "path";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;
const URI = process.env.MDB_URI;


/* ****** Middleware ****** */
app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cookieParser());
app.use(cors({
    origin:true,
    credentials: true
}));

mongoose.connect(URI)

    .then(() =>{
        app.listen(port, () => {
            console.log("Connected to MongooseDB")
            console.log(`Server is running on: http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.log("err:", err);
    });

// app.use('/api/auth', auth);
// app.use('/api/posts', posts);
// app.use('/api/categories', categories);
// app.use('/api/authorPost', authorPost);
// app.use('/api/google', google);

app.use('/api/users', users);   
// app.use('/api/products', porducts);

/* API upload image */
app.post('/api/upload', upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded");
});

app.get('/', (req, res) => {
    res.json("heelo");
})