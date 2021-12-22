/**
 * @jest-environment jsdom
 */

import * as Comment from 'comment.js';

jest.mock('comment.js');

describe('test', () => {
  const t = () => 'test';
  it('test', () => {
    expect(t()).toBe('test');
  });
});
