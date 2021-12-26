// Purchase price bar setup

let sliderPurchase = document.getElementById('range');
let purchaseValue = document.getElementById('purchase-price');

purchaseValue.innerHTML = sliderPurchase.value;

sliderPurchase.oninput = function() {
    purchaseValue.innerHTML = this.value;

}


sliderPurchase.addEventListener('input', e => {
    var x = sliderPurchase.value;
    var y = x / 1000;
    var color = 'linear-gradient(90deg, #0a58ca30 ' + y + '%, white ' + y + '%)';
    sliderPurchase.style.background = color;
})


// down-payment bar setup
let sliderPayment = document.getElementById('range2');
let downPayment = document.getElementById('down-payment');

downPayment.innerHTML = sliderPayment.value;

sliderPayment.oninput = function() {
    downPayment.innerHTML = this.value;

}

sliderPayment.addEventListener('input', e => {
    var x = sliderPayment.value;
    var y = x / 100;
    var color = 'linear-gradient(90deg, #0a58ca30 ' + y + '%, white ' + y + '%)';
    sliderPayment.style.background = color;
})

// repayment-time bar setup
let sliderRepayment = document.getElementById('range3');
let RepaymentTime = document.getElementById('repayment-time');

RepaymentTime.innerHTML = sliderRepayment.value;

sliderRepayment.oninput = function() {
    RepaymentTime.innerHTML = this.value;

}

sliderRepayment.addEventListener('input', e => {
    var x = sliderRepayment.value;
    var y = x * 4;
    var color = 'linear-gradient(90deg, #0a58ca30 ' + y + '%, white ' + y + '%)';
    sliderRepayment.style.background = color;
})

// repayment-time bar setup
let sliderinterestRate = document.getElementById('range4');
let interestRate = document.getElementById('interestRate');

interestRate.innerHTML = sliderinterestRate.value;

sliderinterestRate.oninput = function() {
    interestRate.innerHTML = this.value;

}

sliderinterestRate.addEventListener('input', e => {
    var x = sliderinterestRate.value;
    var y = x * 10;
    var color = 'linear-gradient(90deg, #0a58ca30 ' + (y - 5) + '%, white ' + y + '%)';
    sliderinterestRate.style.background = color;
})

// loan amount calculate (Purchase Price - Down Payment)
let leanAmount = document.getElementById('loan-amount');


sliderPurchase.addEventListener('input', function() {
    leanAmount.innerHTML = (sliderPurchase.value) - (sliderPayment.value);
})

sliderPayment.addEventListener('input', function() {
    leanAmount.innerHTML = (sliderPurchase.value) - (sliderPayment.value);
})


// paymrnt per month calculate M = P[r(1+r)^n/((1+r)^n)-1)]
// M = the total monthly mortgage payment
// P = the principal loan amount(Purchase Price - Down Payment)
// r = your monthly interest rate
// n = number of payments over the loan’s lifetime.

let monthRate = document.getElementById('final-value')


document.querySelectorAll('.result').forEach(item => {
    item.addEventListener('input', event => {
        let p = leanAmount.innerHTML;
        let r = sliderinterestRate.value;
        let n = (sliderRepayment.value);

        try {
            let result = p * (r * ((1 + r) ^ n) / (((1 + r) ^ n) - 1));
            let results = result / 12;

            if (results < 0) {
                monthRate.innerHTML = 'Negative!'
            } else {
                monthRate.innerHTML = results.toFixed(2);
            }
        } catch {
            monthRate.innerHTML = 'Error!'
        }
    })
})

// information show with clicking the buttom

let loanResult = document.getElementById('loanResult');
let paymentMonth = document.getElementById('paymentMonth');
let buttom = document.getElementById('buttom');
let hide = document.getElementById('hide');
buttom.addEventListener('click', function() {
    hide.style.display = 'block';
    loanResult.innerHTML = leanAmount.innerHTML;
    paymentMonth.innerHTML = monthRate.innerHTML;

})