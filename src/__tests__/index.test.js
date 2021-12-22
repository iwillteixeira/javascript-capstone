import countShows from '../index.js';

jest.mock('../index.js');

describe('Test countShows function', () => {
  test('If there are no shows', () => {
    const res = countShows();
    expect(res).toEqual(0);
  });

  test('If there are shows', () => {
    document.body.innerHTML = `
    <div class='card'>
    </div>
    <div class='card'>
    </div>`;
    const res = countShows();
    expect(res).toEqual(2);
    document.body.innerHTML = '';
  });
});
