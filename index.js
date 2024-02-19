const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/product", productRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);

mongoose.connect(
  "mongodb+srv://ashishsingla18:B0QCe2fgl0q4chya@cluster0.7mrmiav.mongodb.net/?retryWrites=true&w=majority"
);

app.listen("3001", () => {
  console.log("server is running on PORT 3001");
});
