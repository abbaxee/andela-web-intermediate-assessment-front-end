var id = sessionStorage.getItem('detail_id');

var requestURL = 'https://andela-backend-api.herokuapp.com/student/show/'+id;
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var students = request.response;
    console.log(students);
    populateStutentDetail(students); 
}
function populateStutentDetail(json) {
    document.getElementById('name').textContent         = json.name;
    document.getElementById('email').textContent        = json.email;
    document.getElementById('school').textContent       = json.school;
    document.getElementById('department').textContent   = json.department;
    document.getElementById('course').textContent       = json.course;
    document.getElementById('state').textContent        = json.state;
    document.getElementById('mobile').textContent       = json.mobile;
    document.getElementById('nation').textContent       = json.nationality;
    
    var dateForm = moment(json.dob).format('DD MMMM, YYYY');
    document.getElementById('dob').textContent          = dateForm;

    var imageDiv = document.getElementById('image_div');
    var image = document.createElement('img');
    //set values and attributes for image
    if(json.profileimage == ""){
        image.setAttribute("src", "images/default_profile.jpg");
    } else {
        image.setAttribute("src", "https://andela-backend-api.herokuapp.com/images/"+json['profileimage']);
    }

    imageDiv.appendChild(image);

    var editBtn = document.getElementById('editBtn')
    editBtn.setAttribute('data-id', json._id);
    
    editBtn.addEventListener('click', function (e) {
        var id = e.target.getAttribute('data-id');
        sessionStorage.setItem('edit_id', id);
        //Redirect to edit page
        window.location = 'edit.html'
    });

    var deleteBtn = document.getElementById('deleteBtn')
    deleteBtn.setAttribute('data-id', json._id);
    
    deleteBtn.addEventListener('click', function (e) {
        var id = e.target.getAttribute('data-id');
        deleteStudent(id);
    });
}

// Send delete request
function deleteStudent(id) {
    var requestURL = 'https://andela-backend-api.herokuapp.com/student/delete/'+id;
    var request = new XMLHttpRequest();
    
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    window.location = 'student-list.html';
}