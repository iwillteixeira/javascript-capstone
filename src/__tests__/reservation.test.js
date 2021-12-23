/**
 * @jest-enviroment jsdom
 */

import { describe, expect, test } from '@jest/globals';
import { mockModalReservationPopu, mockModalReservationEmpty } from '../__mocks__/modalreservation.js';
import Reservation from '../js/reservation.js';

describe('Test reservarions counter', () => {
  test('Test reservation count when there is no reservation', () => {
    document.body.innerHTML = mockModalReservationEmpty;
    const number = Reservation.countReservation();
    expect(number).toBe(0);
  });

  test('Test reservation count when there is no reservation', () => {
    document.body.innerHTML = mockModalReservationPopu;
    const number = Reservation.countReservation();
    expect(number).toBe(4);
  });
});
