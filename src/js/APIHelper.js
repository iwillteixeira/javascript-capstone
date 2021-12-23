export default class APIHelper {
  static baseURL = 'https://api.tvmaze.com/shows';

  static async getAll(page = 1) {
    try {
      const shows = await fetch(`${APIHelper.baseURL}?page=${page}`).then(
        (response) => response.json(),
      );
      return shows;
    } catch {
      document.alert("Error: Couldn't fetch films data");
    }
    return [];
  }

  static async getDetails(showId) {
    try {
      const showDetails = await fetch(`${APIHelper.baseURL}/${showId}`).then(
        (response) => response.json(),
      );
      return showDetails;
    } catch {
      document.alert("Error: Couldn't fetch film details");
    }
    return {};
  }
}
