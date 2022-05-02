const map = new Map();
let arr = [1,2,1,2,3,1,2,3];
for(let i=0;i<arr.length;i++){
    map.set(arr[i],(map.get(arr[i])||0)+1);
}
console.log(map.size);
console.log(...map);
map.delete(2)
console.log(...map);
console.log(map.size);