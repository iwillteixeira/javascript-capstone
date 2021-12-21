export default class InvolvementAPIHelper {
  static AppId = 'x3O8Z7Ily4B1bmO5FugG';

  static baseURL =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  static getLikes() {
    try {
      return fetch(
        `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/likes`,
      ).then((response) => response.json());
    } catch (ex) {
      console.log(ex.message);
    }
    return [];
  }

  static postLikes(showId) {
    try {
      fetch(
        `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/likes`,
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: showId,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
    } catch (ex) {
      console.log(ex.message);
    }
  }
}
