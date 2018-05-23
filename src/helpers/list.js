
/**
  countOf :: a -> [a] -> [a]
*/
export const countOf = value => list => list.reduce((acc, num) => num === value ? acc += 1 : acc, 0);


/**
  equals :: [a] -> [a] -> Boolean
*/
export const equals = listA => listB => {
  if (listA.length !== listB.length) return false;
  return listA.reduce((acc, _, index) => {
    return acc === true && listA[index] === listB[index]
  }, true);
};


/**
  flatten :: [a] -> [a]
*/
export const flatten = list => list.reduce((newList, item) => [].concat(newList, item), []);


/**
  indexesOf :: a -> [a] -> [a]
*/
export const indexesOf = value => list => list.reduce((arr, num, index) => num === value ?  arr.concat(index) : arr, []);


/**
  last :: [a] -> a
*/
export const last = list => list[list.length -1];


/**
  padEnd :: (Number a) => a -> b -> [b] -> [b]
*/
export const padEnd = length => value => list => {
  const arr = [ ...list ];
  for (let index = arr.length; index < length; index += 1) arr.push(value);
  return arr;
};


/**
  padStart :: (Number a) => a -> b -> [b] -> [b]
*/
export const padStart = length => value => list => {
  const arr = [ ...list ];
  for (let index = arr.length; index < length; index += 1) arr.unshift(value);
  return arr;
};


/**
  pipe :: (Function[] a) => a -> b -> b
*/
export const pipe = (...fns) => data => fns.reduce((value, fn) => fn(value), data);


/**
  removeFalsy :: [a] -> [a]
*/
export const removeFalsy = list => list.filter(Boolean);


/**
  random :: (Number a) => a -> a
*/
export const random = max => Math.floor(Math.random() * max);


/**
  raffle :: [a] -> [a]
*/
export const raffle = list => {
  const indexes = indexesOf(0)(list);
  if (!indexes.length) return list;
  const position = indexes[random(indexes.length)];
  const arr = [ ...list ];
  arr[position] = random(8) >= 6 ? 4 : 2;
  return arr;
};


// TODO: add param to determine the direction to follow or
// split this function into sumEqualsLeft and sumEqualsRight
// today only supports right to left.
/**
  removeFalsy :: [a] -> [a]
*/
export const sumEquals = list => {
	const newList = [];
	for (let index = list.length - 1; index >= 0; index -= 1) {
		if (list[index] === list[index - 1]) {
			newList.push(list[index] * 2);
			index -= 1;
		} else {
			newList.push(list[index]);
		}
	}
	return newList.reverse();
};


/**
  removeFalsy :: [a] -> [a]
*/
export const toSquareMatrix = list => list.reduce((newList, _, index) => {
	return index % 4 === 0 ? [ ...newList, list.slice(index, index + 4) ] : newList;
}, []);


/**
  removeFalsy :: [a] -> [a]
*/
export const transpose = list => list[0].map((_, columnIndex) => list.map(row => row[columnIndex]));
