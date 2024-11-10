
function calculateLoan() {
    const principalAmt = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    const interest = (principalAmt * rate * time) / 100;
    const totalAmount = parseFloat(principalAmt) + parseFloat(interest);

    document.getElementById('result').innerText = `Total Amount to be paid: ${totalAmount}`;
}


function sendEmail() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        document.getElementById('userMessage').value = '';
        alert("Message sent successfully!");
    } else {
        alert("Please enter a valid email address.");
    }
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

