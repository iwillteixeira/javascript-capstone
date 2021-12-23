/**
 * @jest-environment jsdom
 */

import countComment from '../__mocks__/comment.js';

jest.mock('../js/comment.js');

describe('counts the all comments', () => {
  document.body.innerHTML = `<div id="all-comments">
    <p class="h3 mb-5"></p>
    <ul id="comment-list">
      <li>name: comment</li>
      <li>name: comment</li>
      <li>name: comment</li>
      <li>name: comment</li>
    </ul>
  </div>`;

  it('counts li elements inside the mock document', () => {
    expect(countComment()).toBe('Comments(4)');
  });
});
