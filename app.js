import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
const app = express();
const PORT = process.env.port;

app.use(express.json());
app.use(cors());

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.use("/notes", router);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
