const express = require("express");
const mongo = require("../src/services/Mongo");
const morgan = require("morgan");
const { CreateUser, GetUsers } = require("./controller/user");
const multer  = require('multer')
require("dotenv").config();

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Destination folder for uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.post("/create", async (req, res) => {
  try {
    const data = await CreateUser(req.body);
    res.status(200).send({ msg: data });
  } catch (e) {
    res.status(500).send({ success: false, message: e.message });
  }
});
app.get('/allUser', upload.single("file"), async (req, res) => {
  // await CreateUser(req.body);
   const data = await GetUsers(req.body);
  try{
    res.status(200).send({ msg: data });
  } catch (e) {
    res.status(500).send({ success: false, message: e.message });
  }
});

app.all("/", (req, resp) => {
  resp.status(200).send({ success: true, message: "Server is working" });
});

app.all("*", (req, resp) => {
  resp.status(404).send({
    success: false,
    message: `given route [${req.method}] ${req.path} not found`,
  });
});

mongo
  .mongoConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
