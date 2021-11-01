var fs = require('fs');
const dat = fs.readFileSync('data.json', 'utf8');

const eurUsd = 0.8622; //API works only in paid mode :(

let j = JSON.parse(dat); 

let jEur = {}; 
jEur = JSON.parse(JSON.stringify(j));

 let z = [];
 let y = [];

for(let i=0;i< jEur.data.length;i++){
     z[i] = Object.values(jEur.data[i].Prices);   

     y[i] = z[i].map(k=> k * eurUsd);
     jEur.data[i].Prices.Price = Number((y[i][0]).toFixed(2));
     jEur.data[i].Prices["Retail Price"] = Number((y[i][1]).toFixed(2));
     jEur.data[i].Prices["Wholesale Price"] = Number((y[i][2]).toFixed(2));  
     jEur.data[i].Prices.Currency = 'Euro';
     j.data[i].Prices.Currency = 'Dollar';
}     
console.log(j.data[0]);
console.log(jEur.data[0]);

let dataEur = JSON.stringify(jEur);
let dataUsd = JSON.stringify(j);

fs.writeFileSync('euroPrice.json', dataEur);
fs.writeFileSync('dollarPrice.json', dataUsd);

 