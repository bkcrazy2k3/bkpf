
emailjs.init("PDL5_D1Mts-eVA7E1");

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  console.log(templateParams);  // Check the data in the console

  emailjs
    .send("service_u0r0pcx", "template_krlh4sl", templateParams)
    .then(function (response) {
      alert("Email sent successfully!");
      document.getElementById("contactForm").reset(); // Clear the form after sending
    })
    .catch(function (error) {
      alert("Failed to send email. Error: " + JSON.stringify(error));
    });
});
