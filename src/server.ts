import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./modules/user/user.route";
import routes from "./modules/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
  res.send({ success: true, message: "I am here " });
});

async function server() {
  try {
    await mongoose.connect(config.database_url!);
    console.log("Connected to MongoDB Using Mongoose!!");

    app.listen(config.port, () => {
      console.log(`Server Running on port ${5000} `);
    });
  } catch (error) {
    console.error(`Server error ${server}`);
  }
}

server();
