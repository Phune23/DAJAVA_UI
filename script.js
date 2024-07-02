const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".form-popup .close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup ");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
    // console.log("show-menu");
});

//show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

//hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        //console.log(link.id);
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup"); //If the clicked link is signup, then add "show-signup" class to the form popup. Else remove the class.
    });
});