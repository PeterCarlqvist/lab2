document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate First Name (Only Letters)
    const firstName = document.getElementById('firstName').value.trim();
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

    // Validate Question 1 (Radio Button)
    const q1Checked = document.querySelector('input[name="q1"]:checked');
    if (!q1Checked) {
        showError('q1Error', 'Please select an answer for Question 1.');
        isValid = false;
    }

    // Validate Question 2 (Checkboxes)
    // Validera fråga 2 (checkboxar, minst ett val måste vara gjort)
    const q2Checked = document.querySelectorAll('input[name="q2"]:checked');
    if (q2Checked.length === 0) {
        showError('q2Error', 'Please select at least one option.');
        isValid = false;
    }

    // Visa framgångsmeddelande om allt är korrekt
    if (isValid) {
        document.getElementById('successMessage').textContent = 'All information has been added correctly';
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (el) {
        el.textContent = '';
    });
    document.getElementById('successMessage').textContent = '';
}