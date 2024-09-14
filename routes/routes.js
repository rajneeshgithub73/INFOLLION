import { Router } from "express";
import apicache from "apicache";
import { fetchWithUsername } from "../controllers/controllers.js";
import { authenticate } from "../middlewares/middleware.js";

const cache = apicache.middleware;

const router = Router();

router
  .route("/github/:username")
  .get(authenticate, cache(process.env.CACHE_DURATION), fetchWithUsername);

export default router;
