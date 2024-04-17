function outputInformation(){
    //Get input values
    var name = document.getElementById("name").value;
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var userinterests = document.getElementById("userInterests").value;

    //Display Information
    document.getElementById("info").innerHTML = "<b>Name: </b>" + name + "<br><br><b>Username: </b>" + username +"<br><br><b>Password: </b>" + password + "<br><br><b>Gender: </b>" + gender + "<br><br><b>Email: </b>" + email + "<br><br><b>Address: </b>" + address + "<br><br><b>User Interests: </b><br>" + userinterests;
    return false;
}

function blurInput(){ //Add a red border using onblur
    var input = document.getElementsByTagName("input");

    for (var i=0 ; i<input.length ; i++){
        if (input[i].value == "") {
            input[i].style.borderColor = "red";
        }
    }
}

function blurTextArea(){ //Add a red border to text area using onblur
    var input = document.getElementsByTagName("textarea");

    for (var i=0 ; i<input.length ; i++){
        if (input[i].value == "") {
            input[i].style.borderColor = "red";
        }
    }
}

function focusInput(element){ // Add a green border using onfocus
    element.style.borderColor = "green";
}

function resetForm(){ // Function to reset form
    document.getElementById("info").innerHTML = "Information that you have inputted will be displayed here once you click submit.";
    var input = document.getElementsByTagName("input");
    var textarea = document.getElementsByTagName("textarea");

    for (var i=0 ; i<input.length ; i++){
        input[i].removeAttribute('style');
    }

    for (var i=0 ; i<textarea.length ; i++){
        textarea[i].removeAttribute('style');
    }
    
    return false;
}