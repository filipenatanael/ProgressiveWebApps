//JS Fetch example

if(window.XMLHttpRequest) {
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
  if (request.readyState == 4) {
    console.log(JSON.parse(request.response));
  }
}
