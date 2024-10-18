document.getElementById('surveyForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let errorMessages = [];

    if (name.length < 3) {
        errorMessages.push("Name must be at least 3 characters long.");
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    if (errorMessages.length > 0) {
        event.preventDefault(); // Prevent form submission
        alert(errorMessages.join("\n")); // Show error messages
    }
});
