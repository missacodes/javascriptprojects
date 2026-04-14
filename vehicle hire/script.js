const vehicleType = document.getElementById("vehicleType")
const days = document.getElementById("days")
const loyaltyCard = document.getElementById("loyaltyCard")
const finalQuote = document.getElementById("finalQuote")
const cards = document.getElementById("hide")
cards.style.display = "none"

function calculateQuote () {
    const vehicle = vehicleType.value
    const numDays = Number(days.value)
    const cardType = loyaltyCard.value
    const insuranceChecked = document.querySelector('input[name="insurance"]:checked')
    if (!(insuranceChecked))
    {
        alert ("Please select insurance")
        return

    }
    const insurance = insuranceChecked.value
    const customerChecked = document.querySelector('input[name="customer"]:checked')
    if (!(customerChecked))
    {
        alert ("Please select customer Type")
        return

    }
    let customerType = customerChecked.value


    let dailyRate;
    let discount1 = 0
    let discount2 = 0
    let totalCost;

    if (vehicle === "X") {
        alert("Please select a vehicle type")
        return
    }
    if (numDays<=0)
    {
        alert("Please select a valid amount of days")
        return
    }
    if (numDays>10)
    {
        alert("Maximum amount of days is 10 ")
        return
    }

    if (customerType === "existing" && cardType === "X")
    {
        alert("Please select card type")
        return
    }
    if (vehicle === "Saloon") {
        dailyRate = 22.5
    }

    if (vehicle === "Van") {
        dailyRate = 35
    }

    if (vehicle === "High Performance") {
        dailyRate = 28
    }

    totalCost = dailyRate*numDays;
    if (numDays>7)
    {
        discount1 = (totalCost*0.1)
        totalCost = ((totalCost)-discount1)

    }
    if (cardType==="gold" && vehicle === "High Performance") {
        discount2 = 18
        totalCost = totalCost-discount2

    }
    if (insurance === "yes") {
        totalCost = totalCost + 15.5
    }
    let finalCost = totalCost + 50
    let discounts = discount1+discount2

    finalQuote.innerHTML = "Vehicle Type: " + (vehicle) + "<br> No. of days hired: " + (numDays) +
        "<br> New or existing customer: " + (customerType) + "<br> Total hire cost (£50 deposit included) : £" + (finalCost) +
        "<br> Insurance included:" + (insurance) + " <br> Discounts Applied: -£" + (discounts)

}

function radio () {
    const customerChecked = document.querySelector('input[name="customer"]:checked')

    let customerType = customerChecked.value
    if (customerType === "existing") {
        cards.style.display = "block";
    }
    else {

        cards.style.display = "none";
    }
}
