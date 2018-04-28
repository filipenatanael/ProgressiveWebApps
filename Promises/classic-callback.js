function addExtra(price, callback) {
  setTimeout(function(){
    callback(price + 1);
  }, 300);
}

addExtra(1, function(newPrice){
  console.log(newPrice);
});
