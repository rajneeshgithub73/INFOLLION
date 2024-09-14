import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

const app = express();

dotenv.config();

app.use(cors());

app.use(
  morgan((tokens, req, res) => {
    return [
      `[${new Date().toISOString()}]`,
      tokens.method(req, res),
      tokens.url(req, res),
      `Status: ${tokens.status(req, res)}`,
      `Response Time: ${tokens["response-time"](req, res)} ms`,
      `IP: ${tokens["remote-addr"](req, res)}`,
      `Rate Limit Status: ${req.rateLimit ? req.rateLimit.remaining : "N/A"}`,
    ].join(" | ");
  })
);

const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW,
  max: process.env.RATE_LIMIT_MAX,
  message: "Too many requests. Please try again after a minute.",
  statusCode: 429,
  headers: true,
});
app.use(limiter);

import proxyRouter from "./routes/routes.js";

app.use("/api", proxyRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server listening on port: 5000`);
});
