import { EqualTriangle, SquareTriangle } from './abstract-class.page';

describe('Triangle Testing', () => {
  let equal_triangle: EqualTriangle
  beforeEach( () => {
    equal_triangle = new EqualTriangle('TEST 1', 3, 3 ,3)
  })

  fit('Створюємо екземпляр класу', () => {
    expect(equal_triangle).toBeTruthy();
  })

  fit('Перевіримо площу', () => {
    equal_triangle.S()
    let s = equal_triangle.pl
    const expected = '3.90'
    expect(s.toFixed(2)).toBe(expected);
  })

  fit('Перевіримо назву', () => {
    equal_triangle.S()
    let name = equal_triangle.name
    const expected = 'TEST 1'
    expect(name).toBe(expected);
  })

  let square_triangle: SquareTriangle;
  beforeEach( () => {
    square_triangle = new SquareTriangle('TEST 2', 3, 4 , 5)
  })

  fit('Створюємо екземпляр класу', () => {
    expect(square_triangle).toBeTruthy();
  })

  fit('Перевіримо площу', () => {
    square_triangle.S()
    let s = square_triangle.pl
    const expected = '8.49'
    expect(s.toFixed(2)).toBe(expected);
  })

  fit('Перевіримо назву', () => {
    square_triangle.S()
    let name = square_triangle.name
    const expected = 'TEST adsfg'
    expect(name).toBe(expected);
  })
});
