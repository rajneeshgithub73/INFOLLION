import axios from "axios";
import { ApiResponse } from "../utils/apiResponseHandler.js";
import { ApiError } from "../utils/apiErrorHandler.js";

const fetchWithUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const apiUrl = `https://api.github.com/users/${username}`;

    try {
      const response = await axios.get(apiUrl);
      res.status(200).json(new ApiResponse(200, response.data, "success"));
    } catch (error) {
      throw new ApiError(500, "Error fetching data from external API");
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(error.statusCode, {}, error.message));
  }
};

export { fetchWithUsername };
