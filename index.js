function myEach(collection, callback) {
      if (typeof collection === 'object') {
        for (let element in collection) {
          callback(collection[element]);
        }
      } else if (Array.isArray(collection)) {
        for (let element of collection) {
          callback(element);
        }
      }
      return collection;
    }

function myMap(collection, callback){
    if (typeof collection === 'object') {

        const values = Object.values(collection);
        const transformedValues = values.map(callback);
        return transformedValues;
      } else if (Array.isArray(collection)) {

        const transformedArray = collection.map(callback);
        return transformedArray;
      }
}

function myReduce(collection, callback, acc) {
    let values = Object.values(collection)

    if (!acc) {
        acc = values[0]
        values = values.slice(1)
    }

    for (let i = 0; i < values.length; i++) {
        acc = callback(acc, values[i], values)
      }

    return acc
}

function myFind(collection, predicate) {
  let values = Object.values(collection);

  return values.find(value => predicate(value));
}

function myFilter(collection, predicate) {
  let values = Object.values(collection);
  let isTruthy = values.filter(value => predicate(value));
  if (isTruthy){
    return isTruthy
  } else return [];
}

function mySize(collection){
  let values = Object.values(collection);
  return values.length
}

function myFirst(array, n) {
  if (typeof n === 'number' && n > 0) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(array, n) {
  if (typeof n === 'number' && n > 0) {
    return array.slice(array.length - n);
  } else {
    return array[array.length - 1];
  }
}

function myKeys(object){
  // Use Object.keys() to retrieve the property names
  const keys = Object.keys(object);

  // Return the array of property names
  return keys;
};

function myValues(object){
  const values = Object.values(object);

  return values;
}