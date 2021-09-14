
//gets the data needed
function getData() {
    let loanAmount = document.getElementById("loan-amount").value;
    let terms = document.getElementById("terms").value;
    let interest = document.getElementById("interest").value;

    //make sure they are values
    loanAmount = parseFloat(loanAmount);
    terms = parseInt(terms);
    interest = parseFloat(interest);
    
    //calling the logic
    let loanContent = loanShark(loanAmount, terms, interest);

    //calling the display
    displayData(loanContent);
}


//solves the issue needed
function loanShark(loan, term, interest) {

    let totalMonthPayment = loan * ((interest / 1200)/(1 - ((1 + interest / 1200) ** (term * -1))));
    let totalAmount = totalMonthPayment * term;
    let totInterest = totalAmount - loan;
    return data = {
        loan,
        totalMonthPayment,
        totalAmount,
        totInterest
    }
}


//displays the data
function displayData(data) {

    document.getElementById("monthPays").innerHTML = ` $${data.totalMonthPayment.toFixed(2)}`;
    document.getElementById("principal").innerHTML = ` $${data.loan.toFixed(2)}`;
    document.getElementById("interested").innerHTML = `$${data.totInterest.toFixed(2)}`;
    document.getElementById("costTotal").innerHTML = `$${data.totalAmount.toFixed(2)}`;


}