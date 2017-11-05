// Fetch data from API using XMLHttpRequest.
var requestURL = 'https://cors-anywhere.herokuapp.com/https://andela-backend-api.herokuapp.com/';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var students = request.response;
    populateStutentList(students);
    console.log(students);
}

// Populate list page with data
function populateStutentList(json) {
    for(var i=0; i < json.length; i++){
        
        var listDiv = document.getElementById('list_div');
        var a = document.createElement('a');
        a.setAttribute('href', 'detail.html');
        a.setAttribute('class', 'list-group-item list-group-item-action');
        a.setAttribute('data-id', json[i]['_id']);

        a.textContent = json[i]['name'];

        listDiv.appendChild(a);
        
        a.addEventListener('click', function (e) {
            var id = e.target.getAttribute('data-id');
            sessionStorage.setItem('detail_id', id);
        });
    }
}