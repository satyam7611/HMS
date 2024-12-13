// Show different sections based on the navigation
document.getElementById('profileLink').addEventListener('click', function() {
    showSection('profileSection');
});
document.getElementById('appointmentLink').addEventListener('click', function() {
    showSection('appointmentSection');
});
document.getElementById('billingLink').addEventListener('click', function() {
    showSection('billingSection');
});
document.getElementById('recordsLink').addEventListener('click', function() {
    showSection('recordsSection');
});

// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Handle Profile Form Submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const profileDisplay = document.getElementById('profileDisplay');
    profileDisplay.innerHTML = `
        <h3>Profile Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;
});

// Handle Appointment Form Submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('appointmentDate').value;
    const doctor = document.getElementById('doctor').value;
    const time = document.getElementById('time').value;

    const appointmentDisplay = document.getElementById('appointmentDisplay');
    appointmentDisplay.innerHTML = `
        <h3>Appointment Confirmation</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Time:</strong> ${time}</p>
    `;
});

// Initial display settings
showSection('profileSection');  // Show the profile section by default
// Handle Payment Form Submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Validate the payment form (basic validation for mockup)
    if (cardName && cardNumber.length === 16 && expiryDate && cvv.length === 3) {
        // Simulate payment success
        document.getElementById('paymentStatus').textContent = "Payment successful! Thank you.";
        document.getElementById('paymentStatus').classList.remove('error');
    } else {
        // Display error if validation fails
        document.getElementById('paymentStatus').textContent = "Payment failed! Please check your details.";
        document.getElementById('paymentStatus').classList.add('error');
    }

    // Reset form after submission
    document.getElementById('paymentForm').reset();
});

