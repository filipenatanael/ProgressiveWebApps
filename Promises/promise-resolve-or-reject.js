//Resolve or reject

var price = new Promise(function(resolve, reject) {
  setTimeout(function(){
    reject("Price A Rejected!");
  }, 300);
});

var slowPrice = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve("Price B.");
  }, 200);
});

var promises = [price, slowPrice];

Promise.race(promises)
.then(function(price) {
  console.log(price);
  console.log(promises);
}).catch(function(error){
  console.log(error);
});
