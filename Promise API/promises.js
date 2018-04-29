// JS Promises - Example 1

function addExtraOne(price) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(price + 1);
    }, 300);
  });
}

addExtraOne(1)
.then(function(newPrice){
  console.log(newPrice);
}).catch(function(error){
  console.log(error);
});

// Example 2 - Promises
var price = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(100.00);
  }, 300);
});

price.then(function(price){
  console.log(price);
});


// Example 3 - Promises
var showPrice = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(200.00);
  }, 800);
});

// Promise.all() - Example using 2 and 3
function sayHello(){
  return "Hello!";
}

var promises = [price, showPrice, 500, sayHello()];

Promise.all(promises).then(function(resolvedPromises){
  console.log(resolvedPromises);
});
