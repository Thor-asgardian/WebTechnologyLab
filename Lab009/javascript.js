function validateForm() {
    var userId = document.getElementById("userId").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    
    if (userId.length < 5 || userId.length > 12) {
      alert("User ID must be between 5 and 12 characters long");
      return;
    }
    
    if (name.length < 10 || !/^[a-zA-Z ]+$/.test(name)) {
      alert("Name must be at least 10 characters long and contain only alphabets");
      return;
    }
    
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be eight characters including one uppercase letter, one special character, and alphanumeric characters");
      return;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }

    let details = "User ID: " + userId + "\nName: " + name + "\nPassword: " + password +"\nEmail: " + email;
    alert(details);
}