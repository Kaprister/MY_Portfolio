let u_name = document.getElementById("u_name");
let u_message = document.getElementById("message");
let u_email = document.getElementById("u_email");
let u_contact = document.getElementById("u_contact");
let btn = document.getElementById("submit-btn");


let templateParams = {
    name: "",
    message: "",
    contact: "",
    email: ""
};


console.log(templateParams);

btn.addEventListener("click", function(event){
    event.preventDefault();
    templateParams.name = u_name.value;
    templateParams.message = u_message.value;
    templateParams.email = u_email.value;
    templateParams.contact = u_contact.value;
    console.log(templateParams);
    emailjs.send('service_yr6cw13', 'template_rkdjk69', templateParams, 'KtAa7BWE9p1xRgKle')
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });
})