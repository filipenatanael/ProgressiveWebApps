//Using JS Fetch

fetch('https://api.github.com/users/google/repos')
.then(function(response){
  if (response.ok) {
    response.json().then(function(json){
      console.log(json);
      document.getElementById('container').innerHTML = JSON.stringify(json);
    })
  }
}).catch(function(error){
  console.log(`Fetch Error: ${error}`);
})
