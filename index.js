const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");

const app = express();

dotenv.config();
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/product", productRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);

mongoose.connect(process.env.MONGO_DB_URL);

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
