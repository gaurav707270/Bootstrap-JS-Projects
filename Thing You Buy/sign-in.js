const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirm_passwordInput = document.getElementById("confirm_password");
// const submite_btn = document.getElementById("submite_btn");


form.addEventListener("submit_btn", function (event) {
    event.preventDefault(); // stop page reload

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirm_password = confirm_passwordInput.value;

    console.log(email, password);
});
