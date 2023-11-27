let discountCodes ={
    YHDNU32: true,
    JANJC63: true,
    PWKCN25: true,
    SJDPO96: true,
    POCIE24: true,
};

let priceOfTypeOfWorks ={
    backend: 20.50,
    frontend: 15.30,
    projectAnalyst: 33.60,
};


let formattatorePrezzo = new Intl.NumberFormat(navigator.languages[0],{
    style:"currency",
    currency: "EUR"
});

let formElement = document.getElementById("validForm");
let typeOfWork = document.getElementById("typeOfWork");
let hoursRequested = document.getElementById("hours");
let spanPrice = document.getElementById("spanPrice");
let discountCode = document.getElementById("discount");
let validDiscount = document.getElementById("feedbackValidDiscount");
let expiredDiscount = document.getElementById("feedbackExpiredDiscount");








function checkForm(event) {
    event.preventDefault();



let validForm = formElement.checkValidity();
if(validForm) {
    let enteredCode = discountCode.value;
    let price = priceOfTypeOfWorks[typeOfWork.value] * hoursRequested.value;
    if (enteredCode) {
        if(discountCodes.hasOwnProperty(enteredCode)) {
            if (discountCodes[enteredCode]) {
                price = price * (1-0.25);
                discountCodes[enteredCode] = false;
                getValidDiscount();
                getPrice(price);

            } else {
                getExpiredDiscount();
                getPrice(price);
            }
        } 
    } else getPrice(price);
  }
};









function getPrice(price) {
    spanPrice.parentNode.parentNode.classList.remove("d-none");
    spanPrice.innerHTML = formattatorePrezzo.format(price);
}

function getValidDiscount() {
    validDiscount.innerHTML = "Lo sconto del 25% é stato applicato";
    

}

function getExpiredDiscount() {
    expiredDiscount.innerHTML = "Codice scaduto";
    discountCode.classList.add("is-invalid", "text-danger");
}



















