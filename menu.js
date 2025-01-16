document.querySelectorAll('.secondary-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const offset = -80; 
            const targetPosition = targetSection.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// for modal
let modal = document.getElementById("myModal");

let btn = document.getElementById("accountIcon");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// for sign up / sign in
document.addEventListener("DOMContentLoaded", () => {
    const navbarUser = document.querySelector(".navbar-username");

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        navbarUser.textContent = storedUsername; // Display username
        navbarUser.style.color = "white";
        navbarUser.style.padding = "10px";
        navbarUser.style.border = "2px solid white";
    }
});


        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn'); 
        const main = document.getElementById('modal-container');

        signUpButton.addEventListener('click', () => {
            main.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            main.classList.remove("right-panel-active");
        });
       
        signUpButton.addEventListener('click', () => {
            // main.classList.add("right-panel-active");
            main.classList.remove("vertical-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
            // main.classList.remove("right-panel-active");
            main.classList.add("vertical-panel-active");
        });

        // forms
        const SignUp = document.querySelector(".Create");
        const SignIn = document.querySelector(".Login");
        const Modal = document.querySelector(".modal"); 
        const navbarUser = document.querySelector(".navbar-username");
        
        let namePattern = /^[A-Z][a-z]{1,20}$/;
        let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-z]{2,3}$/;
      

        SignUp.addEventListener("submit", (event) => {
            event.preventDefault();
        
            // Ensure username and email inputs have "name" attributes
            let UsernameResult = namePattern.test(SignUp.username.value);
            let emailResult = emailPattern.test(SignUp.email.value);
            let message = SignUp.querySelector("span"); // Scoped to SignUp form
        
            console.log(UsernameResult, emailResult);

            if (UsernameResult && emailResult) {
                message.setAttribute("class", "success");
                message.textContent = ""; // Clear any previous error messages
        
                const username = SignUp.username.value;

                alert("Account Created, Welcome " + SignUp.username.value);

                localStorage.setItem("username", username);

                // Hide the modal
                Modal.style.display = "none";

                // Display the username in the navbar
                navbarUser.textContent = username;
                navbarUser.style.color = "white";
                navbarUser.style.padding = "10px";
                navbarUser.style.border = "2px solid white";

                
                const storedUsername = localStorage.getItem("username");
                if(storedUsername){
                    navbarUser.textContent = storedUsername;
                }
              
            } else {
                message.setAttribute("class", "error");
                message.textContent = "Please check your inputs"; 

                SignUp.reset();
            }

            console.log(message);
        });

        // sign in 
        SignIn.addEventListener("submit", (event) => {
            event.preventDefault();
            const password = "appdev123" ;
            let UsernameResult = namePattern.test(SignUp.username.value);
            let message = SignIn.querySelector("span"); 
        
            console.log(UsernameResult);

            if (emailResult) {
                message.setAttribute("class", "success");
                message.textContent = ""; // Clear any previous error messages
        
                const email = SignIn.email.value;

                alert("Account Created, Welcome " + SignIn.email.value);

                localStorage.setItem("username", username);

                // Hide the modal
                Modal.style.display = "none";

                // Display the username in the navbar
                navbarUser.textContent = username;
                navbarUser.style.color = "white";
                navbarUser.style.padding = "10px";
                navbarUser.style.border = "2px solid white";

                const storedUsername = localStorage.getItem("username");
                if(storedUsername){
                    navbarUser.textContent = storedUsername;
                }
              
            } else {
                message.setAttribute("class", "error");
                message.textContent = "Please check your inputs"; 

                SignIn.reset();
            }

            console.log(message);
        });
        