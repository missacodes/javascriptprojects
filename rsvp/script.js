
let formStarted = false;
let ticketPrices = {standard: 49, student:19 }
let currentTotal = 0;

function greetUser () {
    const greet = document.getElementById("greeting")
    greet.innerHTML = "Hello, we hope you enjoy DevCon!"

}

function updatePriceTotal () {
    let checkedTicket = document.querySelector('input[name="ticket"]:checked')
    if (checkedTicket) {
        currentTotal = Number(document.getElementById("attendees").value)*Number(checkedTicket.value);
    }
    else {
        currentTotal = 0;
    }
    document.getElementById("priceTotal").innerHTML = "Total: £" + currentTotal;


}

function showExperienceTip () {
    let level = document.getElementById("experience").value;
    const tip = document.getElementById("experienceTip")
    if (level === "student") {
        tip.innerHTML = "Students get 60% off — pick the Student ticket";
    }
    if (level === "junior") {
        tip.innerHTML = "The Frontend and Backend tracks are perfect for you.";
    }
    if (level === "mid"){
        tip.innerHTML = "Stretch yourself with the DevOps or AI track.";
    }
    if (level === "senior") {
        tip.innerHTML = "Don't miss the architecture deep-dives.";
    }

}
function expandCard(cardId) {
    let card = document.getElementById(cardId);
    card.style.transform = "scale(1.05)";
    card.querySelector(".details").style.display = "block";
}

function shrinkCard(cardId) {
    let card = document.getElementById(cardId);
    card.style.transform = "scale(1)";
    card.querySelector(".details").style.display = "none";
}
function validateName() {
    let name = document.getElementById("fullName").value.trim();
    if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        return false;
    }
    document.getElementById("nameError").innerHTML = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value
    if (!((email.includes("@"))&& (email.includes(".")))) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email.";
       return false;
    }
    document.getElementById("emailError").innerHTML = "";
    return true;

}
function validateTicket() {
    let ticketChecked = document.querySelector('input[name="ticket"]:checked')
    if (!(ticketChecked)) {
        document.getElementById("ticketError").innerHTML = "Please select a ticket.";
        return false;
    }
    document.getElementById("ticketError").innerHTML = "";
    return true;

}
function validateWorkshops() {
    let workshop = document.querySelectorAll('input[name="workshop"]:checked')
    if (workshop.length === 0) {
        document.getElementById("workshopError").innerHTML = "Invalid workshop choice.";
        return false;
    }
    document.getElementById("ticketError").innerHTML = "";
    return true;

}
function validateConduct() {
    conduct = document.getElementById("conduct").checked
    if (!(conduct)) {
        document.getElementById("conductError").innerHTML = "Read and agree to the code of conduct.";
        return false;
    }
    document.getElementById("conductError").innerHTML = "";
    return true;
}


// ============================================================
// DevCon 2026 Registration — script.js
//
// Your JavaScript goes in this file. Build the functions below
// in order. Each TODO corresponds to a learning outcome.
//
// Tip: keep each function short (5–15 lines) and named clearly.
// ============================================================


// ---- Variables to declare at the top ----
// TODO 3.1: declare these variables
//   - eventDate       (a Date object — the target for the countdown)
//   - formStarted     (boolean, starts as false — flips to true when user types)
//   - ticketPrices    (object like { standard: 49, student: 19 })
//   - currentTotal    (number, starts as 0)


// ---- Step 1: greeting + countdown ----
// TODO 2.2: greetUser()
//   Write a welcome message into the #greeting div.

// TODO 2.4 / 3.2: startCountdown() and updateCountdown()
//   Use setInterval to update #countdown every second with
//   days / hours / minutes / seconds until eventDate.


// ---- Step 2: price total ----
// TODO 3.1 / 3.2: updatePriceTotal()
//   Read the chosen ticket radio value and the attendees number,
//   multiply them, write the result into #priceTotal.


// ---- Step 3: experience dropdown tip ----
// TODO 2.3: showExperienceTip()
//   Based on the #experience selected value, write a short
//   tailored tip into the #experienceTip div.


// ---- Step 4: session card hover effects ----
// TODO 2.3: expandCard(id) and shrinkCard(id)
//   Show or hide the .details div inside the card, and change
//   the card's style (e.g. transform: scale(1.05)).


// ---- Step 5: validation ----
// TODO 2.1: one small function per field
//   validateName()      — not empty, at least 2 characters
//   validateEmail()     — contains @ and .
//   validatePhone()     — if filled, digits/spaces only
//   validateTicket()    — a radio must be selected
//   validateWorkshops() — at least one checkbox ticked
//   validateConduct()   — the code-of-conduct checkbox is ticked
//
// Each should write its error message into the matching
// .error span and return true/false.


// ---- Step 6: putting validation together ----
// TODO 2.1 / 3.2: validateForm()
//   Call each validate*() function. If all return true, call
//   showConfirmation() and return false (to stop the form
//   from actually submitting anywhere). Otherwise return false.


// ---- Step 7: confirmation panel ----
// TODO 2.3 / 3.1: showConfirmation()
//   Hide the form, build a summary of the submitted details
//   using the values of the form fields, write that summary
//   into #confirmationDetails, then show #confirmation.

// TODO 2.3 / 4.1: editRegistration()
//   Triggered by the #editBtn click. Hide #confirmation and
//   show the form again.


// ---- Step 8: polish ----
// TODO 4.1: warnBeforeLeave()
//   Attached to body's onunload. If formStarted is true,
//   return a warning string.

// TODO 2.4 (optional): a small celebration animation when
// the confirmation appears — add a class to trigger CSS.