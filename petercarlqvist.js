document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate First Name (Only Letters)
    const firstName = document.getElementById('firstName').value.trim();
    // use the test method of reg ex to check if input is valid
    if (!/^[A-Za-z]+$/.test(firstName)) {
        showError('firstNameError', 'First name is required and must contain only letters.');
        isValid = false;
    }

    // Validate Last Name (Only Letters)
    const lastName = document.getElementById('lastName').value.trim();
    if (!/^[A-Za-z]+$/.test(lastName)) {
        showError('lastNameError', 'Last name is required and must contain only letters.');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Valid email is required (e.g., user@example.com).');
        isValid = false;
    }

    // Validate Question 2 (Checkboxes)
    const q2Checked = document.querySelectorAll('input[name="q2"]:checked');
    if (q2Checked.length === 0) {
        showError('q2Error', 'Please select at least one option for Question 2.');
        isValid = false;
    }

    // Validate Question 4 (Radio buttons)
    const q4Checked = document.querySelector('input[name="q4"]:checked');
    if (!q4Checked) {
        showError('q4Error', 'Please select an answer for Question 4.');
        isValid = false;
    }

    // validate question 5
    const q5Answer = document.getElementById('favoriteThings').value.trim();
    if (q5Answer === '') {
        showError('q5Error', 'Please provide an answer for Question 5.');
        isValid = false;
    }


    // Display success message if all inputs are valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'All information has been added correctly';
    }
});

// function to display error message
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// clear user generated errors
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (el) {
        el.textContent = '';
    });
    document.getElementById('successMessage').textContent = '';
}
