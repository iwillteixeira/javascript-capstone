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

  static getReservations = async (itemID) => {
    const getURL = `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/reservations?item_id=${itemID}`;
    const rawResp = await fetch(getURL, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    const reservations = rawResp;
    if (reservations.status >= 400 && reservations.status < 600) {
      const result = [];
      return result;
    }
    return reservations.json();
  };

  static async postReservation(idReserv, username, start, end) {
    try {
      await fetch(
        `${InvolvementAPIHelper.baseURL}apps/${InvolvementAPIHelper.AppId}/reservations/`,
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: idReserv,
            username,
            date_start: start,
            date_end: end,
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
