// Loan Calculator Function
function calculateLoan() {
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const duration = parseFloat(document.getElementById('loanDuration').value) * 12;
    const payment = (amount * rate) / (1 - Math.pow(1 + rate, -duration));
    document.getElementById('result').innerText = `Monthly Payment: $${payment.toFixed(2)}`;
}

// Email Sending Function (Example using EmailJS)
function sendEmail() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    // Use a third-party email service API for functionality (e.g., EmailJS)
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        user_name: name,
        user_email: email,
        user_message: message,
    }).then(response => {
        alert("Message sent successfully!");
    }).catch(error => {
        alert("Failed to send message.");
    });
}

// Scroll Animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});


// scripts.js
function calculateLoan() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    const interest = (principal * rate * time) / 100;
    const totalAmount = parseFloat(principal) + parseFloat(interest);

    document.getElementById('result').innerText = `Total Amount to be paid: ${totalAmount}`;
}

// Animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
});
