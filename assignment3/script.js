
function ValidateForm(){

    //No Empty Fields
    let inputs = document.querySelectorAll("input, textarea, select");
    for (let input of inputs) {
        if(input.value.trim()==""){
            window.alert("Please Fill all the required input fields.")
            return false 
        }
    }

    //Postal Code
    let postalCode = document.getElementById("ps").value.trim();
    let postalCodePattern = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    if (!postalCodePattern.test(postalCode)) {
        alert("Invalid postal code format. Please use A0A0A0 format.");
        return false;
    }


    //Only Given Procinces
    let province = document.getElementById("province").value;
    let validProvinces = ["QC", "ON", "MN", "SK", "AB", "BC"];
    if (!validProvinces.includes(province)) {
        alert("Invalid province selection. Please choose from QC, ON, MN, SK, AB, BC.");
        return false;
    }

    //Check Age
    let age = document.getElementById("age").value;
    if(age <= 18){
        alert("You are not 18 years old.") 
        return false; 
    }

    //Check Email
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format. Please enter a valid email address.");
        return false;
    }

    //Check Password
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters long and contain at least one uppercase letter and one digit.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please enter the same password.");
        return false;
    }

    alert("Thanks for registering with our website, your customer record was created successfully.");
    return true
}

