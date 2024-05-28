// Handle form submission for the feedback form
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the feedback message from the textarea
    var feedbackMessage = document.getElementById('feedbackTextarea').value;

    console.log('Feedback submitted:', feedbackMessage);

    // Display a confirmation message
    alert('Thank you for your feedback!');
});

// Handle click event for the "Request Appointment" button
document.querySelector('.btn-request-appointment').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    // Open the appointment page in a new tab
    window.open('Pages/request_appointment.html', '_blank');
});

// Optionally, add handlers for the new buttons if they need to perform specific actions
document.querySelector('.btn-options[href="Pages/find_doctor.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Pages/find_doctor.html';
});

document.querySelector('.btn-options[href="Pages/departments.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Pages/departments.html';
});

document.querySelector('.btn-options[href="Pages/patient_portal.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Pages/patient_portal.html';
});

document.querySelector('.btn-options[href="Pages/services.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Pages/services.html';
});