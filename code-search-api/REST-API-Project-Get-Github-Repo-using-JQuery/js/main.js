// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Prompt the user for input
var userInput = prompt("Please enter something:");

// Display the input
console.log("You entered: " + userInput);

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/' + userInput + '/repos', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td><a href="' + status.html_url + '">' + status.html_url + '</a></td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}

// Send request
request.send();