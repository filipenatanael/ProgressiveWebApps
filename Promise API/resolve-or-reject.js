//Resolve or reject

var price = new Promise(function(resolve, reject) {
  setTimeout(function(){
    reject("\n(Timeout: 100) Price A Rejected!");
  }, 100);
});

var slowPrice = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve("Price B.");
  }, 350);
});

var promises = [price, slowPrice];
Promise.race(promises)
.then(function(price) {
  console.log(promises);
}).catch(function(error){
  console.log(error);
});

setTimeout(function() {
    console.log("\n(Timeout: 200)");
    console.log(promises);
}, 200);

setTimeout(function() {
    console.log("\n(Timeout: 700)");
    console.log(promises);
}, 700);
