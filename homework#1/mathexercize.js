// dadeni vrednosti
let iphones = 30;
let iphoneprice = 119.95;
let taxrate = 5;

// calculating the tax for one phone
let percentageconverter = 100;
console.log(taxrate / percentageconverter);
// ova equals 0.05
let taxrateconverted = 0.05;
console.log(iphoneprice * taxrateconverted);
// ova equals 5.9975 go zaokruzhuvame na 6

// calculating how much is one iphone with the given tax
let newtax = 6;
console.log(iphoneprice + newtax);

// and the cost of 30 iphones is *drum roll please*
let thepricewiththetax = 125.95;
let totalcost = thepricewiththetax * iphones;
console.log("zee total price is", totalcost);
