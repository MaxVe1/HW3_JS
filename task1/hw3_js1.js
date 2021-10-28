var fs = require('fs');
const dat = fs.readFileSync('data.json', 'utf8');

const EurUsd = 0.86;

let j = JSON.parse(dat);  


let jEur = {}; 
//let jUsd = {};
jEur = JSON.parse(JSON.stringify(j));

 let Z = [];
 let Y = [];

for(let i=0;i< jEur.data.length;i++){
     Z[i] = Object.values(jEur.data[i].Prices);

     //jEur.data[i].Prices.currency = 'Euro'; //ok works ok add euro
    

     Y[i] = Z[i].map(k=> k * EurUsd);//.toFixed(2);
     //console.log('EUR:  '+ (Y[i][0]).toFixed(2) +'  '+ Y[i][1].toFixed(2) +'  '+ Y[i][2].toFixed(2));
     jEur.data[i].Prices = {};// `Price: ${(Y[i][0]).toFixed(2)},'Retail Price': ${(Y[i][1]).toFixed(2)}, 'Wholesale Price' :${(Y[i][2]).toFixed(2)}` ;
     jEur.data[i].Prices.Price = (Y[i][0]).toFixed(2);
     jEur.data[i].Prices.Retail_Price = (Y[i][1]).toFixed(2);
     jEur.data[i].Prices.Wholespace_Price = (Y[i][2]).toFixed(2);  
     jEur.data[i].Prices.currency = 'Euro'; //ok works ok add euro
     j.data[i].Prices.currency = 'Dollar';
}     
console.log(j.data[0]);
console.log(jEur.data[0]);

let dataEur = JSON.stringify(jEur);
let dataUsd = JSON.stringify(j);

fs.writeFileSync('euroPrice.json', dataEur);
fs.writeFileSync('dollarPrice.json.json', dataUsd);

 