// script.js

function toggleVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === 'password' ? 'text' : 'password';
}
  
function setValidity(id, isValid) {
    const el = document.getElementById(id);
    // console.log(el.getElementsByTagName("img")[0].src);
    if(isValid) {
        el.getElementsByTagName("img")[0].src = "designs/Eo_circle_green_checkmark.svg.png";
        el.className = "valid";
    }
    else {
        el.getElementsByTagName("img")[0].src = "designs/round-checkmark-icon-in-red-free-vector.jpg";
        el.className = "invalid";
    }
    
}

  function validatePassword() {
    const password = document.getElementById("newPassword").value;
  
    setValidity("length", password.length >= 8 && password.length <= 64);
    setValidity("uppercase", /[A-Z]/.test(password));
    setValidity("lowercase", /[a-z]/.test(password));
    setValidity("number", /\d/.test(password));
    setValidity("special", /[!@#$%^&*]/.test(password));
  
    validateConfirmPassword();
}
  
  
  function validateConfirmPassword() {
    const [currentPassword, newPassword, confirmPassword] = getInputs();
   
  
    validateForm();
  }
  function validateForm() {
    const isValid = [...document.querySelectorAll(".requirements li")].every(li => li.className === "valid");
    const [currentPassword, newPassword, confirmPassword] = getInputs();
    const allFilled = currentPassword && newPassword && confirmPassword;
    const passwordsMatch = newPassword === confirmPassword;
    const notSameAsOld = currentPassword !== newPassword;
    const feedback = document.getElementById("confirmFeedback"); 
  
    if (confirmPassword === "") {
      feedback.textContent = "";    
      return;
    }
  
    if (newPassword === confirmPassword && newPassword !== "" && currentPassword !== newPassword) {
      feedback.textContent = "Passwords match ✅";
      feedback.style.color = "green";
    } else if (newPassword !== confirmPassword && newPassword !== "") {
      feedback.textContent = "Passwords do not match ❌";
      feedback.style.color = "red";
    }
    else if (confirmPassword === newPassword && currentPassword === newPassword) {
      feedback.textContent = "You are using an old password ❌";
      feedback.style.color = "red";
    }
    document.getElementById("saveBtn").disabled = !(isValid && allFilled && passwordsMatch && notSameAsOld);
  }
  
  function getInputs() {
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    return [
        currentPassword,
        newPassword,
        confirmPassword]
    ;
  }
  document.getElementById("passwordForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Changes saved successfully ✅");
  });


  const Inputs = document.querySelectorAll('input-group input');
    Inputs.forEach(input => {
     input.addEventListener('input', validateForm);
});
  
