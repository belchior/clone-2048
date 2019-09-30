import * as L from './list';

describe('list', () => {
  it('contains function should be exported by list file', () => {
    expect(typeof L.contains).toBe('function');
  });

  it('contains should return the boolean true when the item is found into the list', () => {
    const item = 51;
    const list = [ 2, 51, 1, ];

    expect(L.contains(item)(list)).toBe(true);
  });

  it('contains should return the boolean false when the item is not found into the list', () => {
    const item = 42;
    const list = [ 2, 51, 1, ];

    expect(L.contains(item)(list)).toBe(false);
  });


  it('countOf function should be exported by list file', () => {
    expect(typeof L.countOf).toBe('function');
  });

  it('countOf should return the number of value inside the list', () => {
    const list = [ 10, 20, 30, 40, ];
    expect(L.countOf(30)(list)).toBe(1);
    expect(L.countOf(31)(list)).toBe(0);
  });


  it('equals function should be exported by list file', () => {
    expect(typeof L.equals).toBe('function');
  });

  it('equals should return Boolean true when the lists has the same items', () => {
    const listA = [ 1, 2, 3, ];
    const listB = [ 1, 2, 3, ];

    expect(L.equals(listA)(listB)).toBe(true);
  });

  it('equals should return Boolean false when the lists don\'t has the same items', () => {
    const listA = [ 1, 2, 3, ];
    const listB = [ 4, 5, 6, ];

    expect(L.equals(listA)(listB)).toBe(false);
  });

  it('equals should return Boolean false when the lists have diferent length', () => {
    const listA = [ 1, 2, ];
    const listB = [ 4, 5, 6, 7, ];

    expect(L.equals(listA)(listB)).toBe(false);
  });


  it('flatten function should be exported by list file', () => {
    expect(typeof L.flatten).toBe('function');
  });

  it('flatten function should flatten one level deep the passed list', () => {
    const oneLevelDeep = [ [ 1, 2, ], [ 3, 4, ], ];
    const twoLevelDeep = [ [ [ 1, ], ], [ [ 2, 3, ], ], 4, ];

    expect(L.flatten(oneLevelDeep)).toStrictEqual([ 1, 2, 3, 4, ]);
    expect(L.flatten(twoLevelDeep)).toStrictEqual([ [ 1, ], [ 2, 3, ], 4, ]);
  });


  it('head function should be exported by list file', () => {
    expect(typeof L.head).toBe('function');
  });

  it('head function should return undefined when passed an empty list', () => {
    const emptyList = [];
    expect(L.head(emptyList)).toBeUndefined();
  });

  it('head function should return the first item of a list', () => {
    const list = [ 4, 3, 2, 1, ];
    expect(L.head(list)).toBe(4);
  });


  it('isEmpty function should be exported by list file', () => {
    expect(typeof L.isEmpty).toBe('function');
  });

  it('isEmpty function should return Boolean true when passed an empty list, false otherwise', () => {
    const emptyList = [];
    const list = [ 1, 2, 3, ];

    expect(L.isEmpty(emptyList)).toBe(true);
    expect(L.isEmpty(list)).toBe(false);
  });


  it('indexesOf function should be exported by list file', () => {
    expect(typeof L.indexesOf).toBe('function');
  });

  it('indexesOf function should return an empty list when passed an empty list', () => {
    const value = 23;
    const emptyList = [];

    expect(L.indexesOf(value)(emptyList)).toStrictEqual(emptyList);
  });

  it('indexesOf function should return an empty list when the list does not contains the specified value', () => {
    const value = 23;
    const emptyList = [];
    const list = [ 1, 2, 3, 4, ];

    expect(L.indexesOf(value)(list)).toStrictEqual(emptyList);
  });


  it('last function should be exported by list file', () => {
    expect(typeof L.last).toBe('function');
  });

  it('max function should be exported by list file', () => {
    expect(typeof L.max).toBe('function');
  });

  it('padEnd function should be exported by list file', () => {
    expect(typeof L.padEnd).toBe('function');
  });

  it('padStart function should be exported by list file', () => {
    expect(typeof L.padStart).toBe('function');
  });

  it('pairs function should be exported by list file', () => {
    expect(typeof L.pairs).toBe('function');
  });

  it('pipe function should be exported by list file', () => {
    expect(typeof L.pipe).toBe('function');
  });


  it('raffle function should be exported by list file', () => {
    expect(typeof L.raffle).toBe('function');
  });

  it('raffle function should return an empty list when there is no item in the passed list', () => {
    expect(L.raffle([])).toStrictEqual([]);
  });

  it('raffle function should return a list with one number raffled', () => {
    const list = [ 0, 0, 0, 0, ];
    const raffled = L.raffle(list).filter(num => num > 0);
    expect(raffled).toHaveLength(1);
  });


  it('random function should be exported by list file', () => {
    expect(typeof L.random).toBe('function');
  });

  it('removeFalsy function should be exported by list file', () => {
    expect(typeof L.removeFalsy).toBe('function');
  });

  it('reverse function should be exported by list file', () => {
    expect(typeof L.reverse).toBe('function');
  });


  it('sumEquals function should be exported by list file', () => {
    expect(typeof L.sumEquals).toBe('function');
  });

  it('sumEquals function should return the same list when there is no equal sibilings', () => {
    expect(L.sumEquals([ 1, ])).toStrictEqual([ 1, ]);
    expect(L.sumEquals([ 1, 2, 3, 4, ])).toStrictEqual([ 1, 2, 3, 4, ]);
  });

  it('sumEquals function should sum the sibilings that are equals fron left to right', () => {
    expect(L.sumEquals([ 1, 1, 1, 1, ])).toStrictEqual([ 2, 2, ]);
    expect(L.sumEquals([ 1, 1, 1, 2, ])).toStrictEqual([ 2, 1, 2, ]);
    expect(L.sumEquals([ 1, 1, 2, 2, ])).toStrictEqual([ 2, 4, ]);
    expect(L.sumEquals([ 1, 2, 2, 2, ])).toStrictEqual([ 1, 4, 2, ]);
  });


  it('sumEqualsRight function should be exported by list file', () => {
    expect(typeof L.sumEqualsRight).toBe('function');
  });

  it('sumEqualsRight function should return the same list when there is no equal sibilings', () => {
    expect(L.sumEquals([ 1, ])).toStrictEqual([ 1, ]);
    expect(L.sumEquals([ 1, 2, 3, 4, ])).toStrictEqual([ 1, 2, 3, 4, ]);
  });

  it('sumEqualsRight function should sum the sibilings that are equals fron right to left', () => {
    expect(L.sumEqualsRight([ 1, 1, 1, 1, ])).toStrictEqual([ 2, 2, ]);
    expect(L.sumEqualsRight([ 1, 1, 1, 2, ])).toStrictEqual([ 1, 2, 2, ]);
    expect(L.sumEqualsRight([ 1, 1, 2, 2, ])).toStrictEqual([ 2, 4, ]);
    expect(L.sumEqualsRight([ 1, 2, 2, 2, ])).toStrictEqual([ 1, 2, 4, ]);
  });


  it('tail function should be exported by list file', () => {
    expect(typeof L.tail).toBe('function');
  });

  it('toSquareMatrix function should be exported by list file', () => {
    expect(typeof L.toSquareMatrix).toBe('function');
  });

  it('transpose function should be exported by list file', () => {
    expect(typeof L.transpose).toBe('function');
  });
});
