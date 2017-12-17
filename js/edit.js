// Get student ID from session storage
var id = sessionStorage.getItem('detail_id');

//Request for student with above id and get his data
var requestURL = 'https://andela-backend-api.herokuapp.com/student/show/'+id;
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var student = request.response;
    console.log(student);
    populateEditForm(student); 
}

// Populate edit form with student data
function populateEditForm(json) {
    document.getElementById('name_input').value = json.name;
    document.getElementById('email_input').value = json.email;
    document.getElementById('school_input').value = json.school;
    document.getElementById('dept_input').value = json.department;
    document.getElementById('course_input').value = json.course;
    document.getElementById('state_input').value = json.state;
    document.getElementById('mobile_input').value = json.mobile;
    document.getElementById('nation_input').value = json.nationality;
    document.getElementById('dob_input').value = json.dob;
}

// Post new/edited data using ajax
$(document).ready(function () { 
    
    $('form').submit(function(event) {
        event.preventDefault();

        var form = $('form')[0];
        var data = new FormData(form);

        $.ajax({
            type        :  'POST',
            url         :  "https://andela-backend-api.herokuapp.com/student/edit/"+id, 
            data        :   data ,
            contentType : false,
            processData : false,
            success : function (result) { 
                window.location = 'student-list.html';
            }
        }); 
    });

});