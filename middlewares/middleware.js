import { ApiError } from "../utils/apiErrorHandler.js";
import { ApiResponse } from "../utils/apiResponseHandler.js";

export const authenticate = (req, res, next) => {
  try {
    const apiKey = req.headers["apikey"];
    if (apiKey === process.env.API_KEY) {
      next();
    } else {
      throw new ApiError(401, "Unauthorized: Invalid API key");
    }
  } catch (error) {
    res.status(401).json(new ApiResponse(error.statusCode, {}, error.message));
  }
};
