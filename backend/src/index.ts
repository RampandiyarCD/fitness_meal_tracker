import express from "express";
import { myDataSource } from "./config/database";
import userRoutes from "./routes/userRoutes";
import mealRoutes from "./routes/mealRoutes";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/user", userRoutes);
app.use("/meals", mealRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await myDataSource.initialize();
    console.log(`Database Connected Successfully`);
    console.log(`Server Running Successfully ${process.env.PORT}`);
  } catch (error) {
    console.error();
  }
});
