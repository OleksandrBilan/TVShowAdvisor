import axios from "axios";
import { BASE_URL, API_KEY } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}tv/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations?api_key=${API_KEY}`
    );
    return response.data.results;
  }
}
