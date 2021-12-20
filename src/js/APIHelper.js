export default class APIHelper {
  static baseURL = "https://api.tvmaze.com/shows";
  static async getAll(page = 1) {
    try {
      this.data = await fetch(`${APIHelper.baseURL}?page=${page}`);
      const allData = this.data.json();
      return allData;
    } catch {
      console.log("Error: Couldn't fetch films data");
    }
  }

  static async getDetails(showId) {
    try {
      this.data = await fetch(`${APIHelper.baseURL}/${showId}`);
      const allData = this.data.json();
      return allData;
    } catch {
      console.log("Error: Couldn't fetch film details");
    }
  }
}
