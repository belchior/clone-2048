

/**
 * contains :: a -> [a] -> Boolean
 */
export const contains = item => list => list.indexOf(item) >= 0;


/**
 * countOf :: a -> [a] -> [a]
 */
export const countOf = value => list => list.reduce(
  (acc, num) => {
    return num === value ? acc + 1 : acc;
  },
  0,
);


/**
 * equals :: [a] -> [a] -> Boolean
 */
export const equals = listA => (listB) => {
  if (listA.length !== listB.length) return false;
  return listA.reduce(
    (acc, _, index) => {
      return acc === true && listA[index] === listB[index];
    },
    true,
  );
};


/**
 * flatten :: [a] -> [b]
 */
export const flatten = list => list.reduce((newList, item) => [].concat(newList, item), []);


/**
 * head :: [a] -> a
 */
export const head = (list) => {
  return !isEmpty(list) ? list[0] : undefined;
};


/**
 * isEmpty :: [a] -> Boolean
 */
export function isEmpty(list) {
  return Array.isArray(list) && list.length === 0;
}


/**
 * indexesOf :: a -> [a] -> [a]
 */
export const indexesOf = value => list => list.reduce(
  (arr, num, index) => {
    return num === value ? arr.concat(index) : arr;
  },
  [],
);


/**
 * last :: [a] -> a
 */
export const last = list => list[list.length - 1];


/**
 * max :: (Number a) => [a] -> a
 */
export const max = list => Math.max(...list);

/**
 * padEnd :: (Number a) => a -> b -> [b] -> [b]
 */
export const padEnd = length => value => (list) => {
  const arr = [ ...list ];
  for (let index = arr.length; index < length; index += 1) arr.push(value);
  return arr;
};


/**
 * padStart :: (Number a) => a -> b -> [b] -> [b]
 */
export const padStart = length => value => (list) => {
  const arr = [ ...list ];
  for (let index = arr.length; index < length; index += 1) arr.unshift(value);
  return arr;
};


/**
 * pairs :: ([a,a] b) => [a] -> [b]
 */
export function pairs(list) {
  if (list.length < 2) return [];
  const first = head(list);
  const second = head(tail(list));
  if (first === second) return [ [ first, second ], ...pairs(tail(tail(list))) ];
  return pairs(tail(list));
}


/**
 * pipe :: (Function[] a) => a -> b -> b
 */
export const pipe = (...fns) => data => fns.reduce((value, fn) => fn(value), data);


/**
 * raffle :: [a] -> [a]
 */
export const raffle = (list) => {
  const indexes = indexesOf(0)(list);
  if (!indexes.length) return list;
  const position = indexes[random(indexes.length)];
  const arr = [ ...list ];
  arr[position] = random(8) >= 6 ? 4 : 2;
  return arr;
};


/**
 * random :: (Number a) => a -> a
 * min 0, max a-1
 */
export function random(maxValue) {
  return Math.floor(Math.random() * maxValue);
}


/**
 * removeFalsy :: [a] -> [a]
 */
export const removeFalsy = list => list.filter(Boolean);


/**
 * reverse :: [a] -> [a]
 */
export const reverse = list => list.reverse();


/**
 * sumEquals :: (Number a) => [a] -> [a]
 */
export function sumEquals(list) {
  if (list.length < 2) return list;
  const first = head(list);
  const second = head(tail(list));
  return first === second
    ? [ first + second, ...sumEquals(tail(tail(list))) ]
    : [ first, ...sumEquals(tail(list)) ];
}


/**
 * sumEquals :: (Number a) => [a] -> [a]
 */
export const sumEqualsRight = list => pipe(reverse, sumEquals, reverse)(list);


/**
 * tail :: [a] -> [a]
 */
export function tail(list) {
  return list.slice(1);
}


/**
 * toSquareMatrix :: ([a] b) => [a] -> [b]
 */
export function toSquareMatrix(list) {
  return list.reduce(
    (newList, _, index) => {
      return index % 4 === 0
        ? [ ...newList, list.slice(index, index + 4) ]
        : newList;
    },
    []
  );
}


/**
 * transpose :: ([a] b) => [b] -> [b]
 */
export const transpose = list => list[0].map((_, columnIndex) => list.map(row => row[columnIndex]));
