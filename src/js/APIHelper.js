export default class APIHelper {
  static baseURL = 'https://api.tvmaze.com/shows';

  static getAll(page = 1) {
    try {
      return fetch(`${APIHelper.baseURL}?page=${page}`).then((response) => response.json());
    } catch {
      console.log("Error: Couldn't fetch films data");
    }
    return [];
  }

  static getDetails(showId) {
    try {
      return fetch(`${APIHelper.baseURL}/${showId}`).then((response) => response.json());
    } catch {
      console.log("Error: Couldn't fetch film details");
    }
    return {};
  }
}
