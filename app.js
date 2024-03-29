import express from "express";
import connectDB from "./database/db.js";
import userRouter from "./Routes/userRouter.js";
const app = express();
const PORT = 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("server started!@");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server running on the port http:\\localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error connecting to mongoDB Database ${error.message}`);
  }
};
startServer();
