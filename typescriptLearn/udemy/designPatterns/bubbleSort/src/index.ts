import { NumberCollection } from './NumberCollection';
const numberCollection = new NumberCollection([50, 23, 9, 18, 61, 32])
console.log(numberCollection.data)
numberCollection.sort();
console.log(numberCollection.data)
