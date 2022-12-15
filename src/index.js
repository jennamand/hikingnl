// To Top Button
let toTopButton = document.getElementById("toTopButton");
toTopButton.addEventListener("click", scrollToTop);
function scrollToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", showHideToTopButton);
function showHideToTopButton() {
    if(window.scrollY > 600) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
}

// Contact Form
let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let messageInput = document.getElementById("message-input");
let formError = document.getElementById("form-error");
let formSubmit = document.getElementById("formButton");
formSubmit.addEventListener("click", submitForm);

function submitForm(e) {
    e.preventDefault();
    if(validateForm()) {
        formError.innerHTML = "";
    } else {
        formError.innerHTML = "Please complete all the fields to send your message.";
    }
}

function validateForm() {
    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        return false;
    }
    return true;
}









































































//just pushing to publish




// Coffee Price Index
let xhr = new XMLHttpRequest();
xhr.addEventListener("load", processCoffeePriceResponse);
xhr.open("GET", "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json");
xhr.send();
function processCoffeePriceResponse(e) {
    let coffeePrice = JSON.parse(e.target.response)[0].Last;
    document.getElementById("coffee-price").innerHTML = "$" + coffeePrice;
}










/*
let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", processSubmitFormResponse);
        xhr.open("POST", "https://hooks.zapier.com/hooks/catch/5963107/o9gm325");
        let body = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
            to: "sahand.seifi@gmail.com"
        };
        xhr.send(JSON.stringify(body));

function processSubmitFormResponse(e) {
    console.log(e.target.response);
}
*/