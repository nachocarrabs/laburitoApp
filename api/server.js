import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const url = process.env.MONGODB;

const app = express();
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", authRoute);
app.use("/api/conversations/", conversationRoute);
app.use("/api/gigs/", gigRoute);
app.use("/api/messages/", messageRoute);
app.use("/api/orders/", orderRoute);
app.use("/api/reviews/", reviewRoute);
app.use("/api/users/", userRoute);

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log(">>>>>> Database connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(3000, () => {
  connect();
  console.log("Backend server listen on port 3000");
});
