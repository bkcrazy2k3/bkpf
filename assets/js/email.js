const toast=(text)=>{
  Toastify({
      text: text,
      duration: 3000, // Duration in ms
      close: true,    // Show close button
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center`, or `right`
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
};
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
      toast("Email sent successfully!");
      document.getElementById("contactForm").reset(); // Clear the form after sending
    })
    .catch(function (error) {
      toast("Failed to send email. Error: " + JSON.stringify(error));
    });
});
