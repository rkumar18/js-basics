const json = '{"result":true, "count":42}';
console.log(typeof(json))
const obj = JSON.parse(json);//Json.parse string to json
console.log(typeof(obj))
console.log(obj.count);
console.log(obj.result);


var arr = JSON.stringify({ x: 5, y: 6 });
console.log(typeof(arr))
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));//JSON.stringify json to string
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));


