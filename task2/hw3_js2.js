var fs = require('fs');
const dat = fs.readFileSync('data.json', 'utf8');

let j = JSON.parse(dat);

var dict={}
j.forEach(function(t) {
    dict[t.name]=t;
});
var arr=[];
for(var name in dict) {
    arr.push(dict[name]);
}
console.log(arr);






 