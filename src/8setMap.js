'use strict'

//Set
let set = new Set([1,2]);
console.log('set.size',set.size);
set.add(3);
console.log(set.has(1));
console.log(set.delete(1));
set.forEach(x => console.log('forEach:',x));
for(let x of set){
    console.log('for of',x);
}
console.log('set.keys():',set.keys());
console.log('set.values():',set.values());
console.log('set.entries():',set.entries());
 // Map
let map = new Map();
map.set('foo', true);
map.set('bar', false);
map.set(1, 'casa');
console.log('map.size:',map.size);
console.log('map.get():',map.get(1));
console.log('map.has():',map.has(1));
console.log('map.delete():',map.delete(1));
for (let entry of map) {
    console.log(entry[0], entry[1]);
}
map.forEach(function(value, key, map){
    console.log("Key: %s, Value: %s", key, value);
});