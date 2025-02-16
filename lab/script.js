
function checkValidity() {
    let isValid = true;
    let validationMessage = "";
   
    // Validate First Name
    const firstname = document.getElementById("firstname");
    const firstnameError = document.getElementById("firstnameError");
    if (!firstname.value.trim()) {
        validationMessage = "First Name is required.";
        firstname.setCustomValidity("First Name is required.");
        firstnameError.textContent = firstname.validationMessage;
        firstnameError.style.display = "block";
        isValid = false;
    } else {
        firstname.setCustomValidity("");
        firstnameError.style.display = "none";
    }

    // Validate Last Name
    const lastname = document.getElementById("lastname");
    const lastnameError = document.getElementById("lastnameError");
    if (!lastname.value.trim()) {
        validationMessage = "Last Name is required.";
        lastname.setCustomValidity("Last Name is required.");
        lastnameError.textContent = validationMessage;
        lastnameError.style.display = "block";
        isValid = false;
    } else {
        lastname.setCustomValidity("");
        lastnameError.style.display = "none";
    }

    // Validate Address
    const address = document.getElementById("address");
    const addressError = document.getElementById("addressError");
    if (!address.value.trim()) {
        validationMessage = "Address is required.";
        address.setCustomValidity("Address is required.");
        addressError.textContent = validationMessage;
        addressError.style.display = "block";
        isValid = false;
    } else {
        address.setCustomValidity("");
        addressError.style.display = "none";
    }

    // Validate Gender
    const gender = document.getElementById("gender");
    const genderError = document.getElementById("genderError");
    if (!gender.value) {
        validationMessage = "Gender is required.";
        gender.setCustomValidity("Gender is required.");
        genderError.textContent = validationMessage;
        genderError.style.display = "block";
        isValid = false;
    } else {
        gender.setCustomValidity("");
        genderError.style.display = "none";
    }

    // Validate Phone Number
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    if (!phone.value.match(phoneRegex)) {
        validationMessage = "Phone number must be 10 digits .";
        phone.setCustomValidity("Phone number must be 10 digits.");
        phoneError.textContent = validationMessage;
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phone.setCustomValidity("");
        phoneError.style.display = "none";
    }

    // Validate Year
    const year = document.getElementById("year");
    const yearError = document.getElementById("yearError");
    if (year.value < 2015 || year.value > 2025) {
        validationMessage = "Year must be after 2015.";
        year.setCustomValidity("Year must be after 2015.");
        yearError.textContent = validationMessage;
        yearError.style.display = "block";
        isValid = false;
    } else {
        year.setCustomValidity("");
        yearError.style.display = "none";
    }

    return isValid;
}


function copyFormValues() {
            const firstname1 = document.getElementById("firstname").value;
            const lastname1 = document.getElementById("lastname").value;
            const address1 = document.getElementById("address").value;
            const gender1 = document.getElementById("gender").value;
            const phone1 = document.getElementById("phone").value;
            const year1 = document.getElementById("year").value;

            document.getElementById("firstname2").value = firstname1;
            document.getElementById("lastname2").value = lastname1;
            document.getElementById("address2").value = address1;
            document.getElementById("gender2").value = gender1;
            document.getElementById("phone2").value = phone1;
            document.getElementById("year2").value = year1;
        }

document.getElementById("myForm1").addEventListener("submit", function(event) {
    if (!checkValidity()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

document.getElementById("myForm2").addEventListener("submit", function(event) {
    if (!checkValidity()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

document.getElementById("SameOrNot").addEventListener("change", copyFormValues);




