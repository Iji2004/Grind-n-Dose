

document.addEventListener("DOMContentLoaded", function () {
    
    const navLinks = document.querySelectorAll("nav li a");

    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            
            navLinks.forEach(nav => nav.classList.remove("active"));

        
            event.target.classList.add("active");
        });
    });
});

// For Mobile Navigation
// Add event listener to the close button
const closeButton = document.querySelector('.close-sidebar-button');
const sidebarCheckbox = document.querySelector('#sidebar-active');

closeButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Add rotation animation class
    closeButton.classList.add('animate');

    // Wait for the animation to complete before closing
    setTimeout(() => {
        sidebarCheckbox.checked = false; // Uncheck the sidebar checkbox
        closeButton.classList.remove('animate'); // Remove the animation class
    }, 500); // Match animation duration
});


//  For Banner
//     
// 
const banner = document.querySelector('.banner');


window.addEventListener('scroll', () => {
  
    const scrollPosition = window.scrollY;

    const fadeOutPoint = 200; 
    banner.style.opacity = Math.max(1 - scrollPosition / fadeOutPoint, 0);
});

// add Ons for banner display
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");
    const webContainer = document.querySelector(".WebContainer");

    // Example interaction
    banner.addEventListener("click", () => {
        webContainer.classList.toggle("highlight");
    });
});;

//for banner logo and details
//
const bannerLogo = document.querySelector(".BannerLogo");

bannerLogo.addEventListener("animationend", () => {
    bannerLogo.classList.add("show");
});
document.addEventListener("DOMContentLoaded", () => {
    const bannerDetails = document.querySelector(".BannerDetails");

    bannerDetails.addEventListener("animationend", () => {
        bannerDetails.classList.add("show");
    });
});







// // for Poster Display
//
//
//
const posterContainer = document.querySelector(".PosterContainer");

const posters = [
    { src: "POSTERS/AnniversaryPromo.png", link: "events.html" },
    { src: "POSTERS/Brewman.png", link: "events.html" },
    { src: "POSTERS/CatMeet.png", link: "events.html" },
    { src: "POSTERS/Ink&Piercing.png", link: "events.html" },
    { src: "POSTERS/BestCombination.png", link: "menu.html" },
    { src: "POSTERS/DrinkoftheMonth.png", link: "menu.html" },
    { src: "POSTERS/Signiture Drinks .png", link: "menu.html" },
    { src: "POSTERS/6 (1).png", link: "menu.html" }
];

posters.forEach((poster) => {
    const item = document.createElement("div");
    item.className = "item";

    const link = document.createElement("a");
    link.href = poster.link;

    const img = document.createElement("img");
    img.src = poster.src;
    img.alt = "Poster";

    link.appendChild(img);
    item.appendChild(link);
    posterContainer.appendChild(item);
});


function updatePositions() {
    const items = document.querySelectorAll(".item");
    items.forEach((item, index) => {
        item.style.transform = ""; 
        item.style.zIndex = "";

        if (index === 0) {
            item.style.transform = "translateX(-300px) scale(0.8)";
            item.style.zIndex = 1;
            item.style.filter = "blur(5px)";
        } else if (index === 1) {
            item.style.transform = "translateX(-150px) scale(0.9)";
            item.style.zIndex = 2;
            item.style.filter = "blur(3px)";
        } else if (index === 2) {
            item.style.transform = "translateX(0px) scale(1.2)";
            item.style.zIndex = 3;
            item.style.filter = "none";
        } else if (index === 3) {
            item.style.transform = "translateX(150px) scale(0.9)";
            item.style.zIndex = 2;
            item.style.filter = "blur(3px)";
        } else if (index === 4) {
            item.style.transform = "translateX(300px) scale(0.8)";
            item.style.zIndex = 1;
            item.style.filter = "blur(5px)";
        }
    });
}

// Move carousel
function moveNext() {
    const items = document.querySelectorAll(".item");
    posterContainer.appendChild(items[0]); 
    updatePositions();
}

function movePrev() {
    const items = document.querySelectorAll(".item");
    posterContainer.prepend(items[items.length - 1]); 
    updatePositions();
}


let isScrolling = false;

// Scroll Prevention
posterContainer.addEventListener(
    "wheel",
    (e) => {
        e.preventDefault(); 
        if (isScrolling) return; 
        isScrolling = true;

        if (e.deltaY > 0) {
            moveNext(); 
        } else {
            movePrev(); 
        }

        setTimeout(() => {
            isScrolling = false; 
        }, 300); 
    },
    { passive: false }
);


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveNext();
    } else if (e.key === "ArrowLeft") {
        movePrev();
    }
});

updatePositions();

// for modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("accountIcon");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// for sign up / sign in
// test dom loaded
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
        
        
    





        username.addEventListener("keyup", (event) =>{

            let UsernameResult = namePattern.test(SignUp.username.value);
    
            if(UsernameResult){
                SignUp.username.setAttribute("class","accepted");
            }else{
                SignUp.username.setAttribute("class","rejected");
            }
            console.log(event.target.value);
        });
        
        email.addEventListener("keyup", (event) =>{

            let emailResult = emailPattern.test(SignUp.email.value);
    
            if(emailResult){
                SignUp.email.setAttribute("class","accepted");
            }else{
                SignUp.email.setAttribute("class","rejected");
            }
            console.log(event.target.value);
        });

        