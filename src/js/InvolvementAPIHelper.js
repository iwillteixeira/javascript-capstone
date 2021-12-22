export default class InvolvementAPIHelper {
  static AppId = 'x3O8Z7Ily4B1bmO5FugG';

  static baseURL =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  static async getLikes() {
    try {
      const likes = fetch(
        `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/likes`,
      ).then((response) => response.json());
      return likes;
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

  static postComments(modalId, values) {
    fetch(
      `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: parseInt(modalId, 10),
          username: values[0],
          comment: values[1],
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }

  static async getComments(showId) {
    const comments = await fetch(
      `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/comments?item_id=${showId}`,
    ).then((response) => response.json());
    return comments;
  }
}
