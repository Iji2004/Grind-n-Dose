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
const closeButton = document.querySelector('.close-sidebar-button');
const sidebarCheckbox = document.querySelector('#sidebar-active');


closeButton.addEventListener('click', function (event) {
    event.preventDefault();


    // Add rotation animation class
    closeButton.classList.add('animate');


    // Wait for the animation to complete before closing
    setTimeout(() => {
        sidebarCheckbox.checked = false; 
        closeButton.classList.remove('animate'); 
    }, 500); 
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
       
            let UsernameResult = namePattern.test(SignUp.username.value);
            let emailResult = emailPattern.test(SignUp.email.value);
            let message = SignUp.querySelector("span"); 
       
            console.log(UsernameResult, emailResult);


            if (UsernameResult && emailResult) {
                message.setAttribute("class", "success");
                message.textContent = ""; 
       
                const username = SignUp.username.value;

                alert("Account Created, Welcome " + SignUp.username.value);

                localStorage.setItem("username", username);

                Modal.style.display = "none";

                // Display username in navbar
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




       
