//Classic JS Fetch using XMLHttpRequest

if(window.XMLHttpRequest) { //XHR
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { //Internet Explorer - IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {
    }
  }
}

request.open('GET', 'https://api.github.com/users/google/repos', true)
request.send(null);

request.onreadystatechange = function(state) {
  if (request.readyState === 4) {
    console.log(JSON.parse(request.response));
  }
}


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
