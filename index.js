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

function myFind(collection, predicate){
    
}

  