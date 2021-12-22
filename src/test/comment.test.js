/**
 * @jest-environment jsdom
 */

import * as Comment from 'comment.js';

jest.mock('comment.js');

describe('test', () => {
  let t = () => {
    return 'test';
  };
  it('test', () => {
    expect(t()).toBe('test');
  });
});
