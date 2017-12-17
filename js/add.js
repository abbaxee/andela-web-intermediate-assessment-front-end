// Add new student using Ajax POST request
$(document).ready(function () { 
    
    $('form').submit(function(event) {
        event.preventDefault();
        
        var form = $('form')[0];
        var data = new FormData(form);

        $.ajax({
            type        :  'POST',
            url         :  "https://andela-backend-api.herokuapp.com/student/add", 
            data        :   data ,
            contentType : false,
            processData : false,
            success : function (result) { 
                window.location = 'student-list.html';
            }
        }); 
    });

});