import * as L from './list';

it('Contains function should be exported by list file', () => {
  expect(typeof L.contains).toBe('function');
});

it('Contains should return the boolean true when the item is found into the list', () => {
  const item = 51;
  const list = [ 2, 51, 1, ];

  expect(L.contains(item)(list)).toBeTruthy();
});

it('Contains should return the boolean false when the item is not found into the list', () => {
  const item = 42;
  const list = [ 2, 51, 1, ];

  expect(L.contains(item)(list)).toBeFalsy();
});


it('CountOf function should be exported by list file', () => {
  expect(typeof L.countOf).toBe('function');
});

it('CountOf should return the number of value inside the list', () => {
  const list = [ 10, 20, 30, 40, ];
  expect(L.countOf(30)(list)).toBe(1);
  expect(L.countOf(31)(list)).toBe(0);
});


it('Equals function should be exported by list file', () => {
  expect(typeof L.equals).toBe('function');
});

it('Equals should return Boolean true when the lists has the same items', () => {
  const listA = [ 1, 2, 3, ];
  const listB = [ 1, 2, 3, ];

  expect(L.equals(listA)(listB)).toBe(true);
});

it('Equals should return Boolean false when the lists don\'t has the same items', () => {
  const listA = [ 1, 2, 3, ];
  const listB = [ 4, 5, 6, ];

  expect(L.equals(listA)(listB)).toBe(false);
});

it('Equals should return Boolean false when the lists have diferent length', () => {
  const listA = [ 1, 2, ];
  const listB = [ 4, 5, 6, 7, ];

  expect(L.equals(listA)(listB)).toBe(false);
});


it('Flatten function should be exported by list file', () => {
  expect(typeof L.flatten).toBe('function');
});

it('Flatten function should flatten one level deep the passed list', () => {
  const oneLevelDeep = [ [ 1, 2, ], [ 3, 4, ], ];
  const twoLevelDeep = [ [ [ 1, ], ], [ [ 2, 3, ], ], 4, ];

  expect(L.flatten(oneLevelDeep)).toEqual([ 1, 2, 3, 4, ]);
  expect(L.flatten(twoLevelDeep)).toEqual([ [ 1, ], [ 2, 3, ], 4, ]);
});


it('Head function should be exported by list file', () => {
  expect(typeof L.head).toBe('function');
});

it('Head function should return undefined when passed an empty list', () => {
  const emptyList = [];
  expect(L.head(emptyList)).toBeUndefined();
});

it('Head function should return the first item of a list', () => {
  const list = [ 4, 3, 2, 1, ];
  expect(L.head(list)).toBe(4);
});


it('IsEmpty function should be exported by list file', () => {
  expect(typeof L.isEmpty).toBe('function');
});

it('IsEmpty function should return Boolean true when passed an empty list, false otherwise', () => {
  const emptyList = [];
  const list = [ 1, 2, 3, ];

  expect(L.isEmpty(emptyList)).toBeTruthy();
  expect(L.isEmpty(list)).toBeFalsy();
});


it('IndexesOf function should be exported by list file', () => {
  expect(typeof L.indexesOf).toBe('function');
});

it('IndexesOf function should return an empty list when passed an empty list', () => {
  const value = 23;
  const emptyList = [];

  expect(L.indexesOf(value)(emptyList)).toEqual(emptyList);
});

it('IndexesOf function should return an empty list when the list does not contains the specified value', () => {
  const value = 23;
  const emptyList = [];
  const list = [ 1, 2, 3, 4, ];

  expect(L.indexesOf(value)(list)).toEqual(emptyList);
});


it('Last function should be exported by list file', () => {
  expect(typeof L.last).toBe('function');
});

it('Max function should be exported by list file', () => {
  expect(typeof L.max).toBe('function');
});

it('PadEnd function should be exported by list file', () => {
  expect(typeof L.padEnd).toBe('function');
});

it('PadStart function should be exported by list file', () => {
  expect(typeof L.padStart).toBe('function');
});

it('Pairs function should be exported by list file', () => {
  expect(typeof L.pairs).toBe('function');
});

it('Pipe function should be exported by list file', () => {
  expect(typeof L.pipe).toBe('function');
});


it('Raffle function should be exported by list file', () => {
  expect(typeof L.raffle).toBe('function');
});

it('Raffle function should return an empty list when there is no item in the passed list', () => {
  expect(L.raffle([])).toEqual([]);
});

it('Raffle function should return a list with one number raffled', () => {
  const list = [ 0, 0, 0, 0, ];
  const raffled = L.raffle(list).filter(num => num > 0);
  expect(raffled).toHaveLength(1);
});


it('Random function should be exported by list file', () => {
  expect(typeof L.random).toBe('function');
});

it('RemoveFalsy function should be exported by list file', () => {
  expect(typeof L.removeFalsy).toBe('function');
});

it('Reverse function should be exported by list file', () => {
  expect(typeof L.reverse).toBe('function');
});


it('SumEquals function should be exported by list file', () => {
  expect(typeof L.sumEquals).toBe('function');
});

it('SumEquals function should return the same list when there is no equal sibilings', () => {
  expect(L.sumEquals([ 1, ])).toEqual([ 1, ]);
  expect(L.sumEquals([ 1, 2, 3, 4, ])).toEqual([ 1, 2, 3, 4, ]);
});

it('SumEquals function should sum the sibilings that are equals fron left to right', () => {
  expect(L.sumEquals([ 1, 1, 1, 1, ])).toEqual([ 2, 2, ]);
  expect(L.sumEquals([ 1, 1, 1, 2, ])).toEqual([ 2, 1, 2, ]);
  expect(L.sumEquals([ 1, 1, 2, 2, ])).toEqual([ 2, 4, ]);
  expect(L.sumEquals([ 1, 2, 2, 2, ])).toEqual([ 1, 4, 2, ]);
});


it('SumEqualsRight function should be exported by list file', () => {
  expect(typeof L.sumEqualsRight).toBe('function');
});

it('SumEqualsRight function should return the same list when there is no equal sibilings', () => {
  expect(L.sumEquals([ 1, ])).toEqual([ 1, ]);
  expect(L.sumEquals([ 1, 2, 3, 4, ])).toEqual([ 1, 2, 3, 4, ]);
});

it('SumEqualsRight function should sum the sibilings that are equals fron right to left', () => {
  expect(L.sumEqualsRight([ 1, 1, 1, 1, ])).toEqual([ 2, 2, ]);
  expect(L.sumEqualsRight([ 1, 1, 1, 2, ])).toEqual([ 1, 2, 2, ]);
  expect(L.sumEqualsRight([ 1, 1, 2, 2, ])).toEqual([ 2, 4, ]);
  expect(L.sumEqualsRight([ 1, 2, 2, 2, ])).toEqual([ 1, 2, 4, ]);
});


it('Tail function should be exported by list file', () => {
  expect(typeof L.tail).toBe('function');
});

it('ToSquareMatrix function should be exported by list file', () => {
  expect(typeof L.toSquareMatrix).toBe('function');
});

it('Transpose function should be exported by list file', () => {
  expect(typeof L.transpose).toBe('function');
});
