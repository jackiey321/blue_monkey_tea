// Called by the form for validation
function validate() {
    
    // Makes sure zip code is a five digit number
    var input = $("#zip").val();
    if (input != "" && (isNaN(input) || input.length != 5)) {
        alert("Zip code must be a 5 digit code.")
        return false;
    }

    // If the phone number is filled then it must be a 10 digit number
    var phone = $("#phone").val();
    if (phone != "" && (isNaN(phone) || phone.length != 10)) {
        alert("Phone number is not valid or not in valid format");
        return false;
    }

    // If the option for receiving text messages is checked then a phone number must be given
    if (document.getElementById('text').checked && phone == "") {
        alert("Please provide your phone number to receive text messages.")
        return false;
    }

}